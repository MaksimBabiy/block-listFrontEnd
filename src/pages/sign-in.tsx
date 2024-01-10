import { SignInForm } from "@/features/auth";
import UIHeader from "@/shared/ui/Header/ui-header";
import UIFormLayout from "@/shared/ui/layouts/ui-form-layout";
import React from "react";

type Props = {};

export const SignInPage = (props: Props) => {
  return (
    <>
      <UIHeader>123</UIHeader>
      <UIFormLayout title="Sign In">
        <SignInForm />
      </UIFormLayout>
    </>
  );
};
