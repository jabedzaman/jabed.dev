import Image from "next/image";
import Link from "next/link";
import { spotify } from "~/lib/spotify";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm uppercase tracking-wider text-neutral-500">
      {children}
    </h2>
  );
}

function H1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-4xl md:text-5xl font-serif leading-tight">
      {children}
    </h1>
  );
}

function Tile({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-neutral-200 dark:border-neutral-800 p-4 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
      {children}
    </div>
  );
}

export default async function Page() {
  const [artists, tracks] = await Promise.all([
    spotify.getTopArtists("long_term", 8),
    spotify.getTopTracks("long_term", 8),
  ]);

  return (
    <main className="space-y-10">
      <header className="space-y-2">
        <H1>music.</H1>
        <p className="max-w-2xl text-neutral-600 dark:text-neutral-400">
          every year my spotify wrapped gets over 5 digit hours listened.
        </p>
      </header>

      <section className="space-y-4">
        <SectionTitle>my top tracks of all time</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tracks.map((track: any) => {
            const img = track.album?.images?.[0];
            const artistsNames = Array.isArray(track.artists)
              ? track.artists.join(", ")
              : track.artists;
            return (
              <Link
                key={track.id}
                href={`/music/track/${track.id}`}
                aria-label={`Open ${track.name}`}
                className="group"
              >
                <Tile>
                  <div className="flex items-start gap-4">
                    <div className="relative w-20 h-20 bg-neutral-100 dark:bg-neutral-900 shrink-0">
                      {img ? (
                        <Image
                          src={img.url}
                          alt={track.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      ) : null}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-medium line-clamp-2 group-hover:underline underline-offset-2">
                        {track.name}
                      </h3>
                      <p className="text-xs text-neutral-500 line-clamp-1">
                        {artistsNames}
                      </p>
                    </div>
                  </div>
                </Tile>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="space-y-4">
        <SectionTitle>my top artists of all time</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {artists.map((artist: any) => {
            const img = artist.images?.[0];
            return (
              <Link
                key={artist.id}
                href={`/music/${artist.id}`}
                aria-label={`View ${artist.name}`}
                className="group"
              >
                <Tile>
                  <div className="relative w-full aspect-square mb-3 bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
                    {img ? (
                      <Image
                        src={img.url}
                        alt={artist.name}
                        fill
                        className="object-cover"
                        sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 25vw"
                        priority={false}
                      />
                    ) : null}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-medium line-clamp-1 group-hover:underline underline-offset-2">
                      {artist.name}
                    </h3>
                    <p className="text-xs text-neutral-500">
                      {Number(artist.followers).toLocaleString()} followers
                    </p>
                  </div>
                </Tile>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
