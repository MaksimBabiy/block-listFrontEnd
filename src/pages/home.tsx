import Image from "next/image";
import { Inter } from "next/font/google";
import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";
import UIHeader from "@/shared/ui/Header/ui-header";
import { SignOutButton } from "@/features/auth";
import { useSessionQuery } from "@/entities/session";

export function HomePage() {
  const { data } = useSessionQuery();
  return (
    <>
      <UIHeader>
        <div className="flex gap-4 items-center">
          <p>{data?.email}</p>
          <SignOutButton />
        </div>
      </UIHeader>
    </>
  );
}
