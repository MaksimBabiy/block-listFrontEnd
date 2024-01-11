import { useGetBlockQuery } from "@/entities/blocklist";
import { useDebounce } from "@/shared/helpers/useDeboubce";
import { useState } from "react";

export const useBlockListData = () => {
  const [q, setQ] = useState("");
  const blocklistQuery = useGetBlockQuery({ q: useDebounce(q, 500) as string });
  const items = blocklistQuery.data?.items;

  return { items, isLoading: blocklistQuery.isLoading, q, setQ };
};
