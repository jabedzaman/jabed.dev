import React from "react";

type Props = {
  header: String;
};

function SectionHeader({ header }: Props) {
  return <h1 className="md:text-3xl text-xl mt-10 font-bold text-blue-500 dark:text-blue-400">{header}</h1>;
}

export default SectionHeader;
