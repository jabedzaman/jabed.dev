export default function Page() {
  return (
    <main className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1 ">
      {new Array(100).fill(0).map((_, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={i}
          src={`https://picsum.photos/1000/1000?random=${i}`}
          alt={i.toString()}
          className="object-cover w-full h-full"
        />
      ))}
    </main>
  );
}
