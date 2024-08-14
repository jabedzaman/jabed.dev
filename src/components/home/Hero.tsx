import * as React from "react";
import Link from "next/link";
import { SiArchlinux } from "react-icons/si";
import { bricolage } from "~/shared/fonts";

export const Hero: React.FC = React.memo(() => {
  return (
    <section>
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
          Full Stack Developer, <SiArchlinux className="inline" /> Arch fanboy,
          CS Student, building{" "}
          <Link href={"https://rubiks.cloud"} target="_blank" className="link">
            rubiks
          </Link>{" "}
          (a secure cloud suite to store & backup your files).
        </p>
        <p>
          Assisted over 2 startups in their initial phases by building and
          scaling their technical infrastructure and product development
        </p>
        <p>
          Leave a message in the{" "}
          <Link href={"/guestbook"} className="link">
            guestbook
          </Link>{" "}
          for me, maybe a suggestion, question or just some humor.
        </p>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";
