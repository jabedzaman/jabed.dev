import * as React from "react";
import Link from "next/link";
import { AnimatedBars } from "~/components";
import { spotifyConfig } from "~/config";

const client_id = spotifyConfig.SPOTIFY_CLIENT_ID;
const client_secret = spotifyConfig.SPOTIFY_CLIENT_SECRET;
const refresh_token = spotifyConfig.SPOTIFY_REFRESH_TOKEN;

type SpotifyTrack = {
  timestamp: number;
  context: null | any;
  progress_ms: number;
  item: {
    album: {
      album_type: string;
      artists: {
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
      }[];
      available_markets: string[];
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      images: {
        height: number;
        url: string;
        width: number;
      }[];
      name: string;
      release_date: string;
      release_date_precision: string;
      total_tracks: number;
      type: string;
      uri: string;
    };
    artists: {
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      name: string;
      type: string;
      uri: string;
    }[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: {
      isrc: string;
    };
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string | null;
    track_number: number;
    type: string;
    uri: string;
  };
  currently_playing_type: string;
  actions: {
    disallows: {
      resuming: boolean;
      toggling_repeat_context: boolean;
      toggling_repeat_track: boolean;
      toggling_shuffle: boolean;
    };
  };
  is_playing: boolean;
};

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const params = new URLSearchParams();
  params.append("grant_type", "refresh_token");
  params.append("refresh_token", refresh_token);

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

export async function Spotify() {
  const { access_token } = await getAccessToken();
  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    next: {
      revalidate: 1,
    },
  });
  const data = (await response.json()) as SpotifyTrack;
  return (
    <footer className="flex flex-col justify-center items-start w-full md:mt10 mt-5 mb-8 ease-in-out">
      <hr className="w-full border-1 border-gray-800 mb-3" />
      <div className="flex flex-row-reverse items-center sm:flex-row mb-3 space-x-0 sm:space-x-2 w-full">
        {data?.is_playing ? (
          <AnimatedBars />
        ) : (
          <svg className="h-4 w-4 ml-auto mt-[-2px]" viewBox="0 0 168 168">
            <path
              fill="#1ED760"
              d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
            />
          </svg>
        )}
        <div className="inline-flex flex-col sm:flex-row w-full max-w-full truncate">
          {data?.item.name ? (
            <Link
              className="capsize text-gray-200 font-medium  max-w-max truncate"
              href={data.item.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.item.name}
            </Link>
          ) : (
            <p className="capsize text-gray-200 font-medium">Not Playing</p>
          )}
          <span className="capsize mx-2 text-gray-300 hidden sm:block">
            {" - "}
          </span>
          <p className="capsize text-gray-300 max-w-max truncate">
            {data?.item.artists ? (
              <Link
                href={data.item.artists[0].external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.item.artists[0].name}
              </Link>
            ) : (
              "Spotify"
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
