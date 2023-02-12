import { useState, createContext } from 'react'
import './App.css'
import Header from "../src/components/Header"
import {Map} from "./components/Map"
import { Info } from './components/Info';


export const myContext = createContext();

function App() {
  const [address, setAddress] = useState("")

  console.log(address)

  return (
    <myContext.Provider value={{address, setAddress}}>  
    <Header/>
    {address && <Info data={address} />}
    {address && <Map lat={address.location.lat} lng={address.location.lat}/>}
    </myContext.Provider>
  
  )
}

export default App
