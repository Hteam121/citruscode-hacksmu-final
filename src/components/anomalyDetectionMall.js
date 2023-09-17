import React, { useState, useEffect } from 'react';
import LoadingAnimation from './loadingAnimation';


const AnomalyDetectionMall = () => {
const [loading, setLoading] = useState(true);


useEffect(() => {
const timer = setTimeout(() => {
setLoading(false);
}, 5000);


return () => clearTimeout(timer);
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
<td style={styles.td}>Automatic Door</td>
<td style={styles.tdb}>0.000630</td>
</tr>
<tr>
<td style={styles.td}>Water Fountain</td>
<td style={styles.tdb}>0.000870</td>
</tr>
<tr>
<td style={styles.td}>ATM</td>
<td style={styles.tdb}>0.000932</td>
</tr>
<tr>
<td style={styles.td}>HVAC Unit</td>
<td style={styles.tdb}>0.000999</td>
</tr>
<tr>
<td style={styles.td}>Elevator</td>
<td style={styles.tdb}>0.001169</td>
</tr>
</tbody>
</table>


<div>Manufacturer with highest failure rate: <span style={styles.bold}>Manufacturer_R with 0.09%</span></div>
<div>Floor with highest failure rate: <span style={styles.bold}>Floor 2 with 15.6%</span></div>
<div>Asset with the highest number of failures: <span style={styles.bold}>Elevator with 103 Predicted Failures</span></div>


<div style={styles.subTitle}>Top 5 Assets That Need Attention</div>
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
<td style={styles.td}>687</td>
<td style={styles.td}>Kiosk</td>
<td style={styles.td}>Manufacturer_S</td>
<td style={styles.td}>3</td>
</tr>
<tr>
<td style={styles.td}>917</td>
<td style={styles.td}>Water Fountain</td>
<td style={styles.td}>Manufacturer_R</td>
<td style={styles.td}>2</td>
</tr>
<tr>
<td style={styles.td}>208</td>
<td style={styles.td}>Information Board</td>
<td style={styles.td}>Manufacturer_P</td>
<td style={styles.td}>4</td>
</tr>
<tr>
<td style={styles.td}>663</td>
<td style={styles.td}>HVAC Unit</td>
<td style={styles.td}>Manufacturer_R</td>
<td style={styles.td}>4</td>
</tr>
<tr>
<td style={styles.td}>125</td>
<td style={styles.td}>Automatic Door</td>
<td style={styles.td}>Manufacturer_R</td>
<td style={styles.td}>1</td>
</tr>
</tbody>
</table>
</div>
)}
</div>
);
};


export default AnomalyDetectionMall;