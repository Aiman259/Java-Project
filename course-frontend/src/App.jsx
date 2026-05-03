import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    // Calling your Spring Boot API (Port 8082)
    axios.get('http://localhost:8082/api/instructors')
      .then(response => {
        setInstructors(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Instructor List</h1>
      <hr />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {instructors.map((name, index) => (
          <li key={index} style={{ 
            margin: '10px', 
            padding: '10px', 
            border: '1px solid #ddd',
            borderRadius: '5px' 
          }}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App