import AuthLogin from "@/components/AuthLogin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function LoginPage() {
  return (
    <div className="">
      <AuthLogin />
    </div>
  );
}
