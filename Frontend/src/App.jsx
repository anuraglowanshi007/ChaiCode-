import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    axios.get('/api/jobs')
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error); // Log the error for debugging
      });
  }, []); // Pass an empty dependency array to ensure useEffect runs only once

  return (
    <>
      <h1>Chai or Fullstack</h1>
      <h2>JOBS : {jobs.length}</h2>
      {jobs.map((job, index) => (
        <div key={job.id}>
          <h3>{job.profession}</h3>
          <p>{job.salary}</p>
        </div>
      ))}
    </>
  )
}

export default App
