import React from "react";

const Card = ({ headline, chart, pointer, data }) => {
  return (
    <div className="card">
      <div className="card-name">{headline}</div>
      <div className="inner">
        <div className="indicator">
          <img src={chart} alt=" 1" className="bar" />
          <img src={pointer} alt=" 2" className="pointer" />
        </div>

        <div className="sub-div">
          <div className="sub-div-item">
            <p>3</p>
            <div className="type bearish">Bearish</div>
          </div>
          <div className="sub-div-item">
            <p>3</p>
            <div className="type neutral">Neutral</div>
          </div>
          <div className="sub-div-item">
            <p>3</p>
            <div className="type bullish">bullish</div>
          </div>
        </div>
        <div className="numbers">
          {data.map((item, index) => (
            <div className="number" key={index}>
              <div className="number-value">{item.value}</div>
              <div className="number-name">{item.label}</div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Card;
