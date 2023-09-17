import React, { useState, useEffect } from 'react';
import LoadingAnimation from './loadingAnimation.js';


const AnomalyDetectionOffice = () => {
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
<tr><td style={styles.td}>Conference Phone</td><td style={styles.tdb}>0.509804</td></tr>
<tr><td style={styles.td}>Laptop</td><td style={styles.tdb}>0.552448</td></tr>
<tr><td style={styles.td}>Projector</td><td style={styles.tdb}>0.576923</td></tr>
<tr><td style={styles.td}>Scanner</td><td style={styles.tdb}>0.681818</td></tr>
<tr><td style={styles.td}>Air Conditioner</td><td style={styles.tdb}>0.707071</td></tr>
</tbody>
</table>


<div>Manufacturer with highest failure rate: <span style={styles.bold}>Manufacturer_W with 55.7%</span></div>
<div>Floor with highest failure rate: <span style={styles.bold}>Floor 3 with 61%</span></div>
<div>Asset with the highest number of failures: <span style={styles.bold}>Laptop with 158 Predicted Failures</span></div>


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
<tr><td style={styles.td}>999</td><td style={styles.td}>Desktop Computer</td><td style={styles.td}>Manufacturer_Y</td><td style={styles.td}>6</td></tr>
<tr><td style={styles.td}>780</td><td style={styles.td}>Laptop</td><td style={styles.td}>Manufacturer_Y</td><td style={styles.td}>10</td></tr>
<tr><td style={styles.td}>778</td><td style={styles.td}>Laptop</td><td style={styles.td}>Manufacturer_W</td><td style={styles.td}>6</td></tr>
<tr><td style={styles.td}>428</td><td style={styles.td}>Laptop</td><td style={styles.td}>Manufacturer_W</td><td style={styles.td}>10</td></tr>
<tr><td style={styles.td}>429</td><td style={styles.td}>Laptop</td><td style={styles.td}>Manufacturer_X</td><td style={styles.td}>3</td></tr>
</tbody>
</table>
</div>
)}
</div>
);
};


export default AnomalyDetectionOffice;
