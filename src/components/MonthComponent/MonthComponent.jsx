import { React, useState, useEffect } from "react";
import "./MonthComponent.scss";
import axios from "axios";
import BASE_URL from "../../utilities/Constants";

function MonthComponent({ teacher_id }) {
  const [monthData, setMonthData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const getIncomingData = () => {
    axios
      .get(`${BASE_URL}/api/month_view`, {
        params: {
          teacher_id: `${teacher_id}`,
        },
      })
      .then(function (response) {
        console.log("month response", response.data);
        setMonthData([response.data]);
        setIsLoaded(true);
        //setUI(response.data);
      });
  };
  useEffect(() => {
    getIncomingData();
  }, [teacher_id]);

  let globalDay = 1;

  const calculateDay = (givenDate) => {
    let onlyDate = givenDate.split("T");
    let onlyDay = onlyDate[0].split("-");
    //console.log("given Date id ", onlyDay[2]);
    return parseInt(onlyDay[2]);
  };


  function makeColDivs() {
    let colDivArray = [];
    let noteCounter = 0;
    for (let i = 0; i < 7; i++) {
      {
        for(let i = 0 ; i<monthData[0].length; i++)
        {
          if( calculateDay(monthData[0][i]["scheduled_date"]) == globalDay)
            {
              noteCounter = monthData[0][i]["COUNT(scheduled_date)"]
            }
        }
        
      }
      colDivArray.push(<div className="col-item"> {globalDay} Feb, {noteCounter} tasks</div>);
      globalDay++;
    }
    return colDivArray;
  }
  function makeDivs() {
    let colArray = [];
    for (let i = 0; i < 4; i++) {
      colArray.push(<div className="col-div">{makeColDivs()}</div>);
    }
    return colArray;
  }

  if(isLoaded)
  return (
    <div className="month-parent">
      <p style={{ margin: "8px" }}>February, 2021</p>
      <div className="row-div">{makeDivs()}</div>
    </div>
  );
  else{
    return (
      <div>Loading</div>
    )
  }
}

export default MonthComponent;
