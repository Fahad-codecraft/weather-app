import React from 'react'
import Form from '../components/Form'
import Information from '../components/Information'
import { useState } from 'react'

const Dashboard = () => {
  const [result, setResult] = useState({})
  const [forecast, setForecast] = useState({})
  const [dayForecast, setDayForecast] = useState({})
  return (
    <div className='bg-[#070f1d] rounded-md p-3'>
      <Form setResult={setResult} setForecast={setForecast} setDayForecast={setDayForecast}/>
      <Information result={result} forecast={forecast} dayForecast={dayForecast}/>
    </div>
  )
}

export default Dashboard