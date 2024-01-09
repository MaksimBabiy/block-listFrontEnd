import React, { ButtonHTMLAttributes, HtmlHTMLAttributes } from "react";
import { classnames } from "../../helpers/classnames";
import cls from "./ui-button.module.scss";
type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
  onClick?: () => void;
  type: ButtonType;
  className?: string;
};

export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  OUTLINED = "outline",
}

const UIButton = ({ onClick, className, type, disabled, ...props }: Props) => {
  return (
    <button
      {...props}
      onClick={onClick}
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
