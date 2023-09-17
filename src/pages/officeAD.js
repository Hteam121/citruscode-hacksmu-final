import React from 'react';
import Navbar from '../components/navbar';
import officesvg from "../img/office.svg";
import "./office.css";
import AnomalyDetectionOffice from '../components/anomalyDetectionOffice';
import { Link } from 'react-router-dom';

const styles = {
  backButton: {
    position: 'absolute',
    top: '100px',
    left: '100px',
    backgroundColor: '#f1f1f1',
    padding: '10px',
    borderRadius: '5px',
    textDecoration: 'none',
    color: 'black',
  }
};

export default function officeAD() {
  return (
    <div>
      <Navbar />
      <div className="office">
        <Link to="/office" style={styles.backButton}>Back</Link>
        <img src={officesvg} alt="office.svg" />
        <AnomalyDetectionOffice />
      </div>
    </div>
  );
}
