import React from 'react'
// import {MainPage} from './pages/MainPage';
import { Security } from './pages/securityPage/security'
import { FAQ } from './pages/faq/faq'
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import { VerticalNavBar } from './components/VerticalNavBar'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { PrivateMessenger } from './pages/PrivateMessenger/privateMessenger'
import { AccountGeneration } from './pages/AccountGeneration/accountGeneration'
import { SecureCryoto } from './pages/secureCryoti/SecureCrypto'
import { KeyPass } from './pages/keyPass/KeyPass'
import { Web3Browser } from './pages/web3Browser/Web3Browser'
import { DVPN } from './pages/DVPN/DVPN'
import { Content } from './components/Content'
import { Features } from './pages/MainPage/Features/Features'
import { Login } from './pages/Login/Login'
import { Reset } from './pages/Login/Reset'
import { Registartion } from './pages/registration/Registration'



function App() {
  return (
    <BrowserRouter>
      <PageContent/>
    </BrowserRouter>
  )
}

const PageContent = () => {
  const location = useLocation()

  const hideNav = location.pathname === '/login' || location.pathname === '/registration' || location.pathname === '/reset'
  return <>
    <VerticalNavBar />
    {!hideNav && <Header />}
    <Routes>
      <Route path="/" exact element={<Content />} />
      <Route path="/keypass" element={<KeyPass />} />
      <Route path="/privatemessenger" element={<PrivateMessenger />} />
      <Route path="/accountgeneration" element={<AccountGeneration />} />
      <Route path="/securecryoto" element={<SecureCryoto />} />
      <Route path="/web" element={<Web3Browser />} />
      <Route path="/dvpn" element={<DVPN />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/security" element={<Security />} />
      <Route path="/features" element={<Features />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registartion />} />
      <Route path="/reset" element={<Reset />} />
    </Routes>
    {!hideNav && <Footer />}
  </>
}

export default App
