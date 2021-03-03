import React, { useState, useEffect } from "react";
import { getFireStore } from "../../firebase/index";
import firebase from "firebase/app";
import { useGlobalContext } from "../../globalContext";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

import "./contact.css";

function Contact() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    comments: "",
    email: "",
  });
  const [sendEmail, setSendEmail] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const { loadingItems, setLoadingItems } = useGlobalContext();

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      userInfo.firstName !== "" &&
      userInfo.flastName !== "" &&
      userInfo.comments !== "" &&
      userInfo.email !== "" &&
      checkEmail
    ) {
      setSendEmail(true);
    } else {
      return;
    }
  };

  const infoHandler = (e, type) => {
    const data = e.target.value;
    if (type === "firstName") {
      setUserInfo({ ...userInfo, firstName: data });
    } else if (type === "lastName") {
      setUserInfo({ ...userInfo, lastName: data });
    } else if (type === "comments") {
      setUserInfo({ ...userInfo, comments: data });
    }
  };

  const emailInputHandler = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(userInfo.email).toLowerCase())) {
      alert("Por favor ingresa una dirección de mail válida!");
      setCheckEmail(false);
      return;
    } else return setCheckEmail(true);
  };

  const emailHandler = (e) => {
    const mail = e.target.value;
    setUserInfo({ ...userInfo, email: mail });
  };

  useEffect(() => {
    if (sendEmail) {
      setLoadingItems(true);
      const db = getFireStore();
      const emails = db.collection("emails");
      const newEmail = {
        user: userInfo.firstName,
        comments: userInfo.comments,
        email: userInfo.email,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
      };
      emails
        .add(newEmail)

        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          setSendEmail(false);
          setLoadingItems(false);
          alert("Tu sugerencia se envió correctamente, gracias!");
        });
    }
  }, [sendEmail]);

  return (
    <div className="contact-form">
      <h2>
        Tu opinión nos es importante! <br />
        Por eso, ante cualquier duda o sugerencia que tengas, <br /> no dudes en
        escribirnos!
      </h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="firstName"
          placeholder="Nombre"
          required
          onChange={(e) => infoHandler(e, "firstName")}
          value={sendEmail ? "" : null}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Apellido"
          required
          onChange={(e) => infoHandler(e, "lastName")}
          value={sendEmail ? "" : null}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          required
          onChange={(e) => emailHandler(e)}
          value={sendEmail ? "" : null}
        />
        <input
          type="textarea"
          placeholder="Comentarios"
          id="area"
          onChange={(e) => infoHandler(e, "comments")}
          value={sendEmail ? "" : null}
        />
        <button type="submit" onClick={emailInputHandler}>
          Enviar
        </button>
      </form>
      {loadingItems && <LoadingSpinner />}
    </div>
  );
}

export default Contact;
