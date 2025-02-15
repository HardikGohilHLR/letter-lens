// Layout
import { Manrope } from 'next/font/google';
import { ReactNode } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata, Viewport } from 'next';
import clsx from 'clsx';

import { ThemeProvider } from '@/context/theme-provider';
import { META_DATA } from '@/@core/constant';

import '@/styles/index.css';

const font = Manrope({
  variable: '--font-main',
  subsets: ['latin'],
});

export const metadata: Metadata = META_DATA;

export const viewport: Viewport = {
  themeColor: '#09090b',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning className="h-lvh">
      <body className={clsx(font.variable, 'font-main h-full w-full overflow-x-hidden antialiased')}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>

      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
    </html>
  );
};

export default RootLayout;
