import { useState } from 'react'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
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
    <div>
      <Header/>

      <Footer/>
    </div>
  )
}

export default App
