export default function Page({ params }: any) {
  const slug  = params.slug;
  return <div>My Post {slug}</div>;
}
