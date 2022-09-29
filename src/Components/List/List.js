import React from "react";

import "./List.css";

const List = ({ list }) => {
  let totalTime = 0;
  for (const card of list) {
    totalTime = totalTime + card.time;
  }

  return (
    <div className="list">
      <h3 className="study-time">
        Study Time
        <span className="total-study-time">{totalTime}s</span>
      </h3>
    </div>
  );
};

export default List;
