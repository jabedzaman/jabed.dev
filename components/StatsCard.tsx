import React from "react";

function Loading() {
  return <div>Loading...</div>;
}

function StatsCard({ stars, followers, publicRepos }: statcardProps) {
  return (
    <div className="md:w-1/2 w-full p-1">
      <h1 className="font-semibold text-blue-500 dark:text-blue-300 md:text-2xl text-xl">
        My GitHub Stats
      </h1>
      <div className="flex flex-row font-semibold">
        <React.Suspense fallback={<Loading />}>
          <section className="w-full md:text-sm text-xs mr-5 my-4">
            <div className="flex flex-row justify-between">
              <span>Public Repos:</span>
              <span>{publicRepos > 0 ? publicRepos : "No"} </span>
            </div>
            <div className="flex flex-row justify-between">
              <span>Stars Earned:</span>
              <span>{stars > 0 ? stars : "No"} </span>
            </div>
            <div className="flex flex-row justify-between">
              <span>Followers:</span>
              <span>{followers > 0 ? followers : "No"} </span>
            </div>
          </section>
        </React.Suspense>
        <div className="w-1/3 md:p-2 p-1">
          <div className="rounded-full border-spacing-3 border-4 border-blue-500 dark:border-blue-300  flex items-center justify-center h-16 w-16 md:h-20 md:w-20 font-bold md:text-xl text-lg">
            A +
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsCard;
