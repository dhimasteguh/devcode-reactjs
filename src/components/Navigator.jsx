import React from "react";
import { Plus } from "../constants/icons/Plus";
import "./Navigator.css";
const Navigator = () => {
  return (
    <div className="navigator-container">
      <div className="activity-title">Activity</div>
      <button className="add-btn-todo">
        <Plus />
        <span>Tambah</span>
      </button>
    </div>
  );
};

export default Navigator;
