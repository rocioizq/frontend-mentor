import "./App.css";
import Tracking from "./components/Tracking";
import data from "./data.json";
import User from "./components/User";
import { useState } from "react";
import jeremyImg from "../images/image-jeremy.png";
import 'animate.css';

function App() {
  const [timeframe, setTimeframe] = useState("weekly");

  return (
    <div className="container">
      <div className="user-container">
        <User 
          userImage={jeremyImg}
          name="Jeremy Robson"
          setTimeframe={setTimeframe}
          timeframe={timeframe}
        />
      </div>

      <div className="tracking-container">
        {data.map((item) => (
          <Tracking 
            key={item.title}
            cardImage={item.image}
            title={item.title}
            time={item.timeframes[timeframe].current}
            lastWeek={item.timeframes[timeframe].previous}
            className={item.title.toLowerCase()}
          />
        ))}
      </div>
    </div>
  )
}

export default App
