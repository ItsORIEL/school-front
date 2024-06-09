import React, { useState } from "react";
import "./ClassesForm.css";

interface ClassFormData {
  classId: string;
  name: string;
  maxSeats: string;
}

const ClassesForm: React.FC = () => {
  const [formData, setFormData] = useState<ClassFormData>({
    classId: "",
    name: "",
    maxSeats: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Class Form Data Submitted: ", formData);
  };

  return (
    <div className="class-form-container">
      <div className="class-form-header">
        <h1>Class Form</h1>
      </div>
      <form className="class-form" onSubmit={handleSubmit}>
        <div className="class-form-group">
          <input
            type="text"
            name="classId"
            value={formData.classId}
            onChange={handleChange}
            placeholder="Class ID"
            className="class-form-input"
          />
        </div>
        <div className="class-form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="class-form-input"
          />
        </div>
        <div className="class-form-group">
          <input
            type="text"
            name="maxSeats"
            value={formData.maxSeats}
            onChange={handleChange}
            placeholder="Max Seats"
            className="class-form-input"
          />
        </div>
        <button type="submit" className="class-form-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ClassesForm;
