import React from 'react'
import { BsFillDropletFill } from "react-icons/bs";
import { PiWindBold } from "react-icons/pi";
const WeatherApp = () => {
    return (
        <div className='main-container d-flex'>
            <div className="rounded  d-flex flex-column main-app"  >
                <div className='img'>
                    <img src="https://previews.123rf.com/images/martialred/martialred1702/martialred170200035/71710170-cloudy-or-cloud-partly-blocking-the-sun-flat-color-vector-icon-for-weather-apps-and-websites.jpg" alt="weather Img" className='img-fluid' />
                </div>
                <div>
                    <h1 className='fw-bold'>28&deg;C</h1>
                    <p className='fw-medium text-center fs-4'>Scattered Clouds</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className="d-flex align-items-center ">
                        <div className='me-2'>
                            <span className="monsoon" >
                                < BsFillDropletFill />
                            </span>
                        </div>
                        <div>
                            <p className='m-0 text-start'>51%</p>
                            <span>Humidity</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className='me-2'>
                            <span className='wind'>
                                < PiWindBold />
                            </span>
                        </div>
                        <div>
                            <p className='m-0 text-start'>4.63 Km/H</p>
                            <span>Wind Speed</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default WeatherApp
