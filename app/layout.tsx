import type { Metadata } from "next";
import { Providers } from "./providers";
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: "Clínica Estética Valencia",
  description: "Clínica Estética Valencia",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  }
};

const myFont = localFont({
  src: [
    {
      path: '../themes/font/theinhardt-bold-webfont.woff',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../themes/font/theinhardt-light-webfont.woff',
      weight: '400',
      style: 'light',
    },
    {
      path: '../themes/font/theinhardt-regular-webfont.woff',
      weight: '500',
      style: 'regular',
    },
  ],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={myFont.className}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
