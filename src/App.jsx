import React, { useEffect, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
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
import AboutThisProject from './pages/AboutThisProject'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import NavBar from './components/Layout/NavBar'
import Footer from './components/Layout/Footer'

const MainLayout = ({ children }) => {
  const navbarRef = useRef(null);
  const mainContentRef = useRef(null);

  useEffect(() => {
    const updatePadding = () => {
      if (navbarRef.current && mainContentRef.current) {
        const navbarHeight = navbarRef.current.offsetHeight;
        mainContentRef.current.style.paddingTop = `${navbarHeight}px`;
      }
    };

    updatePadding();
    window.addEventListener('resize', updatePadding);

    return () => window.removeEventListener('resize', updatePadding);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar ref={navbarRef} />
      <main ref={mainContentRef} className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
        <Route path="/profile" element={<MainLayout><Profile /></MainLayout>} />
        <Route path="/features" element={<MainLayout><Features /></MainLayout>} />
        <Route path="/pricing" element={<MainLayout><Pricing /></MainLayout>} />
        <Route path="/why-us" element={<MainLayout><WhyUs /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/about-this-project" element={<MainLayout><AboutThisProject /></MainLayout>} />
        <Route path="/privacy-policy" element={<MainLayout><PrivacyPolicy /></MainLayout>} />
        <Route path="/terms-and-conditions" element={<MainLayout><TermsAndConditions /></MainLayout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
  )
}

export default App