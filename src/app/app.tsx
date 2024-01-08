import type { AppProps } from "next/app";
import AppProvider from "./providers/app-providers";

export function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />;
    </AppProvider>
  );
}
