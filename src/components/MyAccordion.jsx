import React, {useState} from "react";
import "./MyAccordion.css";

const MyAccordion = ({ id, Question, Answer }) => {
  const [show, setShow] = useState(false)
  return (
    <>
      {
        <div className="accordian-box" key={id}>
          <div className="question-box">
            <span onClick={() => setShow(!show)} >{show ? "-" : "+" }</span>
            <span>{Question}</span>
          </div>
          {show ? <p>{Answer}</p> : ""}
        </div>
      }
    </>
  );
};

export default MyAccordion;
