import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [countryCode, setCode] = useState("co");
  const [countryData, setData] = useState();

  useEffect(function () {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/${countryCode}`);
        const data = await res.json();
        setData(data);

      } catch (error) {
        console.log(error);
      }
    }


    fetchData();
  }, [])

  return (
    
  )
}

export default App
