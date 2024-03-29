import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notez App",
  description: "Notez App by AB & SereqG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorBackground: "#282638",
          colorPrimary: "#8C56FF",
          colorInputBackground: "#282638",
        },
      }}
    >
      <html lang="en">
        <body className={`${font.className} bg-background text-content`}>
          {children}
          <div className="absolute right-5 top-5">
            <UserButton afterSignOutUrl="/" />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
