import React from "react";

const Button = ({
  children,
  onClick,
  disablet,
  variant,
  size,
  ...restProps
}) => {
  return <button onClick={onClick} disablet={disablet}>{children} {...restProps}</button>;
};

export default Button;
