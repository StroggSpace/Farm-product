import React from "react";

export default function CheckItem({ title, id }) {
  return (
    <>
      <label>
        {title}
        <input type="checkbox" id={id} />
      </label>
    </>
  );
}
