import { classnames } from "@/shared/helpers/classnames";
import React, { InputHTMLAttributes, PropsWithRef, useId } from "react";
import cls from "./ui-select-field.module.scss";

type data = {
  key: string;
  value: string;
};
type Props = InputHTMLAttributes<HTMLSelectElement> & {
  className?: string;
  label?: string;
  error?: string;
  data: data[];
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLSelectElement>>;
};

function UISelectField({ data, className, error, inputProps }: Props) {
  return (
    <div className={classnames("", {}, [className])}>
      <select {...inputProps} defaultValue="default" className={cls.select}>
        <option disabled={true} value="default">
          --Choose and option--
        </option>
        {data?.map((el, i) => (
          <option key={i} value={el.value}>
            {el.key}
          </option>
        ))}
      </select>
      {error && <span className={cls.error}>{error}</span>}
    </div>
  );
}

export default UISelectField;
