import Image from "next/image";
import { Inter } from "next/font/google";
import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";
import UIHeader from "@/shared/ui/Header/ui-header";

export function HomePage() {
  const { data } = useQuery({
    queryKey: ["session"],
    queryFn: () => authControllerGetSessionInfo(),
  });

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 app`}
    >
      <UIHeader>asdas</UIHeader>
    </main>
  );
}
