import { routeConfig } from "@/shared/const/routes";
import UIButton, { ButtonType } from "@/shared/ui/Button/ui-button";
import UILink from "@/shared/ui/Link/ui-link";
import UITextField from "@/shared/ui/TextField/ui-text-field";
import React from "react";
import { useSignUpForm } from "../model/useSignUpForm";

type Props = {};

export const SignUpForm = (props: Props) => {
  const { register, handleSubmit, isLoading, error } = useSignUpForm();
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
        error={error}
      />
      <div className="flex justify-between">
        <UILink href={routeConfig.SIGNIN} className="text-purple-950">
          Login
        </UILink>
        <UIButton disabled={isLoading} type={ButtonType.SECONDARY}>
          Register
        </UIButton>
      </div>
    </form>
  );
};
