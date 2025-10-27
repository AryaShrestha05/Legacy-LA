import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import ClientSignUp from './components/ClientSignUp'
import AttorneySignUp from './components/AttorneySignUp'
import AttorneyLogin from './components/AttorneyLogin'
import HomePage from './components/HomePage'
import AboutYou from './components/AboutYouComprehensive'
import Assets from './components/Assets'
import Liabilities from './components/Liabilities'
import DecisionMakers from './components/DecisionMakers'
import Advisors from './components/Advisors'
import Documents from './components/Documents'
import SpouseAccessManager from './components/SpouseAccessManager'
import Navigation from './components/Navigation'
import Breadcrumb from './components/Breadcrumb'
import { PeopleProvider } from './contexts/PeopleContext'
import { AssetsProvider } from './contexts/AssetsContext'
import { AuthProvider } from './contexts/AuthContext'

const App = () => {
  return (
    <AuthProvider>
      <PeopleProvider>
        <AssetsProvider>
          <Router>
            <div className="min-h-screen bg-white">
              <Navigation />
              <Routes>
            <Route path="/" element={<><Breadcrumb /><HomePage /></>} />
            <Route path="/about-you" element={<><Breadcrumb /><AboutYou /></>} />
            <Route path="/assets" element={<><Breadcrumb /><Assets /></>} />
            <Route path="/liabilities" element={<><Breadcrumb /><Liabilities /></>} />
            <Route path="/decision-makers" element={<><Breadcrumb /><DecisionMakers /></>} />
            <Route path="/advisors" element={<><Breadcrumb /><Advisors /></>} />
            <Route path="/documents" element={<><Breadcrumb /><Documents /></>} />
            <Route path="/spouse-access" element={<><Breadcrumb /><SpouseAccessManager /></>} />
            <Route path="/login" element={<><Breadcrumb /><Login /></>} />
            <Route path="/attorney-login" element={<><Breadcrumb /><AttorneyLogin /></>} />
            <Route path="/client-signup" element={<><Breadcrumb /><ClientSignUp /></>} />
            <Route path="/attorney-signup" element={<><Breadcrumb /><AttorneySignUp /></>} />
            </Routes>
            </div>
          </Router>
        </AssetsProvider>
      </PeopleProvider>
    </AuthProvider>
  )
}

export default App
