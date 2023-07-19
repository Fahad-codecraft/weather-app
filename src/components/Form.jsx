import React, { useState, useEffect } from "react";
import { getWeather } from "../services/api";
import { getForecast } from "../services/api";
import { getDayForecast } from "../services/api";
import { motion } from "framer-motion";

const Form = ({ setResult, setForecast, setDayForecast }) => {
  const [data, setData] = useState({ city: "London" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const getWeatherInfo = async () => {
    let response = await getWeather(data.city);
    setResult(response);
    console.log(response);
  };

  const getForecastInfo = async () => {
    let forecastResponse = await getForecast(data.city)
    setForecast(forecastResponse)
    console.log(forecastResponse)
  }

  const getDayForecastInfo = async () => {
    let forecastDayResponse = await getDayForecast(data.city)
    setDayForecast(forecastDayResponse)
    console.log(forecastDayResponse)
  }

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      await getWeatherInfo();
      await getForecastInfo();  
      await getDayForecastInfo()
    }
  };

  useEffect(() => {
    getWeatherInfo();
    getForecastInfo()
    getDayForecastInfo()
  }, []);

  return (
    <motion.div className="mr-8" whileHover={{scale: 1.005}}>
      <input
        type="text"
        className="bg-[#202b3b] outline-none rounded-md p-2 mt-1 w-2/3"
        placeholder="Search For City"
        name="city"
        value={data.city}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
    </motion.div>
  );
};

export default Form;
