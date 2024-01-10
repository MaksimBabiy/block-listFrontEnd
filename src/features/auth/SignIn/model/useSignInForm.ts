import { authControllerSignIn } from "@/shared/api/generated";
import { routeConfig } from "@/shared/const/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export const useSignInForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();
  const signUpMutation = useMutation({
    mutationFn: authControllerSignIn,
    onSuccess() {
      router.push(routeConfig.HOME);
    },
  });

  return {
    register,
    handleSubmit: handleSubmit((data) => signUpMutation.mutate(data)),
    isLoading: signUpMutation.isPending,
  };
};
