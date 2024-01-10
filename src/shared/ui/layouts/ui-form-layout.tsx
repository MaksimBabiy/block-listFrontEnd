import React from "react";

type Props = {
  children?: React.ReactNode;
  title?: string;
};

const UIFormLayout = ({ children, title }: Props) => {
  return (
    <div className="flex-1 p-5 flex justify-center ">
      <div className="bg-slate-200 max-w-[400px] w-full px-10 py-10 rounded-xl self-center">
        <h1 className="text-2xl mb-2">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default UIFormLayout;
