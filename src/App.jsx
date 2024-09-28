import Stat from "../components/stat/Stat";
import "./App.css";
import data from "./data.json";
import React from "react";
function App() {
  const [results, setResults] = React.useState(data);
  const resultElements = results.map((result) => {
    return (
      <Stat
        category={result.category}
        score={result.score}
        icon={result.icon}
        color={result.color}
        key={result.category}
      />
    );
  });
  return (
    <main>
      <div className="result">
        <h1>Your Result</h1>
        <div className="circle">
          <p className="avg-score">76</p>
          <span style={{ color: "#CAC9FF" }}>of 100</span>
        </div>
        <div className="content">
          <h2>Great</h2>
          <p className="desc">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
      <div className="summary">
        <h2>Summary</h2>
        {resultElements}
        <button>Continue</button>
      </div>
    </main>
  );
}

export default App;
