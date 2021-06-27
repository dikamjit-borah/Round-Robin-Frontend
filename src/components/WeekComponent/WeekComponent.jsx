import { React, useState, useEffect } from "react";
import "./WeekComponent.scss";
import Modal from "react-modal";
import AddTopicComponent from "../AddTopicComponent/AddTopicComponent";
import axios from "axios";
import BASE_URL from "../../utilities/Constants";
function WeekComponent({ teacher_id, addSchedule, setAddedSchedule }) {
  const [currentWeekStart, setCurrentWeekStart] = useState("2021-02-01");
  const [currentWeekEnd, setCurrentWeekEnd] = useState("2021-02-07");

  const [ids, setIds] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [weekCount, setWeekCount] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [startingTime, setStartingTime] = useState(0);
  const [endingTime, setEndingTime] = useState(0);
  const [currentDayStart, setCurrentDayStart] = useState("");

  const getPrevWeek = () => {
    let weekStart = currentWeekStart;
    let res = weekStart.split("-");
    let nextDate = parseInt(res[2]) - 7;
    let nextWeekStart = `2021-02-${nextDate}`;

    let weekEnd = currentWeekEnd;
    res = weekEnd.split("-");
    nextDate = parseInt(res[2]) - 7;
    let nextWeekEnd = `2021-02-${nextDate}`;

    setCurrentWeekStart(nextWeekStart);
    setCurrentWeekEnd(nextWeekEnd);
  };

  const getNextWeek = () => {
    let weekStart = currentWeekStart;
    let res = weekStart.split("-");
    let nextDate = parseInt(res[2]) + 7;
    let nextWeekStart = `2021-02-${nextDate}`;

    let weekEnd = currentWeekEnd;
    res = weekEnd.split("-");
    nextDate = parseInt(res[2]) + 7;
    let nextWeekEnd = `2021-02-${nextDate}`;

    setCurrentWeekStart(nextWeekStart);
    setCurrentWeekEnd(nextWeekEnd);
  };

  useEffect(() => {
    clearData();
    setIncomingDataInUI();
    setAddedSchedule(false);
    console.log("hmne nhi dekha");
  }, [weekCount, teacher_id, addSchedule]);

  const clearData = () => {
    for (let i = 0; i < ids.length; i++) {
      let x = document.getElementById(ids[i]);
      // console.log(x);
      if (x) x.innerHTML = "";
    }
  };

  const setIncomingDataInUI = () => {
    setTimeColumn();
    axios
      .get(`${BASE_URL}/api/week_view`, {
        params: {
          teacher_id: `${teacher_id}`,
          week_start_date: `${currentWeekStart}`,
          week_end_date: `${currentWeekEnd}`,
        },
      })
      .then(function (response) {
        console.log("response data WEEK", response.data);
        setUI(response.data);
      });
  };

  const calculateColId = (givenDate) => {
    let onlyDate = givenDate.split("T");
    let onlyDay = onlyDate[0].split("-");
    console.log("given Date id ", onlyDay[2]);
    return parseInt(onlyDay[2]);
  };

  const calculateMarginTop = (givenStartTime) => {
    let hrs = givenStartTime.split(":")[0];
    console.log(hrs);
    return hrs;
  };

  const setTimeColumn = () => {
    let timeColumnId = document.getElementById("time-column");
    let timeColumnContent = "";

    let hrs = [
      "00:00",
      "01:00",
      "02:00",
      "03:00",
      "04:00",
      "05:00",
      "06:00",
      "07:00",
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
    ];

    let j = 0;
    for (let i = 0; i < 24; i++) {
      timeColumnContent += `<p style="width:100%; color:grey; font-weight:700; position:absolute;margin-top:${j}px">${hrs[i]} hrs</p>`;
      j += 42;
    }

    if (timeColumnId) timeColumnId.innerHTML = timeColumnContent;
  };

  const calculateHeight = (startTime, endTime) => {
    let startHrs = parseInt(startTime.split(":")[0]);
    let endHrs = parseInt(endTime.split(":")[0]);

    let height = endHrs - startHrs;
    console.log("height", height);
    return height;
  };

  const setUI = (data) => {
    let colId = [];
    let marginTop = [];
    //console.log("data",data);

    for (let i = 0; i < data.length; i++) {
      let id = calculateColId(data[i]["scheduled_date"]);
      colId.push(id);
      let top = calculateMarginTop(data[i]["scheduled_start_time"]);
      marginTop.push(top * 42);
    }



    for (let i = 0; i < colId.length; i++) {
      let x = document.getElementById(colId[i]);

      let duration = calculateHeight(
        data[i]["scheduled_start_time"],
        data[i]["scheduled_end_time"]
      );
      
      let y = `<div class="has-topic" style="margin-top:${
        marginTop[i]
      }px; height:${
        duration * 42
      }px"><p class="header">${
        data[i]["scheduled_topic"]
      }</p><p style="font-size:10px">${
        data[i]["scheduled_start_time"]
      } to ${data[i]["scheduled_end_time"]}</p></div>`;
      if (x) x.innerHTML =x.innerHTML + y;
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

  function calculateDivRanges(startingCoordinate, offset)
  {
    let ranges = []
    ranges.push(startingCoordinate)
      for(let i = 0; i<24; i++)
      {
          ranges.push(ranges[i] + offset)
      }
      console.log(ranges);
      return ranges
  }

  

  const timeBasedOnClientY = (clientY) => {
    let ranges = calculateDivRanges(165, 42)
    for (let i = 0; i < ranges.length; i++) {
      if (clientY <= ranges[i]) {
        
        setStartingTime(i-1);
        break;
      }
    }
  };

  const handleClick = (event) => {
    timeBasedOnClientY(event.pageY);
    setCurrentDayStart("2021-02-"+event.target.id)
    setModalIsOpen(true);
  };

  

  const generatePrevId = () => {
    let count = weekCount - 1;
    if (count >= 1) {
      getPrevWeek();
      let newIds = ids;
      for (let i = 0; i < newIds.length; i++) {
        newIds[i] = parseInt(newIds[i]) - 7;
      }
      setWeekCount(count);
      setIds(newIds);
    }
  };
  const generateNextId = () => {
    let count = weekCount + 1;
    if (count <= 4) {
      getNextWeek();

      let newIds = ids;
      for (let i = 0; i < newIds.length; i++) {
        newIds[i] = parseInt(newIds[i]) + 7;
      }

      setWeekCount(count);
      setIds(newIds);
    }
  };

  return (
    <div className="calender-parent">
      <div className="next-container">
        <button id="previous" className="next-btn" onClick={generatePrevId}>
          {"<"}
        </button>

        <button id="next" className="next-btn" onClick={generateNextId}>
          {">"}
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
        shouldCloseOnOverlayClick={true}
      >
        <AddTopicComponent 
          teacher_id={teacher_id} 
          teacher_name={teacher_id} 
          startingTime={startingTime} 
          date={currentDayStart} 
          setAddedSchedule={setAddedSchedule}
          startingTime={startingTime}></AddTopicComponent>
      </Modal>
      <div className="calender-heading">
        <div className="calender-header">⬇️Time - Day➡️</div>
        <div className="calender-header">{ids[0]} Feb</div>
        <div className="calender-header">{ids[1]} Feb</div>
        <div className="calender-header">{ids[2]} Feb</div>
        <div className="calender-header">{ids[3]} Feb</div>
        <div className="calender-header">{ids[4]} Feb</div>
        <div className="calender-header">{ids[5]} Feb</div>
        <div className="calender-header">{ids[6]} Feb</div>
      </div>

      {handleAllHr()}

      <div className="calender-columns" onClick={handleClick}>
        <div className="calender-column" id="time-column"></div>

        <div
          className="calender-column"
          id={ids[0]}
        ></div>
        <div
          className="calender-column"
          id={ids[1]}
        ></div>
        <div
          className="calender-column"
          id={ids[2]}
        ></div>
        <div
          className="calender-column"
          id={ids[3]}
        ></div>
        <div
          className="calender-column"
          id={ids[4]}
        ></div>
        <div
          className="calender-column"
          id={ids[5]}
        ></div>
        <div
          className="calender-column"
          id={ids[6]}
        ></div>
      </div>
    </div>
  );
}

export default WeekComponent;
