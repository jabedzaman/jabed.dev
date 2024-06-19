import type { Metadata } from "next";
import { getMusicInfo } from "../../server/music";
import { bricolage } from "~/libs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Music",
  description: "What I'm currently listening to, top artists and tracks",
};

export default async function Page() {
  const { top_artists, top_tracks, recently_played } = await getMusicInfo();
  return (
    <main>
      <h1
        className={
          bricolage.className +
          " text-2xl md:text-4xl leading-snug md:leading-tight"
        }
      >
        Recently Played
      </h1>
      <ul className="my-5 flex flex-col gap-4">
        {recently_played.items.slice(0, 10).map((track, i) => (
          <li key={i} className="flex items-center space-x-2">
            <Link href={track.track.external_urls.spotify}>
              <img
                className="w-20 h-20"
                src={track.track.images![0].url}
                alt={track.track.name}
              />
            </Link>
            <div className="flex flex-col justify-between">
              <h3>{track.track.name}</h3>
              <div className="flex flex-col">
                <Link
                  className="text-xs text-[#cecece]"
                  href={track.track.external_urls.spotify}
                >
                  {track.track.artists[0].name}
                </Link>
                <Link
                  className="text-xs text-[#cecece]"
                  href={track.track.album.external_urls.spotify}
                >
                  {track.track.album.name}
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <h1
        className={
          bricolage.className +
          " text-2xl md:text-4xl leading-snug md:leading-tight"
        }
      >
        Top Tracks
      </h1>
      <ul className="my-5 flex flex-col gap-4">
        {top_tracks.items.slice(0, 10).map((track, i) => (
          <li key={i} className="flex items-center space-x-2">
            <Link href={track.external_urls.spotify}>
              <img
                className="w-20 h-20"
                src={track.images[0].url}
                alt={track.name}
              />
            </Link>
            <div className="flex flex-col justify-between">
              <h3>{track.name}</h3>
              <div className="flex flex-col">
                <Link
                  className="text-xs text-[#cecece]"
                  href={track.external_urls.spotify}
                >
                  {track.artists[0].name}
                </Link>
                <Link
                  className="text-xs text-[#cecece]"
                  href={track.album.external_urls.spotify}
                >
                  {track.album.name}
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <h1
        className={
          bricolage.className +
          " text-2xl md:text-4xl leading-snug md:leading-tight"
        }
      >
        Top Artists
      </h1>
      <ul className="my-5 flex flex-col gap-4">
        {top_artists.items.slice(0, 5).map((artist, i) => (
          <li key={i} className="flex items-center space-x-2">
            <Link href={artist.external_urls.spotify}>
              <img
                className="w-20 h-20"
                src={artist.images[0].url}
                alt={artist.name}
              />
            </Link>
            <div className="flex flex-col justify-between">
              <h3>{artist.name}</h3>
              <div className="flex flex-col">
                <p className="text-xs text-[#cecece]">
                  {artist.followers} followers
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
