import type { Metadata } from "next";
import localFont from 'next/font/local'

import "./globals.css";

const lato = localFont({
  src: [
    {
      path: '../../public/lato-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/lato-light.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: "Revmo.info",
  description: "Revmo.info app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className}`}>
        {children}
      </body>
    </html>
  );
}
