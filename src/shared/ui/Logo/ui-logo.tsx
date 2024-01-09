import React from "react";
import cls from "./ui-logo.module.scss";
type Props = {
  classname?: string;
};

const UILogo = ({ classname }: Props) => {
  return (
    <div className={cls.container}>
      <svg
        className={classname}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M21 11c0 5.55-3.84 10.74-9 12c-5.16-1.26-9-6.45-9-12V5l9-4l9 4zm-9 10c3.75-1 7-5.46 7-9.78V6.3l-7-3.12z"
        />
      </svg>
      <span>Logo</span>
    </div>
  );
};

export default UILogo;
