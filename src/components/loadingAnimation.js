import React, { useEffect, useState } from 'react';
import './LoadingAnimation.css'; // Make sure to import the CSS


const LoadingAnimation = () => {
const [loading, setLoading] = useState(true);
const [message, setMessage] = useState('Analyzing');


useEffect(() => {
// For changing the loading message
const messageTimer = setInterval(() => {
setMessage((prevMessage) => {
switch (prevMessage) {
case 'Analyzing':
return 'Gathering Data';
case 'Gathering Data':
return 'Perfecting';
case 'Perfecting':
return 'Analyzing';
default:
return 'Analyzing';
}
});
}, 1700);


// For hiding the loading animation after 5s
const loadingTimer = setTimeout(() => {
setLoading(false);
clearInterval(messageTimer); // Clear message timer when loading is done
}, 5000);


return () => {
clearTimeout(loadingTimer);
clearInterval(messageTimer);
};
}, []);


return (
<div className="loading-container">
{loading && (
<>
<div className="ai-circle"></div>
<div className="loading-message">{message}</div>
</>
)}
{!loading && <div>Data Loaded</div>}
</div>
);
};


export default LoadingAnimation;
