import React, { useState } from "react";
import "./Home.css";

import bar1 from "./images/bar.8505e185.svg";
import bar2 from "./images/bar_resistance.eb8d6baa.svg";
import bar3 from "./images/bar_ma.1ee3ecd8.svg";
import bar4 from "./images/bar_oscillator.ed2bf1c3.svg";
import pointer1 from "./images/pointer.c2b2a6c5.svg";
import pointer2 from "./images/pointer_resistance.645dfcd4.svg";
import Card from "./Card";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(5);
  const data = {
    summary: [
      {
        value: 22076.49,
        label: "EMA (20)",
      },
      {
        value: 22159.61,
        label: "SMA(20)",
      },
      {
        value: 51.48,
        label: "RSI(14)",
      },
      {
        value: -96.92,
        label: "Awesome Osc.",
      },
      {
        value: 14.42,
        label: "Macd (12, 26, 9)",
      },
      {
        value: -43.9,
        label: "CCI (20)",
      },
    ],
    sr: [
      {
        value: 21576.17,
        label: "S1",
      },
      {
        value: 21169.53,
        label: "S2",
      },
      {
        value: 20402.23,
        label: "S3",
      },
      {
        value: 22343.47,
        label: "R1",
      },
      {
        value: 22704.13,
        label: "R2",
      },
      {
        value: 23471.43,
        label: "R3",
      },
    ],
    ma: [
      {
        value: 22016.03,
        label: "EMA (5)",
      },
      {
        value: 21964.19,
        label: "SMA (5)",
      },
    ],
    oscilators: [
      {
        value: 51.48,
        label: "RSI (14)",
      },
      {
        value: 47.35,
        label: "Stoch.%K (14, 3, 3)",
      },
    ],
  };

  const handleSlotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="home">
      <div className="time-frame">
        <div
          className={`slot ${activeIndex === 0 ? "active" : ""}`}
          onClick={() => handleSlotClick(0)}
        >
          5min
        </div>
        <div
          className={`slot ${activeIndex === 1 ? "active" : ""}`}
          onClick={() => handleSlotClick(1)}
        >
          10min
        </div>
        <div
          className={`slot ${activeIndex === 2 ? "active" : ""}`}
          onClick={() => handleSlotClick(2)}
        >
          15min
        </div>
        <div
          className={`slot ${activeIndex === 3 ? "active" : ""}`}
          onClick={() => handleSlotClick(3)}
        >
          30min
        </div>
        <div
          className={`slot ${activeIndex === 4 ? "active" : ""}`}
          onClick={() => handleSlotClick(4)}
        >
          1hr
        </div>
        <div
          className={`slot ${activeIndex === 5 ? "active" : ""}`}
          onClick={() => handleSlotClick(5)}
        >
          1day
        </div>
      </div>
      <div className="index">
        <p className="index-name">
          <img
            src={`https://technicals.zerodha.com/static/media/NSE.62a33981.svg`}
            alt="index-logo"
            className="index-logo"
          />
          NIFTY 50
        </p>
        <p className="stats">
          ₹ 22096.75
          <div className="change"> (0.39%)</div>
        </p>
      </div>

      <div className="cards">
        <Card
          headline={"Summary"}
          chart={bar1}
          pointer={pointer1}
          data={data.summary}
        />
        <Card
          headline={"Support & Resistance"}
          data={data.sr}
          chart={bar2}
          pointer={pointer2}
        />
        <Card
          data={data.ma}
          headline={"Moving averages"}
          chart={bar3}
          pointer={pointer1}
        />
        <Card
          data={data.oscilators}
          headline={"Oscillators"}
          chart={bar4}
          pointer={pointer1}
        />
      </div>
    </div>
  );
};

export default Home;
