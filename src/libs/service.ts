import { Top_Artists, Top_Tracks, recent_tracks_res } from "@/types";

const spotifyConfig = {
  SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN,
};

const client_id = spotifyConfig.SPOTIFY_CLIENT_ID;
const client_secret = spotifyConfig.SPOTIFY_CLIENT_SECRET;
const refresh_token = spotifyConfig.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const TOP_ARTISTS_ENDPOINT = `https://api.spotify.com/v1/me/top/artists`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const params = new URLSearchParams();
  params.append("grant_type", "refresh_token");
  params.append("refresh_token", refresh_token!);

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  return response.json();
};

async function getMusicInfo() {
  const { access_token } = await getAccessToken();
  const top_tracks = await fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    next: {
      revalidate: 1,
    },
  }).then(async (res) => {
    const data = (await res.json()) as {
      items: Top_Tracks[];
    };
    return {
      items: data.items.map((track) => {
        return {
          artists: track.artists.map((artist) => {
            return {
              external_urls: artist.external_urls,
              name: artist.name,
            };
          }),
          external_urls: track.external_urls,
          name: track.name,
          album: {
            name: track.album.name,
            external_urls: track.album.external_urls,
          },
          images: track.album.images.map((image) => {
            return {
              height: image.height,
              width: image.width,
              url: image.url,
            };
          }),
        };
      }),
    };
  });
  const top_artists = await fetch(TOP_ARTISTS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    next: {
      revalidate: 1,
    },
  }).then(async (res) => {
    const data = (await res.json()) as {
      items: Top_Artists[];
    };
    return {
      items: data.items.map((artist) => {
        return {
          external_urls: artist.external_urls,
          name: artist.name,
          followers: artist.followers.total,
          images: artist.images.map((image) => {
            return {
              height: image.height,
              width: image.width,
              url: image.url,
            };
          }),
        };
      }),
    };
  });
  const recently_played = await fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    next: {
      revalidate: 1,
    },
  }).then(async (res) => {
    const data = (await res.json()) as recent_tracks_res;
    if (!data.items) {
      return {
        items: [],
      };
    }
    const { items } = data;
    return {
      items: items.map((item) => {
        return {
          track: {
            artists: item.track.artists!.map((artist) => {
              return {
                external_urls: artist.external_urls,
                name: artist.name,
              };
            }),
            external_urls: item.track.external_urls,
            name: item.track.name,
            album: {
              name: item.track.album.name,
              external_urls: item.track.album.external_urls,
            },
            images: item.track.album.images!.map((image) => {
              return {
                height: image.height,
                width: image.width,
                url: image.url,
              };
            }),
          },
          played_at: item.played_at,
        };
      }),
    };
  });
  const data = {
    top_tracks,
    top_artists,
    recently_played,
  };
  return data;
}

function convertNumberToReadableString(num: number): string {
  return num.toLocaleString("en-US");
}

export { convertNumberToReadableString, getMusicInfo };