import UIButton, { ButtonType } from "@/shared/ui/Button/ui-button";
import React from "react";
import { useSignOut } from "../model/useSignOut";

type Props = {};

export const SignOutButton = (props: Props) => {
  const { SignOut, isLoading } = useSignOut();
  return (
    <UIButton
      type={ButtonType.OUTLINED}
      disabled={isLoading}
      onClick={() => SignOut({})}
    >
      LogOut
    </UIButton>
  );
};
