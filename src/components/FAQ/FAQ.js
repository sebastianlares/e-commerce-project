import React, { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import "./Faq.css";

function FAQ({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
}

export default FAQ;
