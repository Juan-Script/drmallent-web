import type { Metadata } from "next";
import { Providers } from "./providers";
import { Kanit } from 'next/font/google'

export const metadata: Metadata = {
  title: "Clínica Estética Valencia",
  description: "Clínica Estética Valencia",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  }
};

const kanit = Kanit({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={kanit.className}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
