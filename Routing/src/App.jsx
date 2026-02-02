import {Route, Routes} from 'react-router-dom'
import Navbar from './Navbar'

export default function App() {
  return (
    <div>
      <h1>Welcome to React Routing</h1>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />}></Route>
         <Route path="/about" element = {<About />}></Route>
          <Route path="/contact" element = {<Contact />}></Route>
      </Routes>
    </div>
  )
}
