import { RiInformationLine, RiCheckDoubleLine } from "react-icons/ri";
import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { useGlobalContext } from "../../globalContext";

import "./infoAlert.css";

function InfoAlert() {
  const [number, setNumber] = useState();
  const [showInfo, setShowInfo] = useState(false);
  const [wrongInput, setWrongInput] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showInfoDiv, setShowInfoDiv] = useState(false);
  const {
    signIn,
    currentUser,
    setPhoneNumber,
    phoneNumber,
  } = useGlobalContext();

  useEffect(() => {
    (Object.keys(phoneNumber).length === 0 || currentUser === null) &&
      setShowInfo(true);
  }, [currentUser, phoneNumber]);

  useEffect(() => {
    if (wrongInput) setShowTooltip(true);
    const timeOut = setTimeout(() => {
      setShowTooltip(false);
      setWrongInput(false);
    }, 2000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [wrongInput]);

  const phoneNumberHandler = (e) => {
    setNumber(e.target.value);
  };

  const checkNumber = (number) => {
    const letterNumber = /^[a-zA-Z]+$/;
    if (number.split("").some((l) => letterNumber.test(l))) {
      setWrongInput(true);
      return;
    } else {
      setWrongInput(false);
      setPhoneNumber(number);
    }
  };

  return (
    <>
      {showInfo && (
        <>
          {showInfoDiv && (
            <div className="showInfo">
              {currentUser === null && (
                <p className="user-log-in">
                  Para finalizar la compra tenés que iniciar sesión!
                  <Button id="log-in" onClick={signIn}>
                    Iniciar sesión
                  </Button>
                </p>
              )}
              {Object.keys(phoneNumber).length === 0 && (
                <>
                  <p className="phone-number">
                    Para finalizar la compra tenés que agregar un número de
                    teléfono!
                  </p>
                  <div className="check" id="check">
                    <input
                      type="text"
                      placeholder="Ingresar número"
                      required
                      onChange={(e) => phoneNumberHandler(e)}
                    />
                    <RiCheckDoubleLine onClick={() => checkNumber(number)} />
                  </div>
                  {wrongInput && showTooltip && (
                    <p className="tooltip">
                      el teléfono debe contener solo números!
                    </p>
                  )}
                </>
              )}
            </div>
          )}
          <RiInformationLine
            id="info-alert"
            onClick={() => setShowInfoDiv(!showInfoDiv)}
          ></RiInformationLine>
        </>
      )}
    </>
  );
}

export default InfoAlert;
