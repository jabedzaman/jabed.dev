import { Metadata } from "next";
import Input from "./Input";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Guestbook",
};

export type signature = {
  id: string;
  name: string;
  email: string;
  signature: string;
  createdAt: string;
};

const page = async () => {
  const res = await fetch("https://api.jabed.dev/api/v1/guestbook", {
    method: "GET",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.API_KEY,
    },
  });
  const data = await res.json();
  const signatures: signature[] = data?.signatures;
  return (
    <div>
      <h1 className="text-2xl font-semibold">Guestbook</h1>
      <Suspense fallback={<div className="h-screen">Loading...</div>}>
        <Input />
        <ul className="space-y-2">
          {signatures?.length > 0 ? (
            signatures
              .sort((a: signature, b: signature) => {
                return (
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
                );
              })
              .map((s: signature) => (
                <li key={s.id}>
                  <span className="text-gray-400">
                    {s.name}
                    {" : "}
                  </span>
                  {s.signature}
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
