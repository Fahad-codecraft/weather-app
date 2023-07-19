import {motion} from "framer-motion"


const InfoForecast = ({ forecast, dayForecast }) => {
  const WeatherTypes = [
    {
      type: "Clear",
      img: "https://cdn-icons-png.flaticon.com/512/6974/6974833.png",
    },
    {
      type: "Rain",
      img: "https://cdn-icons-png.flaticon.com/512/3351/3351979.png",
    },
    {
      type: "Snow",
      img: "https://cdn-icons-png.flaticon.com/512/642/642102.png",
    },
    {
      type: "Clouds",
      img: "https://cdn-icons-png.flaticon.com/512/414/414825.png",
    },
    {
      type: "Haze",
      img: "https://cdn-icons-png.flaticon.com/512/1197/1197102.png",
    },
    {
      type: "Smoke",
      img: "https://cdn-icons-png.flaticon.com/512/4380/4380458.png",
    },
    {
      type: "Mist",
      img: "https://cdn-icons-png.flaticon.com/512/4005/4005901.png",
    },
    {
      type: "Drizzle",
      img: "https://cdn-icons-png.flaticon.com/512/3076/3076129.png",
    },
  ];

  const getWeatherIcon = (weatherType) => {
    const weather = WeatherTypes.find((weather) => weather.type === weatherType);
    if (weather) {
      return weather.img;
    }
    return ""; // Return a default icon or handle missing types as desired
  };

  return (
    forecast && Object.keys(forecast).length > 0 && forecast.length === 3 && dayForecast && Object.keys(dayForecast).length > 0 ? (
      <div className='ml-10 w-1/3'>
        <div className='bg-[#202b3b] w-full rounded-3xl'>
          <div className='p-2'>
            <p className='m-3 text-[#8e949e]'>Today's Forecast</p>
            <div className='flex justify-around divide-x divide-[#3d5370]'>
              <div className='flex flex-col items-center justify-center'>
                <p className='mb-4'>{new Date(forecast[0].dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                <motion.img whileHover={{scale: 1.1}} initial={{scale: 0}} animate={{scale: 1}} whileTap={{scale: 2}} src={getWeatherIcon(forecast[0].weather[0].main)} alt="" className='w-[70px] h-[70px]' />
                <p className='mt-4 font-bold text-xl'>{Math.round(forecast[0].main.temp)}°C</p>
              </div>
              <div className='flex flex-col items-center justify-center pl-10'>
                <p className='mb-4'>{new Date(forecast[1].dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                <motion.img whileHover={{scale: 1.1}} initial={{scale: 0}} animate={{scale: 1}} whileTap={{scale: 2}} src={getWeatherIcon(forecast[1].weather[0].main)} alt="" className='w-[70px] h-[70px]' />
                <p className='mt-4 font-bold text-xl'>{Math.round(forecast[1].main.temp)}°C</p>
              </div>
              <div className='flex flex-col items-center justify-center pl-10'>
                <p className='mb-4'>{new Date(forecast[2].dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                <motion.img whileHover={{scale: 1.1}} initial={{scale: 0}} animate={{scale: 1}} whileTap={{scale: 2}} src={getWeatherIcon(forecast[2].weather[0].main)} alt="" className='w-[70px] h-[70px]' />
                <p className='mt-4 font-bold text-xl'>{Math.round(forecast[2].main.temp)}°C</p>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#202b3b] w-full rounded-2xl mt-10'>
          <div className='p-2'>
            <p className='m-2 text-[#8e949e]'>5-Day Forecast</p>
            <div className="divide-y-2 divide-[#3d5370]">
              <div className='flex flex-row justify-evenly justify-items-center p-2 place-items-center '>
                <p className='mb-4'>{new Date(dayForecast[1].dt * 1000).toDateString()}</p>
                <motion.img whileHover={{scale: 1.1}} initial={{scale: 0}} animate={{scale: 1}} whileTap={{scale: 2}} src={getWeatherIcon(dayForecast[1].weather[0].main)} alt="" className='w-[50px] h-[50px]' />
                <p><span className='font-bold'>{Math.round(dayForecast[1].main.temp_max)}</span>/ {Math.round(dayForecast[1].main.temp_min)}</p>
              </div>
              <div className='flex flex-row justify-evenly justify-items-center  p-2 place-items-center'>
                <p className='mb-4'>{new Date(dayForecast[9].dt * 1000).toDateString()}</p>
                <motion.img whileHover={{scale: 1.1}} initial={{scale: 0}} animate={{scale: 1}} whileTap={{scale: 2}} src={getWeatherIcon(dayForecast[9].weather[0].main)} alt="" className='w-[50px] h-[50px]' />
                <p><span className='font-bold'>{Math.round(dayForecast[9].main.temp_max)}</span>/ {Math.round(dayForecast[9].main.temp_min)}</p>
              </div>
              <div className='flex flex-row justify-evenly justify-items-center  p-2 place-items-center'>
                <p className='mb-4'>{new Date(dayForecast[17].dt * 1000).toDateString()}</p>
                <motion.img whileHover={{scale: 1.1}} initial={{scale: 0}} animate={{scale: 1}} whileTap={{scale: 2}} src={getWeatherIcon(dayForecast[17].weather[0].main)} alt="" className='w-[50px] h-[50px]' />
                <p><span className='font-bold'>{Math.round(dayForecast[17].main.temp_max)}</span>/ {Math.round(dayForecast[17].main.temp_min)}</p>
              </div>
              <div className='flex flex-row justify-evenly justify-items-center  p-2 place-items-center'>
                <p className='mb-4'>{new Date(dayForecast[25].dt * 1000).toDateString()}</p>
                <motion.img whileHover={{scale: 1.1}} initial={{scale: 0}} animate={{scale: 1}} whileTap={{scale: 2}} src={getWeatherIcon(dayForecast[25].weather[0].main)} alt="" className='w-[50px] h-[50px]' />
                <p><span className='font-bold'>{Math.round(dayForecast[25].main.temp_max)}</span>/ {Math.round(dayForecast[25].main.temp_min)}</p>
              </div>
              <div className='flex flex-row justify-evenly justify-items-center  p-2 place-items-center'>
                <p className='mb-4'>{new Date(dayForecast[33].dt * 1000).toDateString()}</p>
                <motion.img whileHover={{scale: 1.1}} initial={{scale: 0}} animate={{scale: 1}} whileTap={{scale: 2}} src={getWeatherIcon(dayForecast[33].weather[0].main)} alt="" className='w-[50px] h-[50px]' />
                <p><span className='font-bold'>{Math.round(dayForecast[33].main.temp_max)}</span>/ {Math.round(dayForecast[33].main.temp_min)}</p>
              </div>
            </div>
          </div>
          <div>

          </div>
        </div>
      </div>
    ) : (
      <div className='ml-10 w-1/3'>
        <div className='bg-[#202b3b] w-full rounded-3xl'>
          <div className='p-2'>
            <p className='m-3'>Today's Forecast</p>
          </div>
        </div>
        <div className='bg-[#202b3b] w-full rounded-2xl mt-5 p-2'>
          5-Day Forecast
        </div>
      </div>
    )
  );
};

export default InfoForecast;
