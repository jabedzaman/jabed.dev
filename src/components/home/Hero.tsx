import * as React from "react";
import Link from "next/link";
import { SiArchlinux } from "react-icons/si";
import { bricolage } from "~/libs";

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
          (a secure cloud suite to store & backup your files). Sometimes I click{" "}
          <Link href={"/gallery"} className="link">
            pictures
          </Link>{" "}
          too.
        </p>
        <p>
          Leave a message in the{" "}
          <Link href={"/guestbook"} className="link">
            guestbook
          </Link>{" "}
          for me, maybe a suggestion, question or just some humor.
        </p>
        <p>
          Currently{" "}
          <Link href={"/work"} className="link">
            working
          </Link>{" "}
          as an SDE Intern at{" "}
          <Link
            href={"https://play.google.com/store/apps/details?id=com.dipeat"}
            target="_blank"
            className="link"
          >
            dipEAT Foods Pvt. Ltd.
          </Link>{" "}
        </p>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";
