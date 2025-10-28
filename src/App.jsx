import { useState } from 'react'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [countryCode, setCode] = useState("co");
  const [countryData, setData] = useState();

  useEffect(function () {
    fetch(`https://restcountries.com/v3.1/${countryCode}`)
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <div>
      <Header />

      <Footer />
    </div>
  )
}

export default App
