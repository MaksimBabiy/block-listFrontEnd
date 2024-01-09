import React from "react";
import UILogo from "../Logo/ui-logo";
import cls from "./ui-header.module.scss";
type Props = {
  children?: React.ReactNode;
};

const UIHeader = ({ children }: Props) => {
  return (
    <header className={cls.header}>
      <UILogo />
      {children}
    </header>
  );
};

export default UIHeader;
