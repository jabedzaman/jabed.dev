import * as React from "react";
import { Time } from "./Time";
import { LastVisit } from "./LastVisit";
import { Back } from "./Back";

export const Header: React.FC = React.memo(() => {
  return (
    <header>
      <div className="flex justify-between items-center mt-4">
        <Time />
        {/* <LastVisit /> */}
      </div>
      <Back />
    </header>
  );
});

Header.displayName = "Header";
