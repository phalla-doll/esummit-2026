import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'eSummit 2026',
  description: 'Global virtual summit bringing together innovators and creators.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=general-sans@200,300,400,500,600,700&display=swap" rel="stylesheet" />
      </head>
      <body 
        className="antialiased bg-[#FAFAFA] text-[#111111]"
        style={{ fontFamily: "'General Sans', sans-serif" }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
