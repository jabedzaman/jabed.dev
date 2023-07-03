import { Metadata } from "next";
// import Input from "./Input";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Guestbook",
};

export type signature = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

const page = async () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Guestbook</h1>
      <Suspense fallback={<div className="h-screen">Loading...</div>}>
        {/* <Input /> */}
        <div>Fixing Soon</div>
        {/* <ul className="space-y-2">
          {signatures?.length > 0 ? (
            signatures
              .sort((a: signature, b: signature) => {
                return (
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
                );
              })
              .map((signature: signature) => (
                <li key={signature.id}>
                  <span className="text-gray-400">
                    {signature.name}
                    {" : "}
                  </span>
                  {signature.message}
                </li>
              ))
          ) : (
            <li className="text-gray-400">No signatures yet.</li>
          )}
        </ul> */}
      </Suspense>
    </div>
  );
};

export default page;