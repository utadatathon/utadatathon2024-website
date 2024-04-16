import React, { useState, useEffect } from "react";

export default function HomeLeaderboard() {
  const [activeModelLeaderboard, setActiveModelLeaderboard] = useState("modelChallenge1");
  const [activetimedLeaderboard, setActivetimedLeaderboard] = useState("timedChallenge1");
  const [modelData, setModelData] = useState([]);
  const [timedData, settimedData] = useState([]);

  useEffect(() => {
    setActiveModelLeaderboard('modelChallenge1');
    setActivetimedLeaderboard('timedChallenge1');
    const modelUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQGJ-evwkqTgpg3bdjK5d4eA60s83UcVEyHskotN1GX1Sphsm1OaPi-5z3RB8Jf5J38C3f9jCI5Y7nm/pub?gid=0&single=true&output=csv";
    const timedUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRe08nISXV9ftRGa-6Y2Wam8dMODDXL0olpR4qfRjZTSse9PjJNHmHIvEeMGx5G5pvF5wX3NsN4xZCB/pub?gid=0&single=true&output=csv";

    fetch(modelUrl)
      .then((response) => response.text()) // Change to response.text() instead of response.json()
      .then((data) => {
        const rows = data.trim().split("\n").slice(1); // Skip the header row
        const modelData = rows.map((row) => {
          const columns = row.split(",");
          const name = columns[0];
          const totalScore = parseInt(columns[4], 10);
          return { name, score: totalScore }; // Using total_score as score
        });
        setModelData(modelData);
      })
      .catch((error) => console.error("Error fetching model data", error));

    // Fetch timed Data
    fetch(timedUrl)
      .then((response) => response.text())
      .then((data) => {
        const rows = data.trim().split("\n").slice(1); 
        const timedData = rows.map((row) => {
          const columns = row.split(",");
          const name = columns[0];
          const totalScore = parseInt(columns[4], 10);
          return { name, score: totalScore };
        });
        settimedData(timedData);
      })
      .catch((error) => console.error("Error fetching timed data", error));
  }, []);

  const LeaderboardColumn = ({ title, data = [] }) => {
    const gridContainerStyle = "grid grid-cols-3 text-center lg:text-lg font-bold p-4";
    const gridItemStyle = "flex items-center justify-center";
    const verticalLineStyle = "border-r-2 border-indigo-600";
    const leaderboardContainerStyle = "max-h-[650px] overflow-y-auto";

    const sortedData = Array.isArray(data)
      ? data
          .sort((a, b) => b.score - a.score)
          .map((entry, index) => ({
            rank: index + 1,
            name: entry.name,
            score: entry.score,
          }))
      : [];

    const getEmojiForRank = (rank) => {
      switch (rank) {
        case 1:
          return "🏆"; // Trophy for 1st
        case 2:
          return "🥈"; // Medal for 2nd
        case 3:
          return "🥉"; // Medal for 3rd
        default:
          return "";
      }
    };

    
    return (
      <div className="overflow-x-auto px-4 mt-4 custom-scrollbar">
        <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-center">
          {title}
        </h3>
        <div
          className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-violet-800 rounded-lg shadow p-4 max-h-[650px] overflow-y-auto"
        >
          <div className="grid grid-cols-3 text-center lg:text-lg font-bold p-4 border-b border-indigo-600">
            <div className="border-r-2 border-indigo-600">Rank</div>
            <div className="border-r-2 border-indigo-600">Team</div>
            <div>Score</div>
          </div>
          {sortedData.map((entry, index) => (
            <div
              key={index}
              className={`${gridContainerStyle} ${
                index % 2 ? "bg-indigo-500" : "bg-indigo-600"
              }`}
              >
              <div className={`${gridItemStyle} ${verticalLineStyle}`}>
                <span className="emoji-space">
                  {getEmojiForRank(entry.rank)}
                </span>
                {entry.rank}
              </div>
              <div className={`${verticalLineStyle}`}>{entry.name}</div>
              <div>{entry.score}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="md:p-12 p-8 text-complementary">
        <h1 className="flex items-start justify-center font-bold md:p-12 p-12 md:text-4xl text-2xl my-2 text-complementary text-center bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent custom-font">
          LEADERBOARD
        </h1>
      <div className="flex flex-col flex-grow rounded-3xl md:p-4 mx-auto w-full">

        <div className="flex flex-col md:flex-row w-full">
          {/* Left side: Model Challenges */}
          <div className="flex flex-col md:w-1/2 w-full">
          <h3 className="text-md text-center custom-font p-8">Model Challenges</h3>
            <div className="flex justify-center gap-4 mb-4">
              
              {/* Model Challenge Buttons */}
              {[...Array(3)].map((_, index) => (
                <button
                  key={`model-${index + 1}`}
                  onClick={() => setActiveModelLeaderboard(`modelChallenge${index + 1}`)}
                  className="text-sm px-4 py-2 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-indigo-500 hover:bg-opacity-20 custom-font-2"
                >
                  {`${index + 1}`}
                </button>
              ))}
            </div>
            {activeModelLeaderboard === "modelChallenge1" && modelData.length > 0 && (
            <LeaderboardColumn title="Model Challenge 1" data={modelData} />
          )}
          </div>

          {/* Vertical Divider */}
          {/* <div className="w-px bg-indigo-500/30 self-stretch mx-4"></div> */}

          {/* Right side: timed Challenges */}
          <div className="flex flex-col w-full md:w-1/2 md:pl-4 md:pl-0">
          <h3 className="text-md text-center custom-font p-8">Timed Challenges</h3>
            <div className="flex justify-center flex-wrap gap-4 mb-4">
              {/* timed Challenge Buttons */}
              {[...Array(6)].map((_, index) => (
                <button
                  key={`timed-${index + 1}`}
                  onClick={() => setActivetimedLeaderboard(`timedChallenge${index + 1}`)}
                  className="text-sm px-4 py-2 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-indigo-500 hover:bg-opacity-20 custom-font-2"
                >
                  {`${index + 1}`}
                </button>
              ))}
            </div>
            {activetimedLeaderboard === "timedChallenge1" && timedData.length > 0 && (
            <LeaderboardColumn title="timed Challenge 1" data={timedData} />
             )}
          </div>
        </div>
      </div>
    </section>
  );
}