import { useState } from 'react'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Item from './components/Item'
import './App.css'

function App() {
  const [countryRegion, setRegion] = useState();
  const [countryData, setData] = useState();

  useEffect(function () {
    try {
      fetch(`https://restcountries.com/v3.1/alpha/${countryRegion}`)
        .then(res => res.json())
        .then((data) => setData(data))
    } catch (error) {
      console.log(error);
    }
  }, [countryRegion])

  return (
    <div>
      <Header />
      <button onClick={() => setRegion("srb")}>Southeast Europe</button>
      <button onClick={() => setRegion("deu")}>Central Europe</button>
      <button onClick={() => setRegion("nor")}>Northern Europe</button>
      <button onClick={() => setRegion("pol")}>Eastern Europe</button>

      {!countryData ? <p>loading</p> : <Item country={countryData[0]} />}
      <Footer />
    </div>
  )
}

export default App
