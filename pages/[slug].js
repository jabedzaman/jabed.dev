import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Redirect() {
  const router = useRouter();
  const { slug } = router.query;
  const availableSlugs = [
    "github",
    "linkedin",
    "twitter",
    "reddit",
    "youtube",
    "demn",
  ];

  const urls = [
    "https://github.com/jabedzaman",
    "https://www.linkedin.com/in/jabedzaman/",
    "https://twitter.com/jabedzaman",
    "https://www.reddit.com/user/jabedzaman",
    "https://www.youtube.com/channel/xenseee",
    "https://demn.jabed.me/",
  ];

  if (availableSlugs.includes(slug)) {
    const index = availableSlugs.indexOf(slug);
    console.log(urls[index]);
    useEffect(() => {
      router.push(urls[index]);
    }, []);
    return (
      <div>
        <h1>Redirecting...</h1>
      </div>
    );
  } else {
    return (
      <div className="sm:border-l sm:border-gray-200 sm:pl-6 max-w-3xl mx-auto my-10 mb-40 px-5">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-1 text-base text-gray-500">
          Please check the URL in the address bar and try again.
        </p>
      </div>
    );
  }
}
