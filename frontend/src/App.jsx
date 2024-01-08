import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    axios.get('/api/students')
    .then((response) => {
      setStudent(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
  })

  return (
    <>
    <h1>SHAHID with full stack journey</h1>
    <h2>students list</h2>
    <p>{student.length}</p>
 
    {
      student.map((student, index) => (
        <div key={student.index}>
          <h4>{student.name}</h4>
          <h4>{student.age}</h4>
        </div>
      ))
    }


    </>
  )
}

export default App
