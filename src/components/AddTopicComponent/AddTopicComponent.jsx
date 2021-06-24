import React from "react";
import "./AddTopicComponent.scss";
import BASE_URL from "../../utilities/Constants"
import axios from "axios"

function AddTopicComponent({teacher_id, teacher_name}) {
  const validateAndConfirm = (event) => {

    let schedule_details = {};

    for (let i = 0; i < event.target.length; i++) {
      schedule_details[event.target[i].id] = event.target[i].value;
    }
    

    callAddScheduleApi(schedule_details['scheduled_topic'], schedule_details['scheduled_date'], schedule_details['scheduled_start_time'], schedule_details['scheduled_end_time'])
   // alert(`${schedule_details['scheduled_topic']} confirmed for ${schedule_details['scheduled_date']} from ${schedule_details['scheduled_start_time']} to ${schedule_details['scheduled_end_time']}`)
  };

  const callAddScheduleApi =(scheduled_topic, scheduled_date, scheduled_start_time, scheduled_end_time)=>{
    console.log(scheduled_topic, scheduled_date, scheduled_start_time, scheduled_end_time);
    axios({
      method: 'post',
      url: `${BASE_URL}/api/add_schedule`,
      data: {
        teacher_id,
        teacher_name,
        scheduled_topic,
        scheduled_date,
        scheduled_start_time,
        scheduled_end_time
      }
    }).then(function (response) {
       console.log(response);
      });
  }
  return (
    <div className="addTopic-parent">
      <form
        onSubmit={(e) => {
         // e.preventDefault()
          validateAndConfirm(e);
        }}
      >
        
        <label for="scheduled_topic">Topic Name:</label>
        <input type="text" id="scheduled_topic" />
        <label for="scheduled_date">Select a Date:</label>
        <input type="date" id="scheduled_date" />
        <label for="scheduled_start_time">Select starting time:</label>
        <input type="time" id="scheduled_start_time" />
        <label for="scheduled_end_time">Select ending time:</label>
        <input type="time" id="scheduled_end_time" />
        <button type="submit">Confirm Schedule</button>
      </form>
     
    </div>
  );
}

export default AddTopicComponent;
