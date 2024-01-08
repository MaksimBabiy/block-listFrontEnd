import Image from "next/image";
import { Inter } from "next/font/google";
import {
  authControllerGetSessionInfo,
  authControllerSignIn,
} from "@/shared/api/generated";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

export function HomePage() {
  const { data } = useQuery({
    queryKey: ["session"],
    queryFn: () => authControllerGetSessionInfo(),
  });

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {data?.email}
    </main>
  );
}
