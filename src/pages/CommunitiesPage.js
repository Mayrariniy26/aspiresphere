import React from "react";
import Sidebar from "../components/Sidebar"; // Import Sidebar
import Topbar from "../components/Topbar"; // Import Topbar
import "../styles/CommunitiesPage.css"; // Import Styles

const CommunitiesPage = () => {
  const groups = [
    { name: "Fitness Enthusiasts", challenge: "Complete 100 pushups", progress: 80 },
    { name: "Book Lovers", challenge: "Read 50 pages", progress: 50 },
  ];

  const challenges = [
    { name: "30-Day Fitness Challenge", daysRemaining: 5, progress: 70 },
    { name: "10-Day Reading Challenge", daysRemaining: 3, progress: 40 },
  ];

  return (
    <div className="communities-page">
      <Sidebar />
      <div className="main-content">
        <Topbar />

        {/* Header Section */}
        <div className="header-card">
          <h2>Groups & Communities</h2>
          <p>
            Connect, collaborate, and achieve goals together with your community!
          </p>
        </div>

        {/* Groups Section */}
        <div className="groups-section">
          <h3>Your Groups</h3>
          {groups.map((group, index) => (
            <div className="group-item" key={index}>
              <span>
                <strong>{group.name}</strong>: {group.challenge}
              </span>
              <progress value={group.progress} max="100"></progress>
              <span>{group.progress}%</span>
            </div>
          ))}
        </div>

        {/* Challenges Section */}
        <div className="challenges-section">
          <h3>Ongoing Challenges</h3>
          {challenges.map((challenge, index) => (
            <div className="challenge-item" key={index}>
              <span>
                <strong>{challenge.name}</strong> - {challenge.daysRemaining} days remaining
              </span>
              <progress value={challenge.progress} max="100"></progress>
              <span>{challenge.progress}%</span>
            </div>
          ))}
        </div>

        {/* Join New Groups Button */}
        <div className="join-groups">
          <button className="join-groups-btn">Join New Groups</button>
        </div>
      </div>
    </div>
  );
};

export default CommunitiesPage;
