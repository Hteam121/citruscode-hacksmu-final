import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import  { Breakpoint, BreakpointProvider } from 'react-socks';


const CSVReaderMall = ({ csvPath }) => { // Added csvPath as a prop
const [data, setData] = useState([]);
const [filter, setFilter] = useState({ 'Asset Type': '', 'Floor': ''});
const [sortOrder, setSortOrder] = useState('desc');


useEffect(() => {
fetch(csvPath) // Use csvPath here
.then((response) => response.text())
.then((text) => {
Papa.parse(text, {
header: true,
dynamicTyping: true,
complete: function (results) {
const sortedData = results.data.sort((a, b) => b['Failure_Probability'] - a['Failure_Probability']);
setData(sortedData);
},
});
});
}, [csvPath]); // Added csvPath as a dependency


const handleFilterChange = (e) => {
const { name, value } = e.target;
setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
};


const toggleSortOrder = () => {
setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
setData((prevData) => [...prevData].sort(
(a, b) => (sortOrder === 'asc' ? b['Failure_Probability'] - a['Failure_Probability'] : a['Failure_Probability'] - b['Failure_Probability'])
));
};


const filteredData = data.filter((item) =>
Object.keys(filter).every((key) => String(item[key]).toLowerCase().includes(String(filter[key]).toLowerCase()))
);


return (
<div style={{
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'flex-start',
height: '100vh',
width: '72vh',
backgroundColor: 'rgba(74, 123, 66, 0.29)',
padding: '20px',
borderRadius: '1.25rem',
marginTop: '2rem',
}}>


<div style={{ 
display: 'flex',
alignItems: 'center',
justifyItems: 'center', 
gap: '1rem', 
marginBottom: '20px' 
}}>
<input
style={{ padding: '5px' }}
placeholder="Filter by Asset Type"
name="Asset Type"
value={filter['Asset Type']}
onChange={handleFilterChange}
/>
<button onClick={toggleSortOrder} style={{ 
backgroundColor: '#012A2D', 
color: 'white', 

}}>Toggle Sort Order</button>
<input
style={{ padding: '5px' }}
placeholder="Filter by Floor"
name="Floor"
value={filter['Floor']}
onChange={handleFilterChange}
/>
</div>

<div style={{ 
maxHeight: '86vh', 
overflowY: 'auto', 
width: '90%', 
borderRadius:'10px' }}>
<table style={{
borderCollapse: 'collapse',
width: '100%',
backgroundColor: 'white',
color: '#012A2D'
}}>
<thead>
<tr style={{ borderBottom: '1px solid white' }}>
<th style={{ padding: '8px', textAlign: 'center' }}>Asset Type</th>
<th style={{ padding: '8px', textAlign: 'center' }}>Floor</th>
<th style={{ padding: '8px', textAlign: 'center' }}>Probability</th>
</tr>
</thead>
<tbody>
{filteredData.map((item, index) => (
<tr key={index}>
<td style={{ padding: '8px', textAlign: 'center' }}>{item['Asset Type']}</td>
<td style={{ padding: '8px', textAlign: 'center' }}>{item['Floor']}</td>
<td style={{ padding: '8px', textAlign: 'center' }}>
{isNaN(item['Failure_Probability']) ? 'N/A' : (parseFloat(item['Failure_Probability']) * 100).toFixed(2) + '%'}
</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
);
};


export default CSVReaderMall;
