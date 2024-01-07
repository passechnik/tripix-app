import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import { Sidebar } from './components/Sidebar'
import { Home } from './pages/Home'
import { DiscoverPlaces } from './pages/DiscoverPlaces'
import { Settings } from './pages/Settings'
import { SignOut } from './pages/SignOut'

export default function App() {

  return (
    <>
    <Router>
      <div className="app-container">
        {/* <Sidebar /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<DiscoverPlaces />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/signout" element={<SignOut />} />
        </Routes>
      </div>
    </Router>
    </>
    
  )
}
