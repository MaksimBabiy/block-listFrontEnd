import { classnames } from "@/shared/helpers/classnames";
import React, {
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  useId,
} from "react";
import cls from "./ui-text-field.module.scss";
type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  label?: string;
  error?: string;
  type: Omit<HTMLInputTypeAttribute, "select">;
};

function UITextField({
  className,
  error,
  placeholder,
  type = "text",
  ...props
}: Props) {
  return (
    <div className={classnames(cls.textField, {}, [className])}>
      <input
        placeholder={placeholder}
        className={cls.input}
        {...props}
        type={type}
      />
      {error && <span className={cls.error}>{error}</span>}
    </div>
  );
}

export default UITextField;
