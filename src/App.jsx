import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/common/Navbar'
import Destinations from './pages/Destinations'
import DestinationDetails from './components/destinations/DestinationDetails'
import Packages from './pages/Packages'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/destinations' element={<Destinations/>}></Route>
      <Route path='/destinations/:id' element={<DestinationDetails/>}></Route>
      <Route path='/packages' element={<Packages/>}></Route>
    </Routes>
    </>
  )
}

export default App