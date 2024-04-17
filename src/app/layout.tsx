export { metadata } from "~/config";
import { LenisProvider, NProgressProvider } from "~/providers";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LenisProvider>
        <NProgressProvider>
          <body className="bg-[#0d0d0d] text-[#e7e7e7]">{children}</body>
        </NProgressProvider>
      </LenisProvider>
    </html>
  );
}
