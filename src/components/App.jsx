import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from '../Pages/Home'
import Profile from '../Pages/Profile'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default App
