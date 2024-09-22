import { Metadata } from "next";

export const generateMetadata = ({
  params,
}: {
  params: { slug: string };
}): Metadata => {
  return {
    title: `Blog - ${params.slug}`,
  };
};

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
  );
}
