import React from 'react';
import Navbar from '../components/navbar';
import mallsvg from '../img/mall.svg';
import "./mall.css";
import CSVReaderMall from '../components/csvreaderMall';
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

export default function mall() {
  return (
    <div>
      <Navbar />
      <div className="mall">
        <img src={mallsvg} alt="mall.svg" />
        <Link to="/mall/anomalydm" style={styles.anomalyButton}>Anomaly Detection</Link>
        <CSVReaderMall csvPath="/mall.csv" />
      </div>
    </div>
  );
}
