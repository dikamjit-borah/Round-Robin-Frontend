import { React, useState, useEffect } from "react";
import "./DayComponent.scss";
import Modal from "react-modal";
import axios from "axios";
import BASE_URL from "../../utilities/Constants";
import AddTopicComponent from "../AddTopicComponent/AddTopicComponent";

function DayComponent({ teacher_id, addSchedule ,setAddedSchedule }) {
  const [id, setId] = useState(1);
  const [dayCount, setDayCount] = useState(1);
  const [currentDayStart, setCurrentDayStart] = useState("2021-02-01");
  const [startingTime, setStartingTime] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    clearData();
    setIncomingDataInUI();
    console.log("Fetching dayview for ", teacher_id);
  }, [dayCount, teacher_id, addSchedule]);

  const clearData = () => {
    
      let x = document.getElementById(id);
      // console.log(x);
      if (x) x.innerHTML = "";
    
  };

  const setIncomingDataInUI = () => {
      setTimeColumn()
    axios
      .get(`${BASE_URL}/api/day_view`, {
        params: {
          teacher_id: `${teacher_id}`,
          the_date: `${currentDayStart}`,
        },
      })
      .then(function (response) {
        console.log("response data", response.data);
        
        setUI(response.data);
      });
  };

  const setTimeColumn =() =>{
        
    let timeColumnId = document.getElementById("time-column");
    let timeColumnContent = "";

    let hrs = ["00:00", "01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00",]

    let j = 0;
    for (let i = 0; i < 24; i++) {
      timeColumnContent += `<p style="width:100%; text-align:center;color:grey; font-weight:700; position:absolute;margin-top:${j}px">${hrs[i]} hrs</p>`;
      j += 42;
    }

    if (timeColumnId) timeColumnId.innerHTML = timeColumnContent;
  }

  const setUI = (data) => {
    console.log("Day-data", data);
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
      }px"><p style="header">${
        data[i]["scheduled_topic"]
      }</p><p style="font-size:10px">${
        data[i]["scheduled_start_time"]
      } to ${data[i]["scheduled_end_time"]}</p></div>`;
      if (x) x.innerHTML = x.innerHTML + y;
    }
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

  const calculateHeight = (startTime, endTime) =>{

    let startHrs = parseInt (startTime.split(":")[0])
    let endHrs = parseInt (endTime.split(":")[0])

    let height = endHrs - startHrs
    console.log("height", height);
    return height
}


  const getPrevDay = () => {
    let dayStart = currentDayStart;
    let res = dayStart.split("-");
    let nextDate = parseInt(res[2]) - 1;
    let nextDayStart = `2021-02-${nextDate}`;
    setCurrentDayStart(nextDayStart);
  };

  const getNextDay = () => {
    let dayStart = currentDayStart;
    let res = dayStart.split("-");
    let nextDate = parseInt(res[2]) + 1;
    let nextDayStart = `2021-02-${nextDate}`;
    setCurrentDayStart(nextDayStart);
  };

  const generatePrevId = () => {
    let count = dayCount - 1;
    if (count >= 1) {
      getPrevDay();
      let newId = id - 1;
      setDayCount(count);
      setId(newId);
    }
  };
  const generateNextId = () => {
    let count = dayCount + 1;
    if (count <= 28) {
      getNextDay();

      let newId = id + 1;
      setDayCount(count);
      setId(newId);
    }
  };

  const handleDayOne = (event) => {
    timeBasedOnClientY(event.pageY);
    setModalIsOpen(true);
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
        console.log("Clicked at time", i-1);
        setStartingTime(i-1);
        break;
      }
    }
  };

  const handleAllHr = () => {
    const hrs = [];
    for (let i = 0; i < 24; i++) {
      hrs.push(
        <div
          className="calender-row"
          style={{ marginTop: `${i * 42}px` }}
        >
        </div>
      );
    }
    return hrs;
  };

  return (
    <div className="day-parent">
      <div className="next-container">
      <button id="previous" className="next-btn" onClick={generatePrevId}>
          {"<"}
        </button>

        <button id="next" className="next-btn" onClick={generateNextId}>
          {">"}
        </button>
        </div>
      <Modal className = "create-schedule-modal"
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
        date={currentDayStart} setAddedSchedule={setAddedSchedule}></AddTopicComponent>
      </Modal>
      <div className="calender-heading">
        <div className="calender-header">⬇️Time - Day➡️</div>
        <div className="calender-header">{id} Feb</div>
      </div>

      {handleAllHr()}

      <div className="calender-columns">
        <div className="calender-column" id="time-column"></div>

        <div className="calender-column" id={id} onClick={handleDayOne}></div>
      </div>
    </div>
  );
}

export default DayComponent;
