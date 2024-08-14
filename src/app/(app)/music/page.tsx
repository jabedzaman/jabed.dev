export const dynamic = "force-dynamic"; // defaults to auto

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { bricolage } from "~/shared/fonts";
import { convertNumberToReadableString } from "~/shared/utils";

export const metadata: Metadata = {
  title: "music",
  description: "What I'm currently listening to, top artists and tracks",
};

export default async function Page() {
  const { top_artists, top_tracks, recently_played } = await fetch(
    "https://jabed.dev/api/music",
    {
      next: {
        revalidate: 1,
      },
    }
  ).then((res) => res.json());
  return (
    <main>
      <h1
        className={
          bricolage.className +
          " text-2xl md:text-4xl leading-snug md:leading-tight"
        }
      >
        Top Artists
      </h1>
      <ul className="my-5 flex flex-col gap-4">
        {top_artists.items.slice(0, 5).map((artist: any, i: number) => (
          <li key={i} className="flex items-center space-x-2">
            <Link href={artist.external_urls.spotify}>
              <Image
                className="w-20 h-20"
                src={artist.images[0].url}
                alt={artist.name}
                width={80}
                height={80}
              />
            </Link>
            <div className="flex flex-col justify-between">
              <h3>{artist.name}</h3>
              <div className="flex flex-col">
                <p className="text-xs text-[#cecece]">
                  {convertNumberToReadableString(artist.followers)} followers
                </p>
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
        {top_tracks.items.slice(0, 10).map((track: any, i: number) => (
          <li key={i} className="flex items-center space-x-2">
            <Link href={track.external_urls.spotify}>
              <Image
                className="w-20 h-20"
                src={track.images[0].url}
                alt={track.name}
                width={80}
                height={80}
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
    </main>
  );
}
