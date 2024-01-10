import { useSessionQuery } from "@/entities/session";
import { SignOutButton } from "@/features/auth";
import React from "react";

type Props = {};

export const Profile = (props: Props) => {
  const { data } = useSessionQuery();
  return (
    <div className="flex gap-4 items-center">
      <p>{data?.email}</p>
      <SignOutButton />
    </div>
  );
};
