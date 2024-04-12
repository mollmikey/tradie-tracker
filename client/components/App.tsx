import { Outlet } from 'react-router-dom'
import Navbar from './Nav'

function App() {
  return (
    <>
      <Navbar />
      <div className="app">
        <Outlet />
      </div>
    </>
  )
}

export default App
