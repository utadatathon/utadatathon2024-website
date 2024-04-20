import React, { useState, useEffect } from "react";

export default function HomeLeaderboard() {
  const modelChallengesConfig = {
    "1": {
      title: "Mayday Maestros",
      url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRnTh53H0cFW1ASfbna8I3Seflj_k7tJ9kYtudSXd-VxKVg2cx2c8IUygBGlUxhtJPX8r1mX0sMRPE4/pub?gid=1220557846&single=true&output=csv",
    },
    "2": {
      title: "Vision Quest",
      url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRnTh53H0cFW1ASfbna8I3Seflj_k7tJ9kYtudSXd-VxKVg2cx2c8IUygBGlUxhtJPX8r1mX0sMRPE4/pub?gid=2002191652&single=true&output=csv",
    },
    "3": {
      title: "No Drama Llama",
      url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRnTh53H0cFW1ASfbna8I3Seflj_k7tJ9kYtudSXd-VxKVg2cx2c8IUygBGlUxhtJPX8r1mX0sMRPE4/pub?gid=1200364688&single=true&output=csv",
    },
    "4": {
      title: "IDIR ML",
      url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRnTh53H0cFW1ASfbna8I3Seflj_k7tJ9kYtudSXd-VxKVg2cx2c8IUygBGlUxhtJPX8r1mX0sMRPE4/pub?gid=1572880547&single=true&output=csv",
    },
  };

  const timedChallengesConfig = {
    "1": { title: "Viz-a-verse", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRnTh53H0cFW1ASfbna8I3Seflj_k7tJ9kYtudSXd-VxKVg2cx2c8IUygBGlUxhtJPX8r1mX0sMRPE4/pub?gid=1508110603&single=true&output=csv" },
    "2": { title: "VR Headset", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRnTh53H0cFW1ASfbna8I3Seflj_k7tJ9kYtudSXd-VxKVg2cx2c8IUygBGlUxhtJPX8r1mX0sMRPE4/pub?gid=1546063661&single=true&output=csv" },
    "3": { title: "UTI Dataset", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRnTh53H0cFW1ASfbna8I3Seflj_k7tJ9kYtudSXd-VxKVg2cx2c8IUygBGlUxhtJPX8r1mX0sMRPE4/pub?gid=1372174583&single=true&output=csv" },
    
  };

  const [activeModelLeaderboard, setActiveModelLeaderboard] = useState("1");
  const [activeTimedLeaderboard, setActiveTimedLeaderboard] = useState("1");
  const [modelData, setModelData] = useState({});
  const [timedData, setTimedData] = useState({});

  useEffect(() => {
    // Fetch data for each Model Challenge
    Object.entries(modelChallengesConfig).forEach(([id, config]) => {
      fetch(config.url)
        .then((response) => response.text())
        .then((data) => {
          const parsedData = parseData(data);
          setModelData((prevData) => ({ ...prevData, [id]: parsedData }));
        })
        .catch((error) =>
          console.error(`Error fetching data for ${config.title}`, error)
        );
    });

    // Fetch data for each Timed Challenge
    Object.entries(timedChallengesConfig).forEach(([id, config]) => {
      fetch(config.url)
        .then((response) => response.text())
        .then((data) => {
          const parsedData = parseData(data);
          setTimedData((prevData) => ({ ...prevData, [id]: parsedData }));
        })
        .catch((error) =>
          console.error(`Error fetching data for ${config.title}`, error)
        );
    });
  }, []);

  const parseData = (data) => {
    const rows = data.trim().split("\n").slice(1);
    return rows.map((row) => {
      const columns = row.split(',');
      return { name: columns[0], score: parseInt(columns[3], 10) };
    });
  };

  const LeaderboardColumn = ({ title, data = [] }) => {
    const gridContainerStyle =
      "grid grid-cols-3 text-center lg:text-lg font-bold p-4";
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
        <h3 className="text-lg lg:text-2xl font-semibold mb-4 text-center">
          {title}
        </h3>
        <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-violet-800 rounded-lg shadow p-4 max-h-[650px] overflow-y-auto">
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
      <h1 className="flex items-start justify-center font-bold md:p-6 p-12 md:text-4xl text-2xl my-2 text-complementary text-center bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent custom-font">
        LEADERBOARD
      </h1>
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex flex-col md:w-1/2 w-full">
          <h3 className="text-lg text-center custom-font p-8">
            Model Challenges
          </h3>
          <div className="flex justify-center gap-4 mb-4">
            {Object.entries(modelChallengesConfig).map(([id, { title }]) => (
              <button
                key={id}
                onClick={() => setActiveModelLeaderboard(id)}
                className={`text-lg px-4 py-2 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-indigo-500 hover:bg-opacity-20 custom-font-2 ${
                  activeModelLeaderboard === id
                    ? "bg-indigo-500 bg-opacity-20"
                    : ""
                }`}
              >
                {id}
              </button>
            ))}
          </div>
          {modelData[activeModelLeaderboard] && (
            <LeaderboardColumn
              title={modelChallengesConfig[activeModelLeaderboard].title}
              data={modelData[activeModelLeaderboard]}
            />
          )}
        </div>

        <div className="flex flex-col md:w-1/2 w-full">
          <h3 className="text-lg text-center custom-font p-8">
            Timed Challenges
          </h3>
          <div className="flex justify-center flex-wrap gap-4 mb-4">
            {Object.entries(timedChallengesConfig).map(([id, { title }]) => (
              <button
                key={id}
                onClick={() => setActiveTimedLeaderboard(id)}
                className={`text-lg px-4 py-2 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-indigo-500 hover:bg-opacity-20 custom-font-2 ${
                  activeTimedLeaderboard === id
                    ? "bg-indigo-500 bg-opacity-20"
                    : ""
                }`}
              >
                {id}
              </button>
            ))}
          </div>
          {timedData[activeTimedLeaderboard] && (
            <LeaderboardColumn
              title={timedChallengesConfig[activeTimedLeaderboard].title}
              data={timedData[activeTimedLeaderboard]}
            />
          )}
        </div>
      </div>
    </section>
  );
}
