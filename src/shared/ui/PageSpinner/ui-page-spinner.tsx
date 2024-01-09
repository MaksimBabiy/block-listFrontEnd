import React from "react";
import UISpinner from "../Spinner/ui-spinner";
import cls from "./ui-page-spinner.module.scss";
type Props = {
  className?: string;
};

const UIPageSpinner = ({ className }: Props) => {
  return (
    <div className={cls.container}>
      <UISpinner classNames={className} />
    </div>
  );
};

export default UIPageSpinner;
