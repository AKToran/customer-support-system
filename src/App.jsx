import { useEffect, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from "./Components/Navbar/Navbar"
import Status from './Components/Status/Status'
import Tickets from './Components/Tickets/Tickets'

function App() {
  const [tickets, setTickets] = useState([]);

  useEffect(()=>{
    fetch("/data.json")
    .then(res=> res.json())
    .then(data => setTickets(data))
    .catch(err=> alert(err))
  },[])

  return (
    <>
      <Navbar/>
      <main className="p-8 lg:p-18 bg-slate-100">
        <Banner/>

        <section className='grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4 pt-4 lg:pt-12'>
          <section className='col-span-3'>
            <Tickets tickets={tickets}/>
          </section>

          <section>
            <Status/>
          </section>
        </section>
      </main>
      
      
    </>
  )
}

export default App
