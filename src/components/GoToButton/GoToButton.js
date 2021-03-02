import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./goToButton.css";

function GoToButton({ route, location }) {
  return (
    <Link to={`/${route}`}>
      <Button
        id="orange"
        variant="outlined"
        style={{ width: "100%", marginTop: "20px" }}
      >
        {location}
      </Button>
    </Link>
  );
}

export default GoToButton;
