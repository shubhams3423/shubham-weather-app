import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const WeatherFetcher = () => {
    fetch("https://api.weatherapi.com/v1/current.json?key=5bca6bccf3ce4c41a8f15340232807&q=pune")
        .then((response) => response.json())
        .then((data) => {
            toast.success("Success API")
            console.log(data)
        })
        .catch((error) => {
            toast.error("Failed API")
            console.log(error)
        })
    return (
        <div>
            <ToastContainer />
        </div>
    )
}

export default WeatherFetcher
