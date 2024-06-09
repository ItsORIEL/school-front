// pages/Home.tsx
import React from "react";
import Card from "../../components/Card/Card";

const cardData = [
  { classroomName: "Classroom 1", seatsLeft: 2, totalSeats: 10 },
  { classroomName: "Classroom 2", seatsLeft: 5, totalSeats: 20 },
  { classroomName: "Classroom 3", seatsLeft: 1, totalSeats: 15 },
  { classroomName: "Classroom 4", seatsLeft: 3, totalSeats: 25 },
  { classroomName: "Classroom 5", seatsLeft: 0, totalSeats: 30 },
  { classroomName: "Classroom 6", seatsLeft: 6, totalSeats: 40 },
  { classroomName: "Classroom 7", seatsLeft: 4, totalSeats: 35 },
  { classroomName: "Classroom 8", seatsLeft: 2, totalSeats: 25 },
  { classroomName: "Classroom 9", seatsLeft: 7, totalSeats: 50 },
];

const Classes: React.FC = () => {
  return (
    <div className="cards-container">
      {cardData.map((data, index) => (
        <Card
          key={index}
          classroomName={data.classroomName}
          seatsLeft={data.seatsLeft}
          totalSeats={data.totalSeats}
        />
      ))}
    </div>
  );
};

export default Classes;
