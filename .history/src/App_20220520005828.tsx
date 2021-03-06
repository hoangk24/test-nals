import Home from 'pages/home/Home'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          {/* <Route path='teams' element={<Teams />}>
            <Route path=':teamId' element={<Team />} />
            <Route path='new' element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
