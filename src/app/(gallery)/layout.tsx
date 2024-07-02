import { Metadata } from "next";

export const metadata: Metadata = {
  title: "📸",
};

export default function PhotosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
