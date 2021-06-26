import { React, useState, useEffect } from "react";
import "./App.scss";
import Modal from "react-modal";
import AddTopicComponent from "./components/AddTopicComponent/AddTopicComponent";
import WeekComponent from "./components/WeekComponent/WeekComponent";
import NavigationBarComponent from "./components/NavigationBarComponent/NavigationBarComponent";

import axios from "axios";
import BASE_URL from "./utilities/Constants";
import DayComponent from "./components/DayComponent/DayComponent";
import MonthComponent from "./components/MonthComponent/MonthComponent";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentTeacher, setCurrentTeacher] = useState();
  const [allTeachers, setAllTeachers] = useState([]);
  const [addSchedule, setAddedSchedule] = useState(false);

  const [isWeekView, setIsWeekView] = useState(1);
  const [isTeacherCreated, setIsTeacherCreated] = useState(false)

  useEffect(() => {
    getAllTeachers();
  }, [isTeacherCreated]);

  const getAllTeachers = () => {
    console.log("Fetching teachers");
    axios.get(`${BASE_URL}/api/all_teachers`, {}).then(function (response) {
      setCurrentTeacher(response.data[0]["teacher_id"]);
      setAllTeachers(response.data);
      console.log("response data", response.data);
      //setUI(response.data)
    });
  };

  const createTeacher = (e) => {
    setIsTeacherCreated(false)
    e.preventDefault()
   // alert(`Teacher ${e.target[0].value} created` );
    console.log(e.target[0].value);
    axios({
      method: "post",
      url: `${BASE_URL}/api/add_teacher`,
      data: {
        teacher_name:e.target[0].value,
      },
    }).then(function (response) {
      setIsTeacherCreated(true)
      alert(`Teacher ${e.target[0].value} created` );
  
    });
  };

  const openModal = () => {
    setModalIsOpen(true);
  };
  return (

    <div className="App">
      <div className="top-section">
        <div className="teachers-div">
          <span>Select Teacher:</span>
          <select
            name="selectList"
            id="selectList"
            onChange={(event) => {
              setCurrentTeacher(event.target.value);
            }}
          >
            {allTeachers.map((teacher) => {
              return (
                <option value={teacher["teacher_id"]}>
                  {teacher["teacher_name"]}
                </option>
              );
            })}
          </select>
        </div>

        <div className="view-div">
          <span>Choose Your View:</span>
          <input
            type="radio"
            value="Week View"
            name="view"
            defaultChecked={true}
            onClick={() => {
              setIsWeekView(1);
            }}
          />{" "}
          Week View
          <input
            type="radio"
            value="Day View"
            name="view"
            onClick={() => {
              setIsWeekView(2);
            }}
          />{" "}
          Day View
          <input
            type="radio"
            value="Day View"
            name="view"
            onClick={() => {
              setIsWeekView(3);
            }}
          />{" "}
          Month View
        </div>

        <div className="view-div" style={{ marginLeft: "50px" }}>
          <form
            onSubmit={(e) => {
              createTeacher(e);
            }}
          >
            <input type="text" placeholder="Enter teacher name" />{" "}
            <button type="submit" className="submit-btn">
              Create Teacher
            </button>
          </form>
        </div>
      </div>
      <button className="add-schedule-btn" onClick={openModal}>
        +
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
        shouldCloseOnOverlayClick={true}
      >
        <AddTopicComponent
          teacher_id={currentTeacher}
          teacher_name={currentTeacher}
          setAddedSchedule={setAddedSchedule}
        ></AddTopicComponent>
      </Modal>
      <div className="AppChild app-right">
        {console.log("currentTeacher", currentTeacher)}

        {isWeekView == 1 ? (
          <WeekComponent
            teacher_id={currentTeacher}
            addSchedule={addSchedule}
            setAddedSchedule={setAddedSchedule}
          ></WeekComponent>
        ) : isWeekView == 2 ? (
          <DayComponent
            teacher_id={currentTeacher}
            addSchedule={addSchedule}
            setAddedSchedule={setAddedSchedule}
          ></DayComponent>
        ) : (
          <MonthComponent teacher_id={currentTeacher}></MonthComponent>
        )}
      </div>
    </div>
  );
}

export default App;
