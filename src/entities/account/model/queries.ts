import {
  accountControllerGetAccount,
  accountControllerPatchAcount,
} from "@/shared/api/generated";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QueryKeys } from "./types";

export const useAccountQuery = () => {
  return useQuery({
    queryFn: accountControllerGetAccount,
    queryKey: [QueryKeys.ACCOUNT],
  });
};
export const useUpdateAccountMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: accountControllerPatchAcount,
    async onSettled() {
      await queryClient.invalidateQueries({ queryKey: [QueryKeys.ACCOUNT] });
    },
  });
};
