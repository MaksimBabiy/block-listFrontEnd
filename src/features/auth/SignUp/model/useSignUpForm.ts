import { authControllerSignUp } from "@/shared/api/generated";
import { routeConfig } from "@/shared/const/routes";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export const useSignUpForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();
  const signUpMutation = useMutation({
    mutationFn: authControllerSignUp,
    onSuccess() {
      router.push(routeConfig.HOME);
    },
    onError(err: AxiosError) {},
  });

  return {
    register,
    handleSubmit: handleSubmit((data) => signUpMutation.mutate(data)),
    isLoading: signUpMutation.isPending,
    //@ts-ignore
    error: signUpMutation.error?.response?.data.type,
  };
};
