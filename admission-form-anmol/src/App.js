import React, { useState } from 'react';
import './App.css';

function App() {
  const [studentData, setStudentData] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      name: name,
      age: age,
      course: course,
      address: address
    };
    setStudentData([...studentData, newStudent]);
    setName('');
    setAge('');
    setCourse('');
    setAddress('');
  };

  return (
    <div className="container">
      <h1 className="title">admission-form</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <label htmlFor="course">Course:</label>
        <input
          type="text"
          id="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>

      {studentData.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.course}</td>
                <td>{student.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
