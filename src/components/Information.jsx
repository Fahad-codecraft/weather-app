import React from 'react'
import InfoCurrent from './InfoCurrent'
import InfoForecast from './InfoForecast'

const Information = ({ result, forecast, dayForecast }) => {
  return (
    <div className='flex '>
      <InfoCurrent result={result} />
      <InfoForecast forecast={forecast} dayForecast={dayForecast}/>
    </div>
  )
}

export default Information