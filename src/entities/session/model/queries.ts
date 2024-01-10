import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { QueryKeys } from "./types";

export const useSessionQuery = () => {
  return useQuery({
    queryFn: authControllerGetSessionInfo,
    queryKey: [QueryKeys.SESSION],
    retry: 0,
    staleTime: 5 * 60 * 1000,
  });
};

export const useResetSession = () => {
  const queryClient = useQueryClient();
  return () =>
    queryClient.removeQueries({
      queryKey: [QueryKeys.SESSION],
      exact: true,
    });
};
