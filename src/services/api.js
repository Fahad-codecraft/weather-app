import axios from "axios"

const API_KEY = process.env.API_KEY
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather"
const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast"

export const getWeather = async (city) => {
    try {
        let response = await axios.get(`${WEATHER_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        return (response.data)
    } catch (error) {
        console.log('Error while calling the api ', error.message);
        return error.response;
    }
}

export const getForecast = async (city) => {
    try {
        let response = await axios.get(`${FORECAST_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        const forecastData = response.data.list;

        // Filter forecast data for the desired intervals
        const now = new Date().getTime() / 1000; // Current time in seconds
        const filteredForecast = forecastData.filter(
            (item) =>
                item.dt >= now && // Filter data from now onwards
                item.dt <= now + 3 * 3 * 60 * 60 // Filter data for the next 3 instances (3 hours each)
        );

        return filteredForecast;
    } catch (error) {
        console.log('Error while calling the api ', error.message);
        return error.response;
    }
}

export const getDayForecast = async (city) => {
    try {
        let response = await axios.get(`${FORECAST_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        const forecastData = response.data.list;
        return forecastData
    } catch (error) {
        console.log('Error while calling the api ', error.message);
        return error.response;
    }
}