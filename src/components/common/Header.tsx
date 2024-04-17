import * as React from "react";
import { Time } from "./Time";
import { LastVisit } from "./LastVisit";

export const Header: React.FC = React.memo(() => {
  return (
    <footer className="flex justify-between items-center mt-4">
      <Time />
      <LastVisit />
    </footer>
  );
});

Header.displayName = "Header";
