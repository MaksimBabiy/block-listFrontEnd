import type { AppProps } from "next/app";
import AppProvider from "./providers/app-providers";
import { Inter } from "next/font/google";
import { ProtectedPage } from "@/features/auth";
const inter = Inter({ subsets: ["latin"] });
export function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <main
        className={`flex min-h-screen flex-col justify-between p-24 app bg-slate-400 gap-10 ${inter.className}`}
      >
        <Component {...pageProps} />
      </main>
    </AppProvider>
  );
}
