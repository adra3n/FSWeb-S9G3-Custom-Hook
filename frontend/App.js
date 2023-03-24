import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Charts from './components/Charts'
import Navbar from './components/Navbar'
import useGeceModu from './hooks/geceModuAc'
import useLocalStorage from './hooks/localStorageKullan'

const App = () => {
  // const [coinData, setCoinData] = useCoinData([])
  const [coinData, setCoinData] = useState([])
  // const [geceModu, setGeceModu] = useState(false)
  const [geceModu, setGeceModu] = useLocalStorage('geceModu', false)

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true'
      )
      .then((res) => setCoinData(res.data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <div className={geceModu ? 'dark-mode App' : 'App'}>
      <Navbar geceModu={geceModu} setGeceModu={setGeceModu} />
      <Charts coinData={coinData} />
    </div>
  )
}

export default App
