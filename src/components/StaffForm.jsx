import React, { useState } from "react";
import Button from "./Button";

export default function StaffForm(props) {
  const [name, setName] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        props.addStaffs(name);
      }}
    >
      <input
        name="staff"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />{" "}
      <Button type="submit">Submit</Button>
    </form>
  );
}
