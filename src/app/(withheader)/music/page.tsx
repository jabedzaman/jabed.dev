import type { Metadata } from "next";
import { getMusicInfo } from "../../server/music";

export const metadata: Metadata = {
  title: "Music",
  description: "What I'm currently listening to, top artists and tracks",
};

export default async function Page() {
  const { current_playing, top_artists, top_tracks } = await getMusicInfo();
  return (
    <main>
      <h1>Music</h1>
      <h2>Currently listening to</h2>
      <div>
        {current_playing?.is_playing ? (
          <div>
            <h3>{current_playing.item.name}</h3>
            <p>{current_playing.artists[0].name}</p>
          </div>
        ) : (
          <p>Not currently listening to anything</p>
        )}
      </div>

      <h2>Top Artists</h2>
      <ul>
        {top_artists.items.slice(0, 5).map((artist, i) => (
          <div key={i}>
            <li>{artist.name}</li>
            <img
              className="w-20 h-20 rounded-full"
              src={artist.images[0].url}
              alt={artist.name}
            />
          </div>
        ))}
      </ul>
      <h2>Top Tracks</h2>
      <ul>
        {top_tracks.items.slice(0, 10).map((track, i) => (
          <li key={i}>
            <img
              className="w-20 h-20"
              src={track.images[0].url}
              alt={track.name}
            />
            <span>
              {track.name} by {track.artists[0].name}˝
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}
