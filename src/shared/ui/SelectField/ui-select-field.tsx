import { classnames } from "@/shared/helpers/classnames";
import React, { InputHTMLAttributes, useId } from "react";
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
  onChange?: () => void;
};

function UISelectField({
  data,
  className,
  error,
  placeholder,
  onChange,
  ...props
}: Props) {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    return e.target.value;
  };
  console.log(data.map((el) => console.log(el)));
  return (
    <div className={classnames("", {}, [className])}>
      <select
        {...props}
        onChange={handleSelect}
        defaultValue="default"
        className={cls.select}
      >
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
