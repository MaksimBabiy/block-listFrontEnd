import { classnames } from "@/shared/helpers/classnames";
import React, {
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  PropsWithRef,
  useId,
} from "react";
import cls from "./ui-text-field.module.scss";
type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  label?: string;
  error?: string;
  type: Omit<HTMLInputTypeAttribute, "select">;
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
};

function UITextField({
  className,
  error,
  placeholder,
  type = "text",
  inputProps,
}: Props) {
  return (
    <div className={classnames(cls.textField, {}, [className])}>
      <input
        placeholder={placeholder}
        className={cls.input}
        {...inputProps}
        type={type}
      />
      {error && <span className={cls.error}>{error}</span>}
    </div>
  );
}

export default UITextField;
