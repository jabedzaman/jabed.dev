import { useRouter } from "next/router";

export default function Redirect() {
  const router = useRouter();
  const { slug } = router.query;
  const urls = [
    { github: "https://github.com/jabedzaman" },
    { linkedin: "https://www.linkedin.com/in/jabedzaman/" },
    { twitter: "https://twitter.com/jabedzaman" },
    { email: "mailto:jabedzaman004@gmail.com" },
    { reddit: "https://www.reddit.com/u/jabedzaman" },
    { youtube: "https://www.youtube.com/channel/xenseee" },
    { demn: "https://demn.jabed.me/" },
  ];
  const url = urls.find((u) => Object.keys(u)[0] === slug);
  if (url) {
    router.push(Object.values(url)[0]);
    return (
      <h1 className="flex items-center justify-center h-36">
        redirecting to {slug}
      </h1>
    );
  } else {
    return (
      <div className="sm:border-l sm:border-gray-200 dark:border-gray-800 sm:pl-6 max-w-3xl mx-auto my-10 mb-40 px-5">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-200 tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-1 text-base text-gray-500">
          Please check the URL in the address bar and try again.
        </p>
      </div>
    );
  }
}
