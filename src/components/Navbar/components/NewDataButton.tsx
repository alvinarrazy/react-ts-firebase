import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NewDataButton() {

  

  return (
    <Link className="nav-link ml-4" to="/new">
      <Button variant="primary">New Data!</Button>
    </Link>
  );
}

export default NewDataButton;
