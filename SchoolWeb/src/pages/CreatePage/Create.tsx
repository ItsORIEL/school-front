import React from "react";
import StudentForm from "../../components/FormComponents/StudentsForm/studentForm";
import ClassesForm from "../../components/FormComponents/ClassesForm/ClassessForm";

const Create: React.FC = () => {
  return (
    <div className="cards-container">
      <StudentForm />
      <ClassesForm />
    </div>
  );
};

export default Create;
