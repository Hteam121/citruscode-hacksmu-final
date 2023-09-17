import React from 'react';
import Navbar from '../components/navbar';
import mallsvg from '../img/mall.svg';
import "./mall.css";
import AnomalyDetectionMall from '../components/anomalyDetectionMall';
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

export default function mallAD() {
  return (
    <div>
      <Navbar />
      <div className="mall">
        <Link to="/mall" style={styles.backButton}>Back</Link>
        <img src={mallsvg} alt="mall.svg" />
        <AnomalyDetectionMall />
      </div>
    </div>
  );
}
