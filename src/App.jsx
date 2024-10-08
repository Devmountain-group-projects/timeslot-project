import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import Register from './pages/Register'
import WhyUs from './pages/WhyUs'
import Contact from './pages/Contact'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import NavBar from './components/Layout/NavBar'
import Footer from './components/Layout/Footer'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <NavBar />
            <Home />
            <Footer />
          </>
        } />
        <Route path="/dashboard" element={
          <>
            <NavBar />
            <Dashboard />
            <Footer />
          </>
        } />
        <Route path="/profile" element={
          <>
            <NavBar />
            <Profile />
            <Footer />
          </>
        } />
        <Route path="/features" element={
          <>
            <NavBar />
            <Profile />
            <Footer />
          </>
        } />
        <Route path="/pricing" element={
          <>
            <NavBar />
            <Profile />
            <Footer />
          </>
        } />
        <Route path="/why-us" element={
          <>
            <NavBar />
            <Profile />
            <Footer />
          </>
        } />
        <Route path="/contact" element={
          <>
            <NavBar />
            <Profile />
            <Footer />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App