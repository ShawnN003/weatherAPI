import { useState } from 'react'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [countryCode, setCode] = useState("co");
  const [countryData, setData] = useState();

  useEffect(function () {
    try {
      fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
        .then(res => res.json())
        .then(data => setData(data))
    } catch (error) {
      console.log(error);
    }
  }, [])

  return (
    <div>
      <Header />
      {!countryData && <p>loading</p>}
      <Footer />
    </div>
  )
}

export default App
