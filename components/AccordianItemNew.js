import React, { useState } from "react";

const AccordianItemNew = (props) => {
  const [status, setStatus] = useState(props.status);
  const handleClick = () => {
    setStatus(!status);
  };
  return (
    <div className={`accrodion ${status === true ? "active" : ""}`}>
      <div className="accrodion-inner">
        <div className="accrodion-title" onClick={handleClick}>
          <h4>{props.title}</h4>
        </div>
        {status === true ? (
          <div className="accrodion-content">
            <div className="inner">
              <p>{props.content}</p>
              {props.bulletPoints && (
                <ul className="bullet-points">
                  {props.bulletPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AccordianItemNew;
