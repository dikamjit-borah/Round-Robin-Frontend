import React from "react";
import "./AddTopicComponent.scss";

function AddTopicComponent({startingTime}) {
  const validateAndConfirm = (event) => {

    let schedule_details = {};

    for (let i = 0; i < event.target.length; i++) {
      schedule_details[event.target[i].id] = event.target[i].value;
    }
    alert(`${schedule_details['scheduled_topic']} confirmed for ${schedule_details['scheduled_date']} at ${schedule_details['scheduled_time']}`)
  };
  return (
    <div className="addTopic-parent">
      yoyoyo {startingTime}
      <form
        onSubmit={(e) => {
          validateAndConfirm(e);
        }}
      >
        
        <label for="scheduled_topic">Topic Name:</label>
        <input type="topic" id="scheduled_topic" />
        <label for="scheduled_date">Select a Date:</label>
        <input type="date" id="scheduled_date" />
        <label for="scheduled_time">Select starting time:</label>
        <input type="time" id="scheduled_time" />
        <label for="scheduled_time">Select ending time:</label>
        <input type="time" id="scheduled_time" />
        <button type="submit">Confirm Schedule</button>
      </form>
     
    </div>
  );
}

export default AddTopicComponent;
