import { useEffect, useRef, useState } from 'react';
import './App.css';
const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  location: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  searchContainer: {
    marginBottom: '20px',
    display :'flex'
  },
  searchInput: {
    width: '70%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px 0 0 5px',
  },
  searchButton: {
    width: '30%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '0 5px 5px 0',
    cursor: 'pointer',
  },
  weatherInfo: {
    borderTop: '1px solid #ccc',
    paddingTop: '20px',
  },
  condition: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  temperature: {
    fontSize: '18px',
    marginBottom: '10px',
  },
};
function App() {
  const ref1 = useRef(0);
  const [data,setData] = useState({});
  const [city,setCity] = useState("mumbai");


useEffect(() => {
  const fetchData = async () => {
    
    await fetch(`${process.env.REACT_APP_API_URL}/weather?q=${city}&units=metric&&APPID=c0f8fbd1a8aa7cfd383bb117153e12ae`)
    .then(res => res.json())
    .then(result => {
      setData(result)
      console.log(result);
    });
  }
  fetchData();
}, [city])

const updateCity = () => {
   setCity(ref1.current.value);
}

console.log(data)

return (
  // onChange={c => setCity(c.target.value)} 
    <div style={styles.container}>

        <h1 style={styles.location}>Location : {city}</h1>
        <div style={styles.searchContainer}>
          <input type="text" id="search-input" style={styles.searchInput} ref={ref1} placeholder="Enter location..." />
          <button style={styles.searchButton} onClick={updateCity}>Search</button>
        </div>
        {data.main ? (
          <div style={styles.weatherInfo}>
          <div style={styles.condition}>Weather Condition</div>
          <div style={styles.temperature}>Temperature : {data.main.temp} degree celcius</div>
          <div className="humidity">Humidity: {data.main.humidity}%</div>
        </div>
        ) :
        (
          <div className="wind-speed">No Data</div>
        )}
       
    </div>
   
  );
}

export default App;
