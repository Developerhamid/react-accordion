import React, { useState } from "react";
import AccordionData from "./AccordionApi";
import MyAccordion from "./MyAccordion";

const Accordion = () => {
  const [AccData, setAccData] = useState(AccordionData);
  return (
    <>
      <div className="container">
        <h1>Interview Questions</h1>
        {AccData.map((item) => {
          const { id } = item;
          return (
            <>
              <MyAccordion key={id} {...item} />
            </>
          );
        })}
      </div>
      {/* <MyAccordion /> */}
    </>
  );
};

export default Accordion;
