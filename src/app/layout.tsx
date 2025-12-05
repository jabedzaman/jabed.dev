export { metadata } from "~/config";
import { Poppins } from "next/font/google";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import "./globals.css";
import { Provider } from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <Provider>
          <Header />
          <div className="max-w-7xl mx-auto py-24 border-x min-h-[80vh]">
            {children}
          </div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
