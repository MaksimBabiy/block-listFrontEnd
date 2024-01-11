import { useGetBlockQuery } from "@/entities/blocklist";
import React, { useEffect, useState } from "react";
import { useBlockListData } from "../model/useBlockLIstData";
import UITextField from "@/shared/ui/TextField/ui-text-field";
import BlockListItem from "./BlockListItem";
import { useDebounce } from "@/shared/helpers/useDeboubce";

type Props = {};

export const BlockList = (props: Props) => {
  const { q, setQ, isLoading, items } = useBlockListData();
  const isEmpty = items && items.length === 0;
  const isItems = items && items.length > 0;
  return (
    <div className="flex flex-col">
      <UITextField
        type="text"
        className="p-7"
        placeholder="Find"
        inputProps={{ value: q, onChange: (e) => setQ(e.target.value) }}
      />
      <ul className="rounded-xl bg-slate-300 p-5 [&>*:last-child]:mb-0">
        {isEmpty && <p>List is empty...</p>}
        {isItems &&
          items?.map((item) => <BlockListItem key={item.id} item={item} />)}
      </ul>
    </div>
  );
};
