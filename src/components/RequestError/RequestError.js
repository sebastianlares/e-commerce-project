import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { useGlobalContext } from "../../globalContext";
import "./requestError.css";

function RequestError({ styled }) {
  const { setErrorRequest } = useGlobalContext();

  return (
    <div
      className="requestError"
      style={{
        paddingTop: `${styled && styled}`,
        margin: `${styled && "auto"}`,
      }}
    >
      <RiErrorWarningLine />
      <p>
        Parece que hubo un error, <br></br>por favor intentá de nuevo!
      </p>
      <button
        onClick={() =>
          setErrorRequest({
            itemList: false,
            itemDetail: false,
            cart: false,
            userProfile: false,
            form: false,
          })
        }
      >
        Recargar
      </button>
    </div>
  );
}

export default RequestError;
