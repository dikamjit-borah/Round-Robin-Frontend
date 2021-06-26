import React from "react";
import "./AddTopicComponent.scss";
import BASE_URL from "../../utilities/Constants";
import axios from "axios";

function AddTopicComponent({
  teacher_id,
  teacher_name,
  setAddedSchedule,
  startingTime,
  date,
}) {
  function add0ToDate() {
    if (!!!date) return "";
    let newDate;
    let yymmdd = date.split("-");
    let dd = date.split("-")[2];

    if (parseInt(dd) <= 9) {
      dd = "0" + dd;
    }

    newDate = yymmdd[0] + "-" + yymmdd[1] + "-" + dd;
    return newDate;
  }

  function timeIndexToHrs(timeIndex) {
    let hrs;
    if (parseInt(timeIndex) <= 9) {
      hrs = "0" + timeIndex + ":00";
    } else {
      hrs = timeIndex + ":00";
    }
    console.log(hrs);
    return hrs;
  }

  const validateAndConfirm = (event) => {
    let schedule_details = {};

    for (let i = 0; i < event.target.length; i++) {
      schedule_details[event.target[i].id] = event.target[i].value;
    }

    callAddScheduleApi(
      schedule_details["scheduled_topic"],
      schedule_details["scheduled_date"],
      schedule_details["scheduled_start_time"],
      schedule_details["scheduled_end_time"]
    );
    // alert(`${schedule_details['scheduled_topic']} confirmed for ${schedule_details['scheduled_date']} from ${schedule_details['scheduled_start_time']} to ${schedule_details['scheduled_end_time']}`)
  };

  const callAddScheduleApi = (
    scheduled_topic,
    scheduled_date,
    scheduled_start_time,
    scheduled_end_time
  ) => {
    console.log(
      scheduled_topic,
      scheduled_date,
      scheduled_start_time,
      scheduled_end_time
    );
    axios({
      method: "post",
      url: `${BASE_URL}/api/add_schedule`,
      data: {
        teacher_id,
        teacher_name,
        scheduled_topic,
        scheduled_date,
        scheduled_start_time,
        scheduled_end_time,
      },
    }).then(function (response) {
      console.log("isvalid start", response.data);
      if (!response.data["isValidStart"]) {
        alert("Time overlap. Please adjust start and end time");
      }
      setAddedSchedule(true);
    });
  };
  return (
    <div className="addTopic-parent">
      <div className="addTopic-child">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            validateAndConfirm(e);
          }}
        >
          <p>
            <label for="scheduled_topic">Topic Name</label>
          </p>
          <p>
            <input type="text" id="scheduled_topic" />
          </p>

          <p>
            <label for="scheduled_date">Select a Date</label>
          </p>
          <p>
            <input
              type="date"
              defaultValue={add0ToDate()}
              id="scheduled_date"
            />
          </p>

          <p>
            <label for="scheduled_start_time">Select starting time:</label>
          </p>
          <p>
            <input
              type="time"
              id="scheduled_start_time"
              defaultValue={timeIndexToHrs(startingTime)}
            />
          </p>

          <p>
            {" "}
            <label for="scheduled_end_time">Select ending time:</label>
          </p>
          <p>
            <input
              type="time"
              id="scheduled_end_time"
              defaultValue={timeIndexToHrs(parseInt(startingTime) + 1)}
            />
          </p>
          <button className="submit-btn" type="submit">
            Confirm Schedule
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTopicComponent;
