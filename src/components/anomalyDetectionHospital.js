import React, { useState, useEffect } from 'react';
import LoadingAnimation from './loadingAnimation.js';

const AnomalyDetectionHospital = () => {
const [loading, setLoading] = useState(true); // Initial loading state
useEffect(() => {
const timer = setTimeout(() => {
setLoading(false); // Hide loading after 5 seconds
}, 5000);
return () => clearTimeout(timer); // Clear timer if component unmounts
}, []);


const styles = {
container: {
display: 'flex',
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center',
height: '100vh',
backgroundColor: '#FFFFFF',
color: '#000000',
},
content: {
padding: '2em 1em 1em 1em', // Top padding increased, and consolidated padding settings
fontFamily: 'Arial, sans-serif',
textAlign: 'center',
lineHeight: '1.6',
},
title: {
fontSize: '24px',
marginBottom: '20px',
color: '#4A7B42',
},
subTitle: {
fontSize: '30px', // Increased size for more prominence
marginBottom: '20px',
},
table: {
width: '100%',
marginBottom: '20px',
borderCollapse: 'collapse',
},
th: {
border: '1px solid #34513C',
padding: '10px',
textAlign: 'left',
backgroundColor: '#4A7B42',
color: 'white',
},
td: {
border: '1px solid #34513C',
padding: '10px',
textAlign: 'left',
},
tdb: {
border: '1px solid #34513C',
padding: '10px',
textAlign: 'left',
fontWeight: 'bold',
},
bold: {
fontWeight: 'bold',
},
};


return (
<div style={styles.container}>
{loading ? (
<LoadingAnimation />
) : (
<div style={styles.content}>
<div style={styles.title}>Anomaly Detection Dashboard</div>
<div style={styles.subTitle}>Average Asset Type Failure Rate</div>
<table style={styles.table}>
<thead>
<tr>
<th style={styles.th}>Asset Type</th>
<th style={styles.th}>Failure Rate</th>
</tr>
</thead>
<tbody>
<tr>
<td style={styles.td}>Defibrillator</td>
<td style={styles.tdb}>0.566038</td>
</tr>
<tr>
<td style={styles.td}>CT Scanner</td>
<td style={styles.tdb}>0.529412</td>
</tr>
<tr>
<td style={styles.td}>Hospital Bed</td>
<td style={styles.tdb}>0.504505</td>
</tr>
<tr>
<td style={styles.td}>Ventilator</td>
<td style={styles.tdb}>0.483516</td>
</tr>
<tr>
<td style={styles.td}>Operating Table</td>
<td style={styles.tdb}>0.471698</td>
</tr>
</tbody>
</table>
<div>Manufacturer with highest failure rate: <span style={styles.bold}>Manufacturer_A with 50.2%</span></div>
<div>Floor with highest failure rate: <span style={styles.bold}>Floor 1 with 57%</span></div>
<div>Asset with the highest number of failures: <span style={styles.bold}>Defibrillator with 60 Predicted Failures</span></div>
<div style={styles.subTitle}>Top 5 Assets that need attention</div>
<table style={styles.table}>
<thead>
<tr>
<th style={styles.th}>Asset ID</th>
<th style={styles.th}>Asset Type</th>
<th style={styles.th}>Manufacturer</th>
<th style={styles.th}>Floor</th>
</tr>
</thead>
<tbody>
<tr>
<td style={styles.td}>995</td>
<td style={styles.td}>Ventilator</td>
<td style={styles.td}>Manufacturer_D</td>
<td style={styles.td}>1</td>
</tr>
<tr>
<td style={styles.td}>626</td>
<td style={styles.td}>Hospital Bed</td>
<td style={styles.td}>Manufacturer_B</td>
<td style={styles.td}>10</td>
</tr>
<tr>
<td style={styles.td}>998</td>
<td style={styles.td}>Infusion Pump</td>
<td style={styles.td}>Manufacturer_A</td>
<td style={styles.td}>10</td>
</tr>
<tr>
<td style={styles.td}>746</td>
<td style={styles.td}>Hospital Bed</td>
<td style={styles.td}>Manufacturer_B</td>
<td style={styles.td}>9</td>
</tr>
<tr>
<td style={styles.td}>655</td>
<td style={styles.td}>Anesthesia Machine</td>
<td style={styles.td}>Manufacturer_A</td>
<td style={styles.td}>8</td>
</tr>
</tbody>
</table>
</div>
)}
</div>
);
};


export default AnomalyDetectionHospital;