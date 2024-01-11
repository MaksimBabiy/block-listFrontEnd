import { useRemoveBlockItemMutation } from "@/entities/blocklist";
import { BlockItemDto } from "@/shared/api/generated";
import React from "react";

type Props = {
  item: BlockItemDto;
};

const BlockListItem = ({ item }: Props) => {
  return (
    <li className="flex gap-4 justify-between mb-2 hover:bg-slate-100 p-2 rounded-xl items-center">
      <div className="flex flex-col">
        <span>{item.data}</span>
        <span className="text-gray-400"> {item.type}</span>
      </div>
      <RemoveSvg id={item.id} />
    </li>
  );
};

export default BlockListItem;

const RemoveSvg = ({ id }: { id: number }) => {
  const removeItem = useRemoveBlockItemMutation();
  return (
    <svg
      onClick={() => removeItem.mutate(id)}
      className="cursor-pointer hover:text-red-600"
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M2 5v10c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V5zm3 9H4V7h1zm2 0H6V7h1zm2 0H8V7h1zm2 0h-1V7h1zm2.25-12H10V.75A.753.753 0 0 0 9.25 0h-3.5A.753.753 0 0 0 5 .75V2H1.75a.752.752 0 0 0-.75.75V4h13V2.75a.752.752 0 0 0-.75-.75M9 2H6v-.987h3z"
      />
    </svg>
  );
};
