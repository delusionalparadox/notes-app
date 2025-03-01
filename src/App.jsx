
import React from 'react'
import { BrowserRouter as Router ,Route,Routes} from 'react-router'
import Home from './pages/home/home'
import Signup from './pages/signup/signup'
import Login from './pages/login/login'

const routes=(
 
  <Router>
    <Routes>
      <Route path='/home' exact element={<Home/>}/>
      <Route path='/signup' exact element={<Signup/>}/>
      <Route path='/login' exact element={<Login/>}/>
      
    </Routes>
  </Router>
)

const App = () => {
  return (
    <div>
      {routes}
    </div>
  )
}

export default App