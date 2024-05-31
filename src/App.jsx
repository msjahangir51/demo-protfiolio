import React from 'react'
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin/Admin';
import { brandsData } from './assets/brands/brands';
// import { servicesdoc } from './assets/services/services';

export const Context = React.createContext(); 
function App() {

  return (
    <Context.Provider value={[brandsData]}>

      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/project/upload/admin" element={<Admin/>}/>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  )
}

export default App