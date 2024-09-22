export default function Page() {
    return (
      <main className="grid md:grid-cols-3 grid-cols-1 gap-1 ">
        {new Array(51).fill(0).map((_, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={`https://picsum.photos/2480/2480?random=${i}`}
            alt={i.toString()}
            className="object-cover w-full h-[700px]"
          />
        ))}
      </main>
    );
  }