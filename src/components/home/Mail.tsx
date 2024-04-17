import Link from "next/link";
import * as React from "react";

export const Mail: React.FC = React.memo(() => {
  return (
    <section className="my-5">
      <p>
        <span className="inline text-[#a7a7a7] ">
          Feel free to reach out to me at{" "}
        </span>
        <Link
          href="mailto:hi@jabed.dev"
          target="_blank"
          rel="noreferrer"
          className="text-sm inline"
        >
          <span className="link">hi@jabed.dev</span>
        </Link>
      </p>
    </section>
  );
});

Mail.displayName = "Mail";
