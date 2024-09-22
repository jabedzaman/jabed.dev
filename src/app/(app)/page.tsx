import { Link } from "next-view-transitions";

export default function Home() {
  return (
    <div>
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
          I keep building{" "}
          <Link href="/projects" className="text-blue-500 hover:text-blue-700">
            crazy stuffs
          </Link>
          . Also sometimes I yap over{" "}
          <Link href="/posts" className="text-blue-500 hover:text-blue-700">
            my blog posts
          </Link>
          . In addition to that, I keep{" "}
          <Link href="/music" className="text-blue-500 hover:text-blue-700">
            listening
          </Link>{" "}
          to random af music. Moreover lately, I got an crazy fondness towards
          self-hosting everything.
        </p>
        <p>
          I have assisted more than 2 startups in their inital phase by building
          and scaling their technical infrastructure and product development
        </p>
        <p>
          Feel free to stalk me at{" "}
          <Link
            href="https://github.com/jabedzaman"
            className="text-blue-500 hover:text-blue-700"
            target="_blank"
          >
            github
          </Link>
          ,{" "}
          <Link
            href="https://x.com/jbdzmn"
            className="text-blue-500 hover:text-blue-700"
            target="_blank"
          >
            x (formerly twitter)
          </Link>{" "}
          or{" "}
          <Link
            href="https://linkedin.com/in/jabedzaman"
            className="text-blue-500 hover:text-blue-700"
            target="_blank"
          >
            linkedin
          </Link>
        </p>
      </div>
    </div>
  );
}
