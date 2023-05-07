"use client";

import * as React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import * as utils from "@/utils";

const Input = () => {
  const { data: session } = useSession();
  return <div>{session ? <Form /> : <NotLoggedIn />}</div>;
};

const NotLoggedIn = () => {
  return (
    <div className="flex flex-wrap justify-between md:space-y-0 space-y-1 items-center border border-gray-700 lg:px-4 md:px-3 px-2 lg:py-3 py-2 md:mb-4 my-2 ease-in-out duration-100">
      <div>
        {" "}
        <h3 className="text-gray-200">
          You need to be signed in to continue...
        </h3>
        <p className="text-xs text-gray-500">
          Authentication is needed to prevent spam.
        </p>
      </div>
      <div>
        <Link
          href="/api/auth/signin/"
          className="flex flex-row items-center space-x-1"
        >
          <FaGoogle />
          <p>Sign in with Google</p>
        </Link>
      </div>
    </div>
  );
};

const Form = () => {
  const { data: session } = useSession();
  const [input, setInput] = React.useState<string>("");
  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch("/api/v1/addsignature", {
      method: "POST",
      body: JSON.stringify({
        email: session?.user?.email,
        name: session?.user?.name,
        message: input,
      }),
    })
      .then((res) => {
        if (res.ok) {
          setInput("");
          const data = res.json();
          // TODO: Add toast
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="lg:py-3 py-2 md:mb-4 my-2 ease-in-out duration-100">
      <div>
        <h3 className="text-gray-200">Leave a message</h3>
      </div>
      <div className="px-2 my-1 bg-blue-200 rounded-sm">
        <form
          onSubmit={handlesubmit}
          className="flex flex-wrap justify-between my-2 py-1 md:space-y-0 space-y-1 items-center"
        >
          <input
            type="text"
            className="w-3/4 focus:outline-none py-1 bg-inherit text-gray-900 placeholder:text-gray-600"
            placeholder="Please enter your message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {input !== "" && (
            <input
              type="submit"
              className="cursor-pointer rounded-lg bg-gray-300 px-2 py-0.5 border text-gray-600 hover:text-gray-700"
              value="Submit"
            />
          )}
        </form>
      </div>
      <Link href="/api/auth/signout">
        <p className="text-xs text-gray-500 hover:text-gray-600 transition">
          Sign out
        </p>
      </Link>
    </div>
  );
};

export default Input;
