"use client";

import { signIn } from "next-auth/react";

function AuthLogin() {
  return (
    <div>
      <button
        onClick={() => {
          signIn("google");
        }}
      >
        Sign in
      </button>
    </div>
  );
}

export default AuthLogin;
