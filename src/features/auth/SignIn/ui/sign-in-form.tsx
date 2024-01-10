import { routeConfig } from "@/shared/const/routes";
import UIButton, { ButtonType } from "@/shared/ui/Button/ui-button";
import UILink from "@/shared/ui/Link/ui-link";
import UITextField from "@/shared/ui/TextField/ui-text-field";
import React from "react";
import { useSignInForm } from "../model/useSignInForm";

type Props = {};

export const SignInForm = (props: Props) => {
  const { register, handleSubmit, isLoading } = useSignInForm();
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <UITextField
        type="text"
        placeholder="Email"
        inputProps={{ ...register("email", { required: true }) }}
      />
      <UITextField
        type="password"
        placeholder="Password"
        inputProps={{ ...register("password", { required: true }) }}
      />
      <div className="flex justify-between">
        <UILink href={routeConfig.SIGNUP} className="text-purple-950">
          Register
        </UILink>
        <UIButton disabled={isLoading} type={ButtonType.SECONDARY}>
          Login
        </UIButton>
      </div>
    </form>
  );
};
