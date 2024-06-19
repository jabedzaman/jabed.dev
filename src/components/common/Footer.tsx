import * as React from "react";
import Link from "next/link";
import { WindowDimensions } from "./WindowDimensions";
import { Spotify } from "./Spotify";

export const Footer: React.FC = React.memo(() => {
  return (
    <div className="my-10">
      <Spotify />
      <footer className="flex justify-between items-center my-10">
        <p className="text-xs">
          <Link
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            className="text-xs link"
          >
            CC-BY-NA-SA 4.0
          </Link>
          <span className="mx-2">
            &copy; 2020 - {new Date().getFullYear()} Jabed Zaman
          </span>
        </p>
        <WindowDimensions />
      </footer>
    </div>
  );
});

Footer.displayName = "Footer";
