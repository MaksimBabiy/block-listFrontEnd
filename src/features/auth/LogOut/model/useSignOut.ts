import { useResetSession } from "@/entities/session";
import { authControllerSignOut } from "@/shared/api/generated";
import { routeConfig } from "@/shared/const/routes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

export const useSignOut = () => {
  const resetSession = useResetSession();
  const router = useRouter();
  const signOutMutation = useMutation({
    mutationFn: authControllerSignOut,
    async onSuccess() {
      router.push(routeConfig.SIGNIN);
      resetSession();
    },
  });

  return {
    SignOut: signOutMutation.mutate,
    isLoading: signOutMutation.isPending,
  };
};
