import React, { ButtonHTMLAttributes, HtmlHTMLAttributes } from "react";
import { classnames } from "../../helpers/classnames";
import cls from "./ui-button.module.scss";
type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
  type: ButtonType;
  className?: string;
};

export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  OUTLINED = "outline",
}

const UIButton = ({ className, type, disabled, ...props }: Props) => {
  return (
    <button
      {...props}
      className={classnames(cls.button, { [cls.disabled]: disabled }, [
        className,
        cls[type],
      ])}
    >
      {props.children}
    </button>
  );
};

export default UIButton;
