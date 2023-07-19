import { motion } from "framer-motion";
import {
  Air,
  VisibilityOutlined,
  WaterDropOutlined,
  Speed,
  Thermostat,
} from "@mui/icons-material";
const InfoCurrent = ({ result }) => {
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
    const weather = WeatherTypes.find(
      (weather) => weather.type === weatherType
    );
    if (weather) {
      return weather.img;
    }
    return ""; // Return a default icon or handle missing types as desired
  };

  return result && Object.keys(result).length > 0 && result.cod === 200 ? (
    <div className="w-2/3">
      <div className="p-5 flex justify-between">
        <div>
          <p className="text-4xl font-bold">
            {result.name}, {result.sys.country}
          </p>
          <p className="text-sm text-[#818790]">
            {result.weather[0].description.toUpperCase()}
          </p>
          <p className="text-sm text-[#818790]">
            {result.weather[0].main.toUpperCase()}
          </p>
          <motion.p initial={{scale: 0}} animate={{scale: 1}} className="mt-20 text-5xl">{result.main.temp} °C</motion.p>
        </div>
        <motion.img
          src={getWeatherIcon(result.weather[0].main)}
          alt=""
          className="w-[200px] h-[200px] mr-[100px]"
          initial={{scale: 0}}
          animate={{scale: 1}}
          whileHover={{scale: 1.05}}
          whileTap={{scale: 2}}
        />
      </div>
      <div className="flex mt-5">
        <motion.div initial={{scale: 0}} animate={{scale: 1}} className="bg-[#202b3b] p-5 rounded-2xl w-1/2">
          <p className="text-[#616975] font-semibold flex items-center">
            <Thermostat className="mr-1" />
            Temp Min/Max
          </p>
          <p className="text-2xl font-semibold">
            {Math.round(result.main.temp_min)} °C/{" "}
            {Math.round(result.main.temp_max)} °C
          </p>
        </motion.div>
        <motion.div initial={{scale: 0}} animate={{scale: 1}} whileTap={{opacity: 0}} className="bg-[#202b3b] p-5 rounded-2xl w-1/2 ml-5">
          <p className="text-[#616975] font-semibold flex items-center">
            <Air className="mr-1" /> Wind
          </p>
          <p className="text-3xl font-semibold">{result.wind.speed} m/s</p>
        </motion.div>
      </div>
      <div className="flex mt-5">
        <motion.div initial={{scale: 0}} animate={{scale: 1}} className="bg-[#202b3b] p-5 rounded-2xl w-1/2">
          <p className="text-[#616975] font-semibold flex items-center">
            <WaterDropOutlined className="mr-1" /> Humidity
          </p>
          <p className="text-3xl font-semibold">{result.main.humidity} %</p>
        </motion.div>
        <motion.div initial={{scale: 0}} animate={{scale: 1}} className="bg-[#202b3b] p-5 rounded-2xl w-1/2 ml-5">
          <p className="text-[#616975] font-semibold flex items-center">
            <VisibilityOutlined className="mr-1" /> Visibility
          </p>
          <p className="text-3xl font-semibold">
            {result.visibility / 1000} Km
          </p>
        </motion.div>
      </div>
      <div className="flex mt-5">
        <motion.div initial={{scale: 0}} animate={{scale: 1}} className="bg-[#202b3b] p-5 rounded-2xl w-1/2">
          <p className="text-[#616975] font-semibold flex items-center">
            <Thermostat className="mr-1" />
            Feels Like
          </p>
          <p className="text-3xl font-semibold">{result.main.feels_like} °C</p>
        </motion.div>
        <motion.div initial={{scale: 0}} animate={{scale: 1}} className="bg-[#202b3b] p-5 rounded-2xl w-1/2 ml-5">
          <p className="text-[#616975] font-semibold flex items-center">
            <Speed className="mr-1" /> Pressure
          </p>
          <p className="text-3xl font-semibold">{result.main.pressure} hPa</p>
        </motion.div>
      </div>
    </div>
  ) : (
    //Error Handling
    <div className="w-2/3">
      <div className="p-5 flex justify-between">
        <div>
          <p className="text-4xl font-bold">Please put correct city name</p>
          <p className="text-sm text-[#818790]">chance of rain: 0%</p>
          <p className="mt-20 text-5xl"></p>
        </div>
      </div>
      <div className="flex mt-5">
        <div className="bg-[#202b3b] p-5 rounded-2xl w-1/2">
          <p className="text-[#616975] font-semibold">Temp Min/Max</p>
          <p className="text-2xl font-semibold"></p>
        </div>
        <div className="bg-[#202b3b] p-5 rounded-2xl w-1/2 ml-5">
          <p className="text-[#616975] font-semibold">Wind</p>
          <p className="text-3xl font-semibold"></p>
        </div>
      </div>
      <div className="flex mt-5">
        <div className="bg-[#202b3b] p-5 rounded-2xl w-1/2">
          <p className="text-[#616975] font-semibold">Humidity</p>
          <p className="text-3xl font-semibold"></p>
        </div>
        <div className="bg-[#202b3b] p-5 rounded-2xl w-1/2 ml-5">
          <p className="text-[#616975] font-semibold">Visibility</p>
          <p className="text-3xl font-semibold"></p>
        </div>
      </div>
      <div className="flex mt-5">
        <div className="bg-[#202b3b] p-5 rounded-2xl w-1/2">
          <p className="text-[#616975] font-semibold">Feels Like</p>
          <p className="text-3xl font-semibold"></p>
        </div>
        <div className="bg-[#202b3b] p-5 rounded-2xl w-1/2 ml-5">
          <p className="text-[#616975] font-semibold">Pressure</p>
          <p className="text-3xl font-semibold"></p>
        </div>
      </div>
    </div>
  );
};

export default InfoCurrent;
