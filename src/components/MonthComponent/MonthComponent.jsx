import React from "react";
import "./MonthComponent.scss";

function MonthComponent() {
    let globalDay = 1;
  function makeColDivs() {
      let colDivArray = []
      for (let i = 0; i < 7; i++) {
        colDivArray.push(<div className="col-item"> {globalDay}</div>);
        globalDay++;
      }
      return colDivArray

  }
  function makeDivs() {
    let colArray = [];
    for (let i = 0; i < 4; i++) {
      colArray.push(<div className="col-div">{makeColDivs()}</div>);
    }
    return colArray;
  }

  return (
    <div className="month-parent">
        <p style={{margin:"8px"}}>February, 2021</p>
      <div className="row-div">{makeDivs()}</div>
    </div>
  );
}

export default MonthComponent;
