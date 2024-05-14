import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jobs, setjobs] = useState([])

  useEffect(()=>{
    axios.get('/api/jobs')
    .then((response)=>{
      setjobs(response.data);
    })
    .catch((error)=>{
      console.log(error)
    })
  })

  return (
    
    <>
     <h1>Chai or Fullstack</h1>
     <h2>JOBS{jobs.length}</h2>
     {
      jobs.map((jobs,id)=>{
        <div key = {jobs.id}>
          <h3>{jobs.profession}</h3>
          <p>{jobs.salary}</p>
        </div>

      })
     }
    </>
  )
}

export default App
