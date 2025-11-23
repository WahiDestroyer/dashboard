"use client";

import React, { useState } from "react";

const Toggle = ({ onToggle, onAction }) => {
  const [isOn, setIsOn] = useState(false);

  const handleChange = (event) => {
    const next = event.target.checked;
    setIsOn(next);
    onToggle?.(next);
  };

  return (
    <div className="toggle-bar">
      <span
        className={`toggle-icon ${!isOn ? "active" : ""}`}
        aria-label="Dark mode"
      >
        🌙
      </span>
      <label className="toggle-switch">
        <input
          type="checkbox"
          aria-label="Toggle theme"
          checked={isOn}
          onChange={handleChange}
        />
        <span className="toggle-switch-track" />
        <span className="toggle-switch-thumb" />
      </label>
      <span
        className={`toggle-icon ${isOn ? "active" : ""}`}
        aria-label="Light mode"
      >
        ☀️
      </span>
      <span className="toggle-divider" aria-hidden="true" />
      <button
        type="button"
        className="toggle-action"
        aria-label="Perform action"
        onClick={onAction}
      >
        ⤢
      </button>
    </div>
  );
};

export default Toggle;
