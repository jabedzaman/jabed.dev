import React from "react";
import { BiTimer } from "react-icons/bi";

type Props = {
  totalHours: number;
};

function Wakatime({ totalHours }: Props) {
  return (
    <div className="md:w-1/2 w-full p-1">
      <h1 className="font-semibold text-green-500 dark:text-green-300 md:text-2xl text-xl">
        My Wakatime Stats
      </h1>
      <React.Suspense fallback={<div>Loading...</div>}>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col md:text-sm text-xs font-semibold justify-between">
            <div className="flex flex-col">
              <span>Total Hours Spent Coding:</span>
              <span className="text-3xl font-bold">
                {totalHours > 0 ? totalHours : "No"} hours
              </span>
            </div>
            <div>
              <span className="-mt-3 text-gray-500">since Jan 2023</span>
            </div>
          </div>
          <div>
            <BiTimer className="text-green-500 dark:text-green-300 h-20 w-20 md:h-28 -mt-2 md:w-28 mr-2" />
          </div>
        </div>
      </React.Suspense>
    </div>
  );
}

export default Wakatime;
