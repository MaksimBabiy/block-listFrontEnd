import { classnames } from "@/shared/helpers/classnames";
import Link from "next/link";
import React, { LinkHTMLAttributes } from "react";
import cls from "./ui-link.module.scss";
type Props = Parameters<typeof Link>[0] & { className?: string };

const UILink = ({ className, ...props }: Props) => {
  return <Link {...props} className={classnames(cls.link, {}, [className])} />;
};

export default UILink;
