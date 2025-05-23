import { postMetaData } from "@/libs/utils";
import { Link } from "next-view-transitions";

// const experiences: {
//   position: string; company: string; startDate: Date; endDate: Date | null;
//   description: string; link: string;
// }[] = [
//     {
//       position: "Full Stack Developer",
//       company: "DLA Technologies",
//       startDate: new Date("2024-12-01"),
//       description: "Mantaining multiple SAAS products and building new features.",
//       link: "https://www.dlatechnologies.com/",
//       endDate: null,
//     },
//     {
//       position: "Full Stack Developer",
//       company: "Dipeat Foods Pvt. Ltd.",
//       startDate: new Date("2023-01-01"),
//       endDate: new Date("2024-12-01"),
//       description: "Revamped the backend and mobile app, increasing the performance and scalability by more than 70%.",
//       link: "https://www.dipeat.com/",
//     },
//   ];

export default function Home() {
  return (
    <div>
      <div className="text-gray-800 space-y-4 leading-snug break-words">
        <div>
          I&apos;m a self taught full stack developer, CS student and OSS
          enthusiast, currently working as a full stack developer at{" "}
          <Link
            href="https://www.dlatechnologies.com/"
            className="text-blue-500 hover:text-blue-700"
            target="_blank"
          >
            DLA Technologies
          </Link>
          . I have assisted more than 4 start-ups in their initial phase by
          building and scaling their technical infrastructure and product
          development.
        </div>
        <div>
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
          to random music. Moreover lately, I got an crazy fondness towards
          self-hosting everything along with keeping my{" "}
          <Link href="/uses" className="text-blue-500 hover:text-blue-700">
            setup
          </Link>{" "}
          as minimal as possible.
        </div>
        <div className="my-4">
          <h3>My Recent Articles:</h3>
          <div className="my-1">
            <ul>
              {postMetaData
                .sort(
                  (a, b) =>
                    new Date(b.date).getTime() - new Date(a.date).getTime(),
                )
                .slice(0, 3)
                .map((post) => (
                  <li key={post.slug}>
                    <Link href={`/posts/${post.slug}`}>
                      •{" "}
                      <span className="text-blue-500 hover:text-blue-700">
                        {post.title}
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
            <Link
              href="/posts"
              className="text-blue-500 hover:text-blue-700 ml-2"
            >
              view more
            </Link>
          </div>
        </div>
        <div>
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
        </div>
        <div>
          My PGP key:{" "}
          <Link
            href="https://keys.openpgp.org/vks/v1/by-fingerprint/5A1E5B4C1587E151FEF4BBAFE85E4BE5AF9BC51D"
            className="text-blue-500 hover:text-blue-700"
            target="_blank"
          >
            5A1E5B4C1587E151FEF4BBAFE85E4BE5AF9BC51D
          </Link>
        </div>
        <div className="my-2">
          Help me fund my server costs and coffee addiction:
          <ul className="my-1">
            <li>
              <span>SOL: </span>
              <Link
                href="https://explorer.solana.com/address/2pKYHpCuvyQUooYvkCrMPXrc9DSEK7M3VXgJRFcTaKxz"
                className="text-blue-500 hover:text-blue-700"
                target="_blank"
              >
                2pKYHpCuvyQUooYvkCrMPXrc9DSEK7M3VXgJRFcTaKxz
              </Link>
            </li>
          </ul>
        </div>
        <div>
          Say hi at{" "}
          <Link
            href="mailto:hi@jabed.dev"
            className="text-blue-500 hover:text-blue-700"
            target="_blank"
          >
            hi@jabed.dev
          </Link>
        </div>
      </div>
    </div>
  );
}
