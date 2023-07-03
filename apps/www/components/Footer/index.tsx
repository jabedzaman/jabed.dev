import Link from "next/link";
import NowPlaying from "./NowPlaying";

type Props = {};

const ExternalLink = ({ href, children }: any) => (
  <a
    className="text-gray-400 hover:text-gray-500 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

function index({}: Props) {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full md:mt10 mt-5 mb-8 ease-in-out">
      <hr className="w-full border-1 border-gray-800 mb-3" />
      <NowPlaying />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="hidden md:flex flex-col space-y-2">
          <Link
            href="/"
            className="text-gray-400 hover:text-gray-500 transition"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-gray-400 hover:text-gray-500 transition"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="text-gray-400 hover:text-gray-500 transition"
          >
            About
          </Link>
        </div>
        <div className="flex flex-col space-y-2 ">
          <ExternalLink href="https://twitter.com/xenseee">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/jabedzaman">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://www.youtube.com/c/xenseee">
            YouTube
          </ExternalLink>
        </div>
        <div className="hidden md:flex flex-col space-y-2">
          <Link
            href="/posts"
            className="text-gray-400 hover:text-gray-500 transition"
          >
            Blogs
          </Link>
          <Link
            href="/guestbook"
            className="text-gray-400 hover:text-gray-500 transition"
          >
            Guestbook
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default index;
