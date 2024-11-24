import React from "react";

interface Props {
  children: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  onclick?: () => void;
}

const Button = ({ children, color = "primary", onclick }: Props) => {
  return (
    <div className="button">
      <button type="button" className={`btn btn-${color}`} onClick={onclick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
