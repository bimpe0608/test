import React from "react";

export default function Button({ children, id, name, type, onClick }) {
  return (
    <button type={type} id={id} name={name} onClick={onClick}>
      {children}
    </button>
  );
}
