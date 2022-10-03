import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Props {
  onClick: () => void;
}

function LoginButton({ onClick }: Props) {

  return (
      <Button variant="primary" onClick={() => onClick()}>Login</Button>
  );
}

export default LoginButton;
