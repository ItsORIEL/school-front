import React from "react";
import "./Card.css";

interface CardProps {
  classroomName: string;
  seatsLeft: number;
  totalSeats: number;
}

const Card: React.FC<CardProps> = ({
  classroomName,
  seatsLeft,
  totalSeats,
}) => {
  return (
    <div className="card">
      <div className="card-text">
        <div className="classroom-name">{classroomName}</div>
        <div className="seats-left">
          there are <span className="seats-left-bold">{seatsLeft}</span> seats
          left
        </div>
        <div className="grey-total-seats">out of {totalSeats}</div>
      </div>
      <div className="card-buttons">
        <div className="student-list-button">STUDENTS LIST</div>
        <div className="delete-icon">trash</div>
      </div>
    </div>
  );
};

export default Card;
