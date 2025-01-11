import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "../styles/SettingsPage.css";
import profileIcon from "../assets/profile-icon.png"; // Import the profile icon

const SettingsPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [notifications, setNotifications] = useState({
    habitReminders: false,
    groupUpdates: false,
  });
  const [security, setSecurity] = useState({
    twoFactorAuth: false,
  });

  const handleSaveChanges = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div className="settings-page">
      <Sidebar />
      <div className="main-content">
        <Topbar />

        {/* Header Section */}
        <div className="header-card">
          <h2>Settings</h2>
          <p>Personalize your experience with themes, notifications, and security options.</p>
        </div>

        {/* Profile Section */}
        <div className="profile-section">
          <img src={profileIcon} alt="Profile" className="profile-pic" /> {/* Updated avatar */}
          <p className="change-text">Change</p>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Notifications Section */}
        <div className="settings-section">
          <h3>Notifications</h3>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={notifications.habitReminders}
                onChange={() =>
                  setNotifications({
                    ...notifications,
                    habitReminders: !notifications.habitReminders,
                  })
                }
              />
              Habit Reminders
            </label>
            <label>
              <input
                type="checkbox"
                checked={notifications.groupUpdates}
                onChange={() =>
                  setNotifications({
                    ...notifications,
                    groupUpdates: !notifications.groupUpdates,
                  })
                }
              />
              Group Updates
            </label>
          </div>
        </div>

        {/* Security Section */}
        <div className="settings-section">
          <h3>Security</h3>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={security.twoFactorAuth}
                onChange={() =>
                  setSecurity({
                    ...security,
                    twoFactorAuth: !security.twoFactorAuth,
                  })
                }
              />
              Enable Two-Factor Authentication
            </label>
          </div>
        </div>

        {/* Save Changes Button */}
        <div className="save-section">
          <button className="save-btn" onClick={handleSaveChanges}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
