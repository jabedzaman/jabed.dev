"use client";

import * as React from "react";
import { FaGoogle } from "react-icons/fa";
import { bricolage } from "~/shared/fonts";

export const Input: React.FC = React.memo(() => {
  const isAuthed = false;
  const inputRef = React.useRef<HTMLInputElement>(null);
  const handleSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (inputRef.current) {
        const message = inputRef.current.value;
        if (message) {
          console.log(message);
          inputRef.current.value = "";
        }
      }
    },
    []
  );
  return (
    <div className="my-5">
      <h1 className={`${bricolage.className} text-2xl`}>Guestbook</h1>

      {isAuthed ? (
        <form
          onSubmit={handleSubmit}
          className="my-5 flex-row flex items-center max-w-xl gap-2"
        >
          <input
            id="message"
            ref={inputRef}
            placeholder="Leave a message..."
            className="w-full border border-[#2b2b2b] placeholder:text-[#2b2b2b] text-[#808080] rounded-md bg-transparent focus:outline-0 focus:border-[#333333] p-2"
          />
          <button
            type="submit"
            className="w-1/5 bg-[#333333]
            disabled:bg-[#666666] disabled:cursor-not-allowed
          text-white rounded-md p-2"
          >
            Submit
          </button>
        </form>
      ) : (
        <div
          className="my-5 flex w-[300px] justify-center items-center gap-2 p-2 border border-[#2b2b2b] rounded-md cursor-pointer"
          onClick={() => {
            console.log("login");
          }}
        >
          <FaGoogle />
          <span>Login to leave a message</span>
        </div>
      )}
    </div>
  );
});

Input.displayName = "Input";
