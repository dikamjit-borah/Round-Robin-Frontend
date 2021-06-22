import { React, useState, useEffect } from "react";
import "./WeekComponent.scss";
import Modal from "react-modal";
import AddTopicComponent from "../AddTopicComponent/AddTopicComponent";

function WeekComponent() {
  const [ids, setIds] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [weekCount, setWeekCount] = useState(1);
  let data = [
    {
      schedule_id: 1,
      scheduled_topic: "Topic Name",
      scheduled_date: "3",
      scheduled_start_time: "12:10",
      scheduled_end_time: "14:10",
    },
    {
      schedule_id: 2,
      scheduled_topic: "Topic Name",
      scheduled_date: "4",
      scheduled_start_time: "11:00",
      scheduled_end_time: "12:00",
    },
    {
      schedule_id: 3,
      scheduled_topic: "Topic Name",
      scheduled_date: "7",
      scheduled_start_time: "09:10",
      scheduled_end_time: "15:10",
    },
    {
      schedule_id: 5,
      scheduled_topic: "mmmm Name",
      scheduled_date: "12",
      scheduled_start_time: "09:10",
      scheduled_end_time: "15:10",
    },
  ];

  useEffect(() => {
    clearData();
    setData();
  }, [weekCount]);

  const clearData = () => {
    for (let i = 0; i < ids.length; i++) {
      let x = document.getElementById(ids[i])
     // console.log(x);
      if(x)
        x.innerHTML = "";
    }
  };

  const setData = () => {
    let colId = [];
    for (let i = 0; i < data.length; i++) {
      colId.push(data[i]["scheduled_date"]);
    }
    for (let i = 0; i < colId.length; i++) {
      let x = document.getElementById(colId[i]);
      if (x) x.innerHTML = data[i]["scheduled_topic"];
    }
  };
  const handleAllHr = () => {
    const hrs = [];
    for (let i = 0; i < 24; i++) {
      hrs.push(
        <div
          className="calender-row"
          style={{ marginTop: `${i * 42}px` }}
        ></div>
      );
    }
    return hrs;
  };

  const [startingTime, setStartingTime] = useState(0);
  const [endingTime, setEndingTime] = useState(0);

  const timeBasedOnClientY = (clientY) => {
    let ranges = [
      70, 112, 154, 196, 238, 280, 322, 364, 406, 448, 490, 532, 574, 616, 658,
      700, 742, 784, 826, 868, 910, 952, 994, 1036, 1078,
    ];
    for (let i = 0; i < ranges.length; i++) {
      if (clientY <= ranges[i]) {
        console.log(i);
        setStartingTime(i);
        break;
      }
    }
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleDayOne = (event) => {
    timeBasedOnClientY(event.pageY);
    setModalIsOpen(true);
  };

  const handleDayTwo = (event) => {
    timeBasedOnClientY(event.pageY);
    setModalIsOpen(true);
  };

  const handleDayThree = (event) => {
    timeBasedOnClientY(event.pageY);
    setModalIsOpen(true);
  };

  const handleDayFour = (event) => {
    timeBasedOnClientY(event.pageY);
    setModalIsOpen(true);
  };

  const handleDayFive = (event) => {
    timeBasedOnClientY(event.pageY);
    setModalIsOpen(true);
  };

  const handleDaySix = (event) => {
    timeBasedOnClientY(event.pageY);
    setModalIsOpen(true);
  };

  const handleDaySeven = (event) => {
    timeBasedOnClientY(event.pageY);
    setModalIsOpen(true);
  };

  const generatePrevId = () => {
    let count = weekCount - 1;
    if (count >= 1) {
      let newIds = ids;
      for (let i = 0; i < newIds.length; i++) {
        newIds[i] -= 7;
      }
      setWeekCount(count);
      setIds(newIds);
    }
  };
  const generateNextId = () => {
    let count = weekCount + 1;
    if (count <= 4) {
      let newIds = ids;
      for (let i = 0; i < newIds.length; i++) {
        newIds[i] += 7;
      }
      setWeekCount(count);
      setIds(newIds);
    }
  };

  return (
    <div className="calender-parent">
      <button id="previous" onClick={generatePrevId}>
        Previous Week
      </button>

      <button id="next" onClick={generateNextId}>
        Next Week
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
        shouldCloseOnOverlayClick={true}
      >
        <AddTopicComponent startingTime={startingTime}></AddTopicComponent>
      </Modal>
      <div className="calender-heading">
        <div className="calender-header">1</div>
        <div className="calender-header">2</div>
        <div className="calender-header">3</div>
        <div className="calender-header">4</div>
        <div className="calender-header">5</div>
        <div className="calender-header">6</div>
        <div className="calender-header">7</div>
      </div>

      {handleAllHr()}

      <div className="calender-columns">
        <div
          className="calender-column"
          id={ids[0]}
          onClick={handleDayOne}
        ></div>
        <div
          className="calender-column"
          id={ids[1]}
          onClick={handleDayTwo}
        ></div>
        <div
          className="calender-column"
          id={ids[2]}
          onClick={handleDayThree}
        ></div>
        <div
          className="calender-column"
          id={ids[3]}
          onClick={handleDayFour}
        ></div>
        <div
          className="calender-column"
          id={ids[4]}
          onClick={handleDayFive}
        ></div>
        <div
          className="calender-column"
          id={ids[5]}
          onClick={handleDaySix}
        ></div>
        <div
          className="calender-column"
          id={ids[6]}
          onClick={handleDaySeven}
        ></div>
      </div>
    </div>
  );
}

export default WeekComponent;
