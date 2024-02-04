import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import {
  DynamicContextProvider,
  EthereumWalletConnectors,
} from "../lib/dynamic";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <DynamicContextProvider
        theme="light"
        settings={{
          environmentId: "b5013a4f-3180-487d-8d0a-254c7a78caa8",
          walletConnectors: [EthereumWalletConnectors],
        }}
      >
        <body
          className={clsx(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <div className="relative flex flex-col h-screen">
              <Navbar />
              <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                {children}
              </main>
              <footer className="w-full flex items-center justify-center py-3">
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href="https://ethglobal.com"
                  title="EthGlobal"
                >
                  <span className="text-default-600">Built with 💖 by</span>
                  <p className="text-secondary">Web3 Enthusiasts</p>
                </Link>
              </footer>
            </div>
          </Providers>
        </body>
      </DynamicContextProvider>
    </html>
  );
}
