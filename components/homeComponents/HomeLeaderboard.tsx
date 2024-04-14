import React, { useState, useEffect } from "react";

export default function HomeLeaderboard() {
  const [activeModelLeaderboard, setActiveModelLeaderboard] = useState("modelChallenge1");
  const [activeTriviaLeaderboard, setActiveTriviaLeaderboard] = useState("triviaChallenge1");
  const [modelData, setModelData] = useState([]);
  const [triviaData, setTriviaData] = useState([]);

  useEffect(() => {
    setActiveModelLeaderboard('modelChallenge1');
    setActiveTriviaLeaderboard('triviaChallenge1');
    const modelUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQGJ-evwkqTgpg3bdjK5d4eA60s83UcVEyHskotN1GX1Sphsm1OaPi-5z3RB8Jf5J38C3f9jCI5Y7nm/pub?gid=0&single=true&output=csv";
    const triviaUrl =
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

    // Fetch Trivia Data
    fetch(triviaUrl)
      .then((response) => response.text())
      .then((data) => {
        const rows = data.trim().split("\n").slice(1); 
        const triviaData = rows.map((row) => {
          const columns = row.split(",");
          const name = columns[0];
          const totalScore = parseInt(columns[4], 10);
          return { name, score: totalScore };
        });
        setTriviaData(triviaData);
      })
      .catch((error) => console.error("Error fetching trivia data", error));
  }, []);

  const LeaderboardColumn = ({ title, data = [] }) => {
    const gridContainerStyle = "grid grid-cols-3 text-center lg:text-lg font-bold p-4";
    const gridItemStyle = "flex items-center justify-center";
    const verticalLineStyle = "border-r-2 border-purple-600";
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
          className="bg-gradient-to-r from-violet-500 to-purple-400 rounded-lg shadow p-4 max-h-[650px] overflow-y-auto"
        >
          <div className="grid grid-cols-3 text-center lg:text-lg font-bold p-4 border-b border-purple-600">
            <div className="border-r-2 border-purple-600">Rank</div>
            <div className="border-r-2 border-purple-600">Team Name</div>
            <div>Score</div>
          </div>
          {sortedData.map((entry, index) => (
            <div
              key={index}
              className={`${gridContainerStyle} ${
                index % 2 ? "bg-purple-500" : "bg-purple-600"
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
    <section className="md:p-12 p-6 text-complementary">
        <h1 className="text-4xl font-bold my-4 text-center bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent custom-font tracking-wide w-full">
          LEADERBOARDS
        </h1>
      <div className="flex flex-col flex-grow rounded-3xl p-4 mx-auto w-full">

        <div className="flex w-full">
          {/* Left side: Model Challenges */}
          <div className="flex flex-col w-1/2">
            <div className="flex justify-center gap-4 mb-4">
              {/* Model Challenge Buttons */}
              {[...Array(3)].map((_, index) => (
                <button
                  key={`model-${index + 1}`}
                  onClick={() => setActiveModelLeaderboard(`modelChallenge${index + 1}`)}
                  className="text-md custom-font px-4 py-2 rounded-lg shadow-md transition duration-300 ease-in-out border-2 hover:bg-purple-500 hover:bg-opacity-20"
                >
                  Model Challenge
                </button>
              ))}
            </div>
            {activeModelLeaderboard === "modelChallenge1" && modelData.length > 0 && (
            <LeaderboardColumn title="Model Challenge 1" data={modelData} />
          )}
          </div>

          {/* Vertical Divider */}
          <div className="w-px bg-purple-500 self-stretch mx-4"></div>

          {/* Right side: Trivia Challenges */}
          <div className="flex flex-col w-1/2 pl-4">
            <div className="flex justify-center flex-wrap gap-4 mb-4">
              {/* Trivia Challenge Buttons */}
              {[...Array(6)].map((_, index) => (
                <button
                  key={`trivia-${index + 1}`}
                  onClick={() => setActiveTriviaLeaderboard(`triviaChallenge${index + 1}`)}
                  className="text-md custom-font px-4 py-2 rounded-lg shadow-md transition duration-300 ease-in-out border-2 hover:bg-purple-500 hover:bg-opacity-20"
                >
                  Trivia Challenge
                </button>
              ))}
            </div>
            {activeTriviaLeaderboard === "triviaChallenge1" && triviaData.length > 0 && (
            <LeaderboardColumn title="Trivia Challenge 1" data={triviaData} />
             )}
          </div>
        </div>
      </div>
    </section>
  );
}