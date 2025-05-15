import "./App.css";
import { useEffect, useState } from "react";
import Followers from "./componentes/followers-social-media";
import dashboardData from "./componentes/dashboardData";
import Overview from "./componentes/overviews";
import DarkMode from "./componentes/DarkMode";

function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    if(theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

  return (
    
    <div className="container">
      <div className="header">
        <div className="header-text">
          <h1 className="title">Social Media Dashboard</h1>
          <h3 className="total-followers">Total Followers: 23,004</h3>
        </div>

        <div className="dark-mode">
          <DarkMode 
          changeTheme={changeTheme}
        />
      </div>
      </div>
      

      <div className="followers-container">
        {dashboardData.accounts.map((item, index) => {
          return(
            <Followers
              key={index}
              className={item.platform}
              platform={item.platform}
              image={item.image}
              username={item.username}
              followers={item.followers || item.subscribers}
              arrow={item.arrow}
              todayChange={item.todayChange}
            />
          );
        })}        
      </div>

      <h1 className="overview-title">Overview - Today</h1>
      <div className="overview-container">
        {dashboardData.overviewToday.map((item, index) => {
          const isNegativeFacebook = item.platform === "facebook" && index === 1;

          return (
            <Overview 
              key={index}
              className={`${item.platform} ${isNegativeFacebook ? "negative" : ""}`}
              metric={item.metric}
              value={item.value}
              image={item.image}
              arrow={item.arrow}
              changePercent={item.changePercent}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App
