import { Metadata } from "next";
import Input from "./Input";
import * as utils from "@/utils";
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
  const res = await fetch(utils.URL + "/api/v1/signatures", {
    next: {
      revalidate: 1,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  const signatures: signature[] = res?.data;
  return (
    <div>
      <h1 className="text-2xl font-semibold">Guestbook</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Input />
        <ul className="space-y-1 ">
          {signatures?.length > 0 ? (
            signatures
              .sort((a: signature, b: signature) => {
                return (
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
                );
              })
              .map((signature: signature) => (
                <li key={signature.id} className="flex flex-row space-x-1">
                  <h3 className="text-gray-400">
                    {signature.name}
                    {":"}
                  </h3>
                  <p>{signature.message}</p>
                </li>
              ))
          ) : (
            <li className="text-gray-400">No signatures yet.</li>
          )}
        </ul>
      </Suspense>
    </div>
  );
};

export default page;
