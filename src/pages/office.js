import React from 'react'
import Navbar from '../components/navbar'
import officesvg from "../img/office.svg"
import "./office.css"
import CSVReader from '../components/csvreader'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


export default function office() {
  return (
    <div>
        <Navbar/>
        <div className='office'>
        <img src={officesvg} alt="office.svg" />
        <Link to="/office/anomalydm">Anomaly Detection</Link>
        <CSVReader csvPath="/hospital.csv" />
        </div>
    </div>
  )
}
