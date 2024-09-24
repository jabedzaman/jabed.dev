import { convertNumberToReadableString, getMusicInfo } from "@/libs/service";
import { Link } from "next-view-transitions";
import Image from "next/image";

export const dynamic = "force-dynamic"

export default async function Page() {
  const { top_artists, top_tracks } = await getMusicInfo();
  return (
    <div>
      <h1 className="text-2xl leading-snug md:leading-tight">Top Artists</h1>
      <ul className="my-5 grid md:grid-cols-2 grid-cols-1 gap-4">
        {top_artists.items.slice(0, 6).map((artist: any, i: number) => (
          <li key={i} className="flex items-center space-x-2 col-span-1">
            <Link href={artist.external_urls.spotify} className="h-20 w-20">
              <Image
                className="w-full h-full"
                objectFit="cover"
                src={artist.images[0].url}
                alt={artist.name}
                width={120}
                height={120}
              />
            </Link>
            <div className="flex flex-col justify-between">
              <h3>{artist.name}</h3>
              <div className="flex flex-col">
                <p className="text-xs text-[#181818]">
                  {convertNumberToReadableString(artist.followers)} followers
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <h1 className="text-2xl leading-snug md:leading-tight">Top Tracks</h1>
      <ul className="my-5 grid md:grid-cols-2 grid-cols-1 gap-4">
        {top_tracks.items.slice(0, 10).map((track: any, i: number) => (
          <li key={i} className="flex items-center space-x-2 col-span-1">
            <Link href={track.external_urls.spotify} className="h-20 w-20">
              <Image
                className="w-full h-full"
                objectFit="cover"
                src={track.images[0].url}
                alt={track.name}
                width={120}
                height={120}
              />
            </Link>
            <div className="flex flex-col justify-between">
              <h3>
                {track.name.length > 20
                  ? `${track.name.slice(0, 20)}...`
                  : track.name}
              </h3>
              <div className="flex flex-col">
                <Link
                  className="text-xs text-[#181818]"
                  href={track.external_urls.spotify}
                >
                  {track.artists[0].name.length > 20
                    ? `${track.artists[0].name.slice(0, 20)}...`
                    : track.artists[0].name}
                </Link>
                <Link
                  className="text-xs text-[#181818]"
                  href={track.album.external_urls.spotify}
                >
                  {track.album.name.length > 20
                    ? `${track.album.name.slice(0, 20)}...`
                    : track.album.name}
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
