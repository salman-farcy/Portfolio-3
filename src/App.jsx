import { Outlet } from 'react-router'
import './App.css'
import NaveBar from './Components/NaveBar'

function App() {
  

  return (
    <div className='min-h-screen overflow-hidden bg-black text-white'>
      <NaveBar />

      <main>
        <Outlet />
      </main>

      <h2>Footer</h2>
    </div>
  )
}

export default App
