import { useState } from 'react'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Item from './components/Item'
import './App.css'
function userInput() {
  setRegion()
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
      <label for="fname">Insert Region:{userInput()}</label>
    
      <input type="text" id="regionVal" name="region" value={countryRegion}></input>
      {console.log(countryRegion)}
      {!countryData ? <p>loading</p> : <Item country={countryData[0]} />}
      <Footer />
    </div>
  )
}

export default App
