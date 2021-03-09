import React, { useEffect } from "react";
import "./error404.css";
import { useGlobalContext } from "../../globalContext";
import { RiErrorWarningLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Error404() {
  const { setPageError } = useGlobalContext();

  useEffect(() => {
    setPageError(true);
  }, []);
  return (
    <div className="error404">
      <RiErrorWarningLine />
      <p>Error 404</p>
      <Link to="/" onClick={() => setPageError(false)}>
        Volver a Inicio
      </Link>
    </div>
  );
}

export default Error404;
