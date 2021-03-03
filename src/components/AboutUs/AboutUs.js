import React, { useState } from "react";
import "./aboutUs.css";
import data from "../../data/faqData";
import FAQ from "../FAQ/FAQ";

function AboutUs() {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="about-us">
      <h2>
        En SimpleCloths queremos despejar <br></br> cualquier duda que puedas
        tener!
      </h2>
      <section className="faq-info">
        {questions.map((question) => {
          return <FAQ key={question.id} {...question} />;
        })}
      </section>
    </div>
  );
}

export default AboutUs;
