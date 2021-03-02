import React, { useState, useEffect } from "react";
import { RiCheckDoubleLine } from "react-icons/ri";
import { useGlobalContext } from "../../globalContext";
import "./insertNumber.css";

function InsertNumber() {
  const [number, setNumber] = useState();
  const [wrongInput, setWrongInput] = useState(false);
  const { setPhoneNumber, showEdit, setShowEdit } = useGlobalContext();

  const phoneNumberHandler = (e) => {
    setNumber(e.target.value);
  };

  const checkNumber = (number) => {
    if (number === undefined) {
      setWrongInput(true);
      return;
    }
    const letterNumber = /^[a-zA-Z]+$/;
    if (number.split("").some((l) => letterNumber.test(l))) {
      setWrongInput(true);
      return;
    } else {
      setWrongInput(false);
      setPhoneNumber(number);
      setShowEdit(false);
    }
  };

  useEffect(() => {
    if (wrongInput);
    const timeOut = setTimeout(() => {
      setWrongInput(false);
    }, 2000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [wrongInput]);

  return (
    <div className="check-in" style={{ display: showEdit ? "flex" : "none" }}>
      <input
        style={{ border: wrongInput && "1px solid red" }}
        type="text"
        placeholder="Ingresar número"
        required
        onChange={(e) => phoneNumberHandler(e)}
      />
      <RiCheckDoubleLine onClick={() => checkNumber(number)} />
    </div>
  );
}

export default InsertNumber;
