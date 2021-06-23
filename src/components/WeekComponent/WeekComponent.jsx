import { React, useState, useEffect } from "react";
import "./WeekComponent.scss";
import Modal from "react-modal";
import AddTopicComponent from "../AddTopicComponent/AddTopicComponent";
import axios from 'axios';


function WeekComponent() {
  
  const BASE_URL = "http://localhost:8080"
  
  const [ids, setIds] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [weekCount, setWeekCount] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  let data = [
    {
      schedule_id: 1,
      scheduled_topic: "Marriage",
      scheduled_date: "3",
      scheduled_start_time: "12",
      scheduled_end_time: "14",
    },
    {
      schedule_id: 2,
      scheduled_topic: "anniversaru",
      scheduled_date: "4",
      scheduled_start_time: "11",
      scheduled_end_time: "12",
    },
    {
      schedule_id: 3,
      scheduled_topic: "Reception",
      scheduled_date: "7",
      scheduled_start_time: "9",
      scheduled_end_time: "15",
    },
    {
      schedule_id: 5,
      scheduled_topic: "Pokor",
      scheduled_date: "12",
      scheduled_start_time: "12",
      scheduled_end_time: "15",
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

    axios.get(`${BASE_URL}/api/week_view`, {
      params: {
        teacher_id:"1624461442478",
        week_start_date: '2021-02-01',
        week_end_date: '2021-02-07'
      }
    })
    .then(function (response) {
      console.log(response);
    })

    
    let colId = [];
    let marginTop = [];
    for (let i = 0; i < data.length; i++) {
      colId.push(data[i]["scheduled_date"]);
      marginTop.push(parseInt(data[i]["scheduled_start_time"] - 1)*42)
    }

    console.log(marginTop);

    for(let i = 0; i<24; i++)
    {
      let x = document.getElementById("time-column");
      let y = `<div style="margin-top:${(marginTop[i])}px">${i+1}`
    }

    let timeColumnId = document.getElementById("time-column")
    let timeColumnContent = ""

    let j = 0
    for(let i = 0; i<24; i++)
    {
      
       timeColumnContent += `<p style="position:absolute;margin-top:${(j)}px">${i+1}</p>`
       j+=42
     
    }



    if (timeColumnId) timeColumnId.innerHTML = timeColumnContent ;


    for (let i = 0; i < colId.length; i++) {
      let x = document.getElementById(colId[i]);
     
      let duration = parseInt(data[i]["scheduled_end_time"]) - parseInt(data[i]["scheduled_start_time"])
      console.log(duration);
      let y = `<div style="margin-top:${marginTop[i]}px; background-color:#bbdefb; height:${duration*42}px">${data[i]["scheduled_topic"]}</div>`
      if (x) x.innerHTML = y ;
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
      <div className="calender-header">Time</div>
        <div className="calender-header">{ids[0]}</div>
        <div className="calender-header">{ids[1]}</div>
        <div className="calender-header">{ids[2]}</div>
        <div className="calender-header">{ids[3]}</div>
        <div className="calender-header">{ids[4]}</div>
        <div className="calender-header">{ids[5]}</div>
        <div className="calender-header">{ids[6]}</div>
      </div>

      {handleAllHr()}

      <div className="calender-columns">

        
      <div
          className="calender-column"
          id="time-column"
         
        ></div>
        
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
