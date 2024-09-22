import { Link } from "next-view-transitions";

export default function Home() {
  return (
    <div>
      <h1 className="font-medium py-5">Jabed Zaman</h1>
      <div className="text-gray-800 space-y-4 leading-snug">
        <p>
          I&apos;m a self taught full stack developer, CS student and OSS
          enthusiast. I am currently building{" "}
          <Link
            href="https://rubiks.cloud"
            className="text-blue-500 hover:text-blue-700"
          >
            rubiks.cloud
          </Link>
          , a privacy focused personalized cloud storage platform.
        </p>
        <p>
          I keep building crazy stuffs. Have a look at them over{" "}
          <Link
            href="https://github.com/jabedzaman"
            className="text-blue-500 hover:text-blue-700"
          >
            my github
          </Link>
          . Also sometimes I yap over{" "}
          <Link href="/posts" className="text-blue-500 hover:text-blue-700">
            my blog posts
          </Link>
          .
        </p>
        <p>
          I have assisted more than 2 startups in their inital phase by building
          and scaling their technical infrastructure and product development
        </p>
      </div>
    </div>
  );
}
