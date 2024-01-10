import UIButton, { ButtonType } from "@/shared/ui/Button/ui-button";
import React from "react";
import { useToggleBlock } from "../model/useToggleBlock";

type Props = {};

export const ToggleButton = (props: Props) => {
  const { isBlockingEnabled, toggle, isLoading, isReady } = useToggleBlock();
  if (!isReady) {
    return null;
  }
  return (
    <UIButton
      onClick={() => toggle()}
      type={isBlockingEnabled ? ButtonType.PRIMARY : ButtonType.SECONDARY}
    >
      {isBlockingEnabled ? "Disable Blocking" : "Enable Blocking"}
    </UIButton>
  );
};
