import * as React from "react";
import Link from "next/link";
import { SiArchlinux } from "react-icons/si";
import { bricolage } from "~/libs";

export const Hero: React.FC = React.memo(() => {
  return (
    <section>
      <span className="mb-10">Hey there👋</span>
      <h1
        className={
          bricolage.className +
          " text-4xl md:text-6xl leading-snug md:leading-tight"
        }
      >
        Jabed Zaman
      </h1>

      <div className="flex flex-col gap-5 my-5 text-[#a7a7a7]">
        <p>
          CS student, Full Stack Developer, <SiArchlinux className="inline" />{" "}
          Arch fanboy, CS Student, building{" "}
          <Link href={"https://rubiks.cloud"} target="_blank" className="link">
            rubiks
          </Link>{" "}
          (a secure cloud suite to store & backup your files).
        </p>
        <p>
          Proficient in developing full-stack web and mobile applications, along
          with expertise in DevOps and system design. A strong
          foundation in DevOps principles and excel in integrating latest tech
          stack into real world applications.
        </p>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";
