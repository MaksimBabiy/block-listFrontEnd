import {
  blockListControllerAddBlockItem,
  blockListControllerGetList,
  blockListControllerRemoveBlockItem,
} from "@/shared/api/generated";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QueryKeys } from "./types";

export const useGetBlockQuery = ({ q }: { q: string }) => {
  return useQuery({
    queryFn: () => blockListControllerGetList({ q }),
    queryKey: [...QueryKeys.BLOCKLIST].concat([q]),
  });
};

export const useAddBlockItemMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blockListControllerAddBlockItem,
    async onSettled() {
      await queryClient.invalidateQueries({
        queryKey: [...QueryKeys.BLOCKLIST],
      });
    },
  });
};
export const useRemoveBlockItemMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blockListControllerRemoveBlockItem,
    async onSettled() {
      await queryClient.invalidateQueries({
        queryKey: [...QueryKeys.BLOCKLIST],
      });
    },
  });
};
