import { useEffect, useState } from "react";

function Weather() {
    const [data, setData] = useState(
        {
            city: "HN",
            temp: 30,
            humidity: 50,
            pressure: 1000
        }

    );

    const [forecast, setForecast] = useState([]);

    function getWeather() {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
        fetch(url).then(rs => rs.json())
            .then(function (dt) {
                const x = {
                    city: dt.name,
                    temp: dt.main.temp,
                    humidity: dt.main.humidity,
                    pressure: dt.main.pressure
                }
                setData(x);
            });
    }

    useEffect(function () {
        getWeather();
    }, []);

    return (
        <>
            <h2>{data.city}</h2>
            <h3>Temp: {data.temp}<sup>o</sup>C</h3>
            <h4>Humidity: {data.humidity}</h4>
            <h4>Pressure: {data.pressure}</h4>
        </>
    );
}
export default Weather;