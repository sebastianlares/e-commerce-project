import React from "react";
import { useGlobalContext } from "../../globalContext";
import "./userProfile.css";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import OrderDetail from "../OrderDetail/OrderDetail";
import InsertNumber from "../InsertNumber/InsertNumber";
import { RiEditLine } from "react-icons/ri";
import RequestError from "../RequestError/RequestError";

function UserProfile({ loading, userOrderData, setDeleteOrder }) {
  const {
    phoneNumber,
    currentUser,
    setShowEdit,
    errorRequest,
  } = useGlobalContext();
  const { displayName, email, photoURL } = currentUser;
  return (
    <>
      <div className="user-profile">
        <div className="user-info">
          <img src={photoURL} alt={displayName} />
          <div className="user-p">
            <p>Usuario: {displayName}</p>
            <div className="number-edit">
              <div className="number">
                <p>Teléfono:</p>
                <p> {phoneNumber} </p>
                <RiEditLine onClick={() => setShowEdit(true)} />
              </div>
              <InsertNumber />
            </div>
            <p>Email: {email}</p>
          </div>
          <div className="orders">
            {loading ? (
              <LoadingSpinner />
            ) : errorRequest.userProfile ? (
              <RequestError />
            ) : (
              userOrderData.map((order) => {
                return (
                  <OrderDetail order={order} setDeleteOrder={setDeleteOrder} />
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
