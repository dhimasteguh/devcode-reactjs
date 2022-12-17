import React from "react";
import { Plus } from "../constants/icons/Plus";
import "./Navigator.css";
const Navigator = ({ test, title, onClick }) => {
  return (
    <div className="navigator-container">
      {title ? (
        title
      ) : (
        <div className="activity-title" data-cy="activity-title">
          Activity
        </div>
      )}
      <button data-cy={test} onClick={onClick} className="add-btn-todo">
        <Plus />
        <span>Tambah</span>
      </button>
    </div>
  );
};

export default Navigator;
