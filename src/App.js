import { React, useState, useEffect } from "react";
import "./App.scss";
import Modal from "react-modal";
import AddTopicComponent from "./components/AddTopicComponent/AddTopicComponent";
import WeekComponent from "./components/WeekComponent/WeekComponent";
import NavigationBarComponent from "./components/NavigationBarComponent/NavigationBarComponent";

import axios from "axios";
import BASE_URL from "./utilities/Constants";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [currentTeacher, setCurrentTeacher] = useState();
  const [allTeachers, setAllTeachers] = useState([]);

  const [addSchedule,setAddedSchedule] = useState(false);

  useEffect(() => {
    getAllTeachers();
  }, []);

  const getAllTeachers = () => {
    console.log("Fetching teachers");
    axios.get(`${BASE_URL}/api/all_teachers`, {}).then(function (response) {
      //setCurrentTeacher(response.data[0]["teacher_id"]);
      setAllTeachers(response.data);
      console.log("response data", response.data);
      //setUI(response.data)
    });
  };

  const openModal = () => {
    setModalIsOpen(true);
  };
  return (
    <div className="App">
      <NavigationBarComponent></NavigationBarComponent>
      <div className="teachers-div">
        <div className="teachers-child">
          Select Teacher:
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
        <div className="teachers-child">
          <label for="teacher_name">Teacher Name:</label>
          <input type="text" id="teacher_name" />
          <button>Add Teacher</button>
        </div>
      </div>

      <button onClick={openModal}>Add Topic</button>
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
        <WeekComponent teacher_id={currentTeacher}  addSchedule={addSchedule} ></WeekComponent>
      </div>
    </div>
  );
}

export default App;
