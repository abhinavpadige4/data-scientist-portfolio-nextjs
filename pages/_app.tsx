import './globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
      <Component {...pageProps} />
    </div>
  );
}