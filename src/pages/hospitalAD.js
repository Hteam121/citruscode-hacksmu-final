import React from 'react';
import Navbar from '../components/navbar';
import hospitalsvg from "../img/hospital.svg";
import "./hospital.css";
import AnomalyDetectionHospital from '../components/anomalyDetectionHospital';
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

export default function hospitalAD() {
  return (
    <div>
      <Navbar />
      <div className="hospital">
        <Link to="/hospital" style={styles.backButton}>Back</Link>
        <img src={hospitalsvg} alt="hospital.svg" />
        <AnomalyDetectionHospital />
      </div>
    </div>
  );
}
