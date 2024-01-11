import { useAddBlockItemMutation } from "@/entities/blocklist";
import { AddBlockItemDtoType } from "@/shared/api/generated";
import { useForm } from "react-hook-form";

export const useBlockItemForm = () => {
  const { register, handleSubmit, reset } = useForm<{
    type: AddBlockItemDtoType;
    data: string;
  }>();

  const blockMutation = useAddBlockItemMutation();
  return {
    register,
    handleSubmit: handleSubmit((data) =>
      blockMutation.mutate(data, {
        onSuccess() {
          reset();
        },
        onError(err) {},
      }),
    ),
    isLoading: blockMutation.isPending,
    isError: blockMutation.isError,
    //@ts-ignore
    error: blockMutation.error?.response?.data.message,
  };
};
