
import './App.css'
import LineChart from './components/LineChart/LineChart'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {


  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-5xl text-red-800'>Vite + React</h1>
      <PriceOptions></PriceOptions>
    <LineChart></LineChart>
    <Phones></Phones>
  

    </>
  )
}

export default App
