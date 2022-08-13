import * as React from "react";
// import Button from "@mui/material/Button";
import "./Button.scss";
export default function BasicButtons(props) {
  const { children, ...rest } = props;

  return <button {...rest}>{children}</button>;
}
