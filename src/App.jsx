import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from "./Components/Navbar/Navbar"

function App() {
  

  return (
    <>
      <Navbar/>
      <main className="p-8 lg:p-18 bg-slate-100">
        <Banner/>
      </main>
      
      
    </>
  )
}

export default App
