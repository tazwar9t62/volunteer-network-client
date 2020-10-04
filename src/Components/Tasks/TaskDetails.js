import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const TaskDetails = (props) => {
  let history = useHistory();
  let handleTaskReg = (taskID) => {
    history.push(`/register/${taskID}`);
  };

  let { name, img, _id } = props.task;
  let colors = [
    "DarkCyan",
    "purple",
    "orange",
    "red",
    "BlueViolet",
    "FireBrick",
    "Brown",
  ];
  return (
    <div
      onClick={() => handleTaskReg(_id)}
      className="col-xl-2 col-md-3 col-sm-12  my-3 mx-5"
      style={{ float: "left", cursor: "pointer" }}
    >
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body
          style={{ backgroundColor: colors[Math.floor(Math.random() * 7)] }}
        >
          <Card.Title className="text-white text-center">{name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TaskDetails;
