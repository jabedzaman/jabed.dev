export default function Page() {
  return (
    <main className="grid grid-cols-1 gap-1 md:grid-cols-3">
      {new Array(51).fill(0).map((_, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={i}
          src={`https://picsum.photos/2480/2480?random=${i}`}
          alt={i.toString()}
          className="h-[700px] w-full object-cover"
        />
      ))}
    </main>
  )
}
