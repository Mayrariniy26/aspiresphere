import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "../styles/CreateHabit.css";

const CreateHabitPage = () => {
  const [habitName, setHabitName] = useState("");
  const [frequency, setFrequency] = useState("Daily");
  const [reminder, setReminder] = useState("");
  const [category, setCategory] = useState("Fitness");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSaveHabit = () => {
    setSuccessMessage("Habit added successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="create-habit-page">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">
        <Topbar />
        <div className="habit-form-container">
          <h2>Create New Habit</h2>
          <p>Organize your day with better habits</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSaveHabit();
            }}
          >
            <div className="form-group">
              <label>Habit Name</label>
              <input
                type="text"
                placeholder="Enter your habit name"
                value={habitName}
                onChange={(e) => setHabitName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Frequency</label>
              <select
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                required
              >
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
              </select>
            </div>
            <div className="form-group">
              <label>Reminder</label>
              <input
                type="datetime-local"
                value={reminder}
                onChange={(e) => setReminder(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="Fitness">Fitness</option>
                <option value="Work">Work</option>
                <option value="Study">Study</option>
                <option value="Hobby">Hobby</option>
                <option value="Health">Health</option>
              </select>
            </div>
            <button type="submit" className="save-habit-btn">
              Save Habit
            </button>
          </form>
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateHabitPage;
