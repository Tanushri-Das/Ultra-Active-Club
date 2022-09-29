import React, { useEffect, useState } from "react";
import "./Studies.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/Card";
import List from "../List/List";
import { addToDb, getStoredTime } from "../../Utilitites/FakeDb/FakeDb";
import Questions from "../Questions/Questions";
import Activity from "../Activity/Activity";

const Studies = () => {
  const [cards, setCards] = useState([]);
  const [list, setList] = useState([]);
  const [leisure, setLeisure] = useState([]);

  useEffect(() => {
    fetch("fakedata.JSON")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  const handleAddToList = (card) => {
    const newList = [...list, card];
    setList(newList);
  };
  useEffect(() => {
    const storedBreakTime = getStoredTime();
    const savedBreakTime = [];
    for (const e in storedBreakTime) {
      savedBreakTime.push(e);

      setLeisure(savedBreakTime);
    }
  }, []);
  const handleBreak = (e) => {
    setLeisure(e.target.value);
    addToDb(e.target.value);
  };
  return (
    <div>
      <div className="container">
        <div className="left-side">
          <div className="name-container">
            <FontAwesomeIcon icon={faBook} className="myicon"></FontAwesomeIcon>
            <h1>Study Schedules</h1>
          </div>
          <h2>Select Today’s Schedules </h2>
          <div className="card-container">
            {cards.map((card) => (
              <Card
                card={card}
                handleAddToList={handleAddToList}
                key={card.id}
              ></Card>
            ))}
          </div>
        </div>
        <div className="right-side">
          <h1>Tanushri das</h1>
          <p className="location">Location : Bangladesh</p>
          <p className="age">Age : 22</p>
          <div>
            <h2 className="break-text">Add A Break</h2>
            <div className="break-btn">
              <input
                className="btn"
                onClick={handleBreak}
                type="button"
                value="10s"
              />
              <input
                className="btn"
                onClick={handleBreak}
                type="button"
                value="20s"
              />
              <input
                className="btn"
                onClick={handleBreak}
                type="button"
                value="30s"
              />
              <input
                className="btn"
                onClick={handleBreak}
                type="button"
                value="40s"
              />
              <input
                className="btn"
                onClick={handleBreak}
                type="button"
                value="50s"
              />
            </div>
            <h2 style={{ textAlign: "left" }}>Study Details</h2>
            <div>
              <List list={list}></List>
              <h2 className="breaktime-text">
                Break Time <span className="total-breaktime">{leisure}</span>
              </h2>

              <Activity></Activity>
            </div>
          </div>
        </div>
      </div>

      <div className="asked-questions">
        <h1 className="frequently-text">Frequently Asked Questions</h1>
        <Questions></Questions>
      </div>
    </div>
  );
};

export default Studies;
