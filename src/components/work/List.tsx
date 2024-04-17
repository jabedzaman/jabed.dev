import Link from "next/link";
import * as React from "react";
import { works } from "~/data/work";
import { bricolage, sora } from "~/libs";

export const WorkList: React.FC = React.memo(() => {
  return (
    <section>
      <h1 className={`${bricolage.className} text-2xl`}>Work Experience</h1>
      <div className="flex flex-col gap-5">
        {works.map((work, index) => (
          <div key={index} className="my-4">
            <p className={`${sora.className} text-xs text-[#777777]`}>
              <Link
                href={work.company.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {work.company.name}
              </Link>{" "}
              - {work.company.location}
            </p>
            <h2 className={`${sora.className} font-semibold`}>{work.role}</h2>
            <p className={`${sora.className} text-xs text-[#8b8b8b] my-5`}>
              {work.start.year} {work.start.month} -{" "}
              {work.isCurrent
                ? "Present"
                : `${work.end?.year} ${work.end?.month}`}
            </p>
            <p className="my-2">{work.description}</p>
            <ul className="list-disc ml-8">
              {work.points.map((point, index) => (
                <li key={index} className="my-2">
                  {point}
                </li>
              ))}
            </ul>
            <p className={`${sora.className} my-4 text-[#888888]`}>
              <strong>Techstack:</strong> {work.skills.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
});

WorkList.displayName = "WorkList";
