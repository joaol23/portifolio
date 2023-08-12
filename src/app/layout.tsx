import React from 'react';
import { ReactNode } from 'react';
import '../index.css';
import Footer from '@components/Footer';
import { Metadata } from 'next';
import { ClientComponentRoot } from '@components/ClientComponentRoot';

type RootLayoutProps = {
  children: ReactNode
}

export const metadata: Metadata = {
  title: "Portifolio - FullStack Developer",
  themeColor: "#000000",
  viewport: "width=device-width, initial-scale=1",
  description: 'Portifólio para demonstrar projetos e conhecimentos',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" />
      </head>
      <body>
        <ClientComponentRoot>
          {children}
          <Footer />
        </ClientComponentRoot>
      </body>
    </html>
  )
}