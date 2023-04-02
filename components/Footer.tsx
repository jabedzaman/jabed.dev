import React from "react";

const Footer = () => {
  return (
    <div className="max-w-5xl mx-auto p-5 mb-10">
      <div className="border-l-2 ml-4 border-l-gray-200 px-2 dark:border-l-gray-700 text-gray-500">
        &copy; {new Date().getFullYear()} Jabed Zaman
      </div>
    </div>
  );
};

export default Footer;