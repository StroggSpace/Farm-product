import React, { useState } from "react";
import { StyledCheckItemLabel, StyledCheckItemInput } from "./style";

export default function CheckItem({ title, id }) {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <>
      <StyledCheckItemLabel checked={checked}>
        {title}
        <StyledCheckItemInput
          type="checkbox"
          id={id}
          onChange={handleChecked}
        />
      </StyledCheckItemLabel>
    </>
  );
}
