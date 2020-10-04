import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header/Header";
import RegistrationForm from "../Components/RegistrationForm/RegistrationForm";

const Register = () => {
  let [task, setTask] = useState({});
  const { taskID } = useParams();
  useEffect(() => {
    fetch("http://localhost:5000/task" + taskID)
      .then((res) => res.json())
      .then((result) => setTask(result));
  }, [taskID]);
  console.log(task);
  return (
    <div>
      <Header />
      <div className="text-center w-25">
        <img src="https://i.ibb.co/zR4wpY3/Group-1329.png" alt="logo" />
      </div>

      <div className="d-flex justify-content-center">
        <RegistrationForm></RegistrationForm>
      </div>
    </div>
  );
};

export default Register;
