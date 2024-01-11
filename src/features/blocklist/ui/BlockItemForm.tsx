import UITextField from "@/shared/ui/TextField/ui-text-field";
import React from "react";
import { useBlockItemForm } from "../model/useBlockItemForm";
import UIButton, { ButtonType } from "@/shared/ui/Button/ui-button";
import UISelectField from "@/shared/ui/SelectField/ui-select-field";

type Props = {};

export const BlockItemForm = (props: Props) => {
  const { register, handleSubmit, isLoading, error } = useBlockItemForm();
  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-4 flex-wrap items-center justify-between"
    >
      <UISelectField
        className="flex-1"
        data={[
          { key: "Website", value: "Website" },
          { key: "KeyWord", value: "KeyWord" },
        ]}
        error={error}
        type="text"
        inputProps={{ ...register("type") }}
      />
      <UITextField
        placeholder="Enter"
        type="text"
        inputProps={{ ...register("data") }}
        className="flex-1"
      />
      <UIButton type={ButtonType.SECONDARY} disabled={isLoading}>
        Add
      </UIButton>
    </form>
  );
};
