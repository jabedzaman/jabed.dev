import { NextPage } from "next";
import { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "About",
  description: "A bit more about jabed",
};

const page: NextPage = () => {
  return (
    <React.Fragment>
      <p>
        I use <b className="text-blue-400">Arch Linux</b> as my daily driver
        along with <b className="text-blue-400">awesome wm</b> .
      </p>
      <br />
      <p>
        I&apos;m a <b className="text-blue-400">vim</b> user. I use{" "}
        <b className="text-blue-400">neovim</b> as my code editor. Okay sorry I
        lied. I use <b className="text-blue-400">VSCode</b> as my code editor
        (Vscode for smartness and neovim to look cool) .
      </p>
      <br />
      <p>
        You can find my dotfiles{" "}
        <a
          href="https://github.com/jabedzaman/dotfiles"
          referrerPolicy="no-referrer"
          target="_blank"
          className="text-blue-400 hover:text-blue-500"
        >
          here
        </a>
        .
      </p>
      <br />
      <p>
        My daily beast is <b className="text-blue-400">Dell Inspiron 15 3501</b>{" "}
        with i5 11th gen processor and 16GB of ram. (apple ... nah macos is not
        for me) .
      </p>
      <br />
      <p>
        OPEN SOURCE IS LOVE. I use open source software as much as possible.
      </p>
      <br />
      <p>
        As like every other arch fanboys on reddit, I got my terminal riced up .
        I use <b className="text-blue-400">kitty</b> as my terminal emulator....
        why?? because it is what it is .
        <b className="text-blue-400">startship</b> got my shell looking cool ...
        and it is AMAZING . And for the symbolic font I use{" "}
        <b className="text-blue-400">nerd font</b> .
      </p>
      <br />
      <p>
        &lsquo; Never gonna give you up, never gonna let you down ... &lsquo; GOT
        RICKROLLED !!! OKAY TAKING IT BACK ... I love listening to music and I
        use <b className="text-blue-400">spotify</b> for that .
      </p>
      <br />
      <p>
        Sadly I dont have a studio setup to show off :( and I no longer make
        youtube videos. I plan to start making videos again in the future.
        <br />
        (dont try to find my youtube videos, I deleted them all)
      </p>
      <br />
      <p>
        GAMES !!!?? <br />
        `sniff sniff` I used to play a lot of games earlier. But now its a rare
        thing... <br />
        <b className="text-blue-400">CSGO</b> ,{" "}
        <b className="text-blue-400">GTA series</b> ,{" "}
        <b className="text-blue-400">NFS</b> ,{" "}
        <b className="text-blue-400">PUBG</b> ,{" "}
        <b className="text-blue-400">Clash of Clans</b> .... NOSTALGIA !!!
      </p>
    </React.Fragment>
  );
};

export default page;
