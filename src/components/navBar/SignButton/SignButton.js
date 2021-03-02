import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { useGlobalContext } from "../../../globalContext";
import firebase from "../../../firebase/index";

import "./signButton.css";

function SignButton() {
  const [isSigned, setIsSigned] = useState(false);
  const { currentUser, signIn } = useGlobalContext();

  useEffect(() => {
    currentUser !== null ? setIsSigned(true) : setIsSigned(false);
  }, [currentUser]);

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("sign out completado");
        setIsSigned(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="signButton">
      {isSigned ? (
        <Button onClick={signOut}>CERRAR SESIÓN</Button>
      ) : (
        <Button onClick={signIn}>INICIAR SESIÓN</Button>
      )}
    </div>
  );
}

export default SignButton;
