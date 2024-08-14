import Link from "next/link";
import * as React from "react";
import { works } from "~/data/work";
import { bricolage, sora } from "~/shared/fonts";

export const WorkList: React.FC = React.memo(() => {
  return (
    <section>
      <h1 className={`${bricolage.className} text-2xl`}>Work Experience</h1>
      <div className="flex flex-col gap-5">
        {works.map((work, index) => (
          <div
            key={index}
            className={`my-4
            ${
              index !== works.length - 1
                ? "border-b-[0.5px] border-[#333333]"
                : ""
            }
          `}
          >
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
            <div className={`${sora.className} my-6 text-[#888888]`}>
              <div className="flex flex-row flex-wrap gap-2 my-2">
                <strong>Techstack:</strong>
                {work.skills.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[#1a1a1a] text-[#666666] px-2 py-1 rounded-md hover:text-[#8a8a8a] duration-200 ease-in-out cursor-pointer"
                  >
                    # {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

WorkList.displayName = "WorkList";
