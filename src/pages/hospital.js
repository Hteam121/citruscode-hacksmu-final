import React from 'react';
import Navbar from '../components/navbar';
import hospitalsvg from '../img/hospital.svg';
import "./hospital.css";
import CSVReader from '../components/csvreader';
import { Link } from 'react-router-dom';

const styles = {
  anomalyButton: {
    display: 'inline-block',
    backgroundColor: '#34513c',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '16px',
    margin: '10px 0',
  }
};

export default function hospital() {
  return (
    <div>
      <Navbar />
      <div className="hospital">
        <img src={hospitalsvg} alt="hospital.svg" />
        <Link to="/hospital/anomalydm" style={styles.anomalyButton}>Anomaly Detection</Link>
        <CSVReader csvPath="/hospital.csv" />
      </div>
    </div>
  );
}
