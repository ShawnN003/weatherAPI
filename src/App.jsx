import { useState } from 'react'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Item from './components/Item'
import './App.css'
function southClick() {
  setRegion(countryRegion => "Southeast Europe")
}
function centralClick() {
  setRegion(countryRegion => "Central Europe")
}
function northClick() {
  setRegion(countryRegion => "Northen Europe")
}
function eastClick() {
  setRegion(countryRegion => "Eastern Europe")
}
function App() {
  const [countryRegion, setRegion] = useState();
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
      <button onClick={handleClick}>Southeast Europe</button>
      <button onClick={handleClick}>Central Europe</button>
      <button onClick={handleClick}>Northen Europe</button>
      <button onClick={handleClick}>Eastern Europe</button>
      {!countryData ? <p>loading</p> : <Item country={countryData[0]} />}
      <Footer />
    </div>
  )
}

export default App
