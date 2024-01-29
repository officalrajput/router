import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom';

import Home from './components/Home';
import Live from './components/Live';
import About from './components/About';
import Contact from './components/contact';
import Error from './components/Error';

const App = () => {
  return (
   
  <BrowserRouter>
<Routes>
  <Route path="/"  element={<Home></Home>}>

  <Route path="/Contact"  element={<Contact></Contact>}></Route>
  <Route path="/About"  element={<About></About>}></Route>
  <Route path="/Live"  element={<Live></Live>}></Route>
  <Route path="*"  element={<Error></Error>}></Route>
  </Route>
</Routes>
  </BrowserRouter> 

 
  )
}


export default App;