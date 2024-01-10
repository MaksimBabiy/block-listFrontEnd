import { useAccountQuery, useUpdateAccountMutation } from "@/entities/account";

export const useToggleBlock = () => {
  const accountQuery = useAccountQuery();
  const patchAccountMutation = useUpdateAccountMutation();
  const toggle = () => {
    if (accountQuery.data) {
      patchAccountMutation.mutate({
        isBlockingEnabled: !accountQuery.data?.isBlockingEnabled,
      });
    }
  };
  return {
    isLoading: patchAccountMutation.isPending,
    isBlockingEnabled: accountQuery.data?.isBlockingEnabled,
    isReady: accountQuery.isSuccess,
    toggle,
  };
};
