import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { AuthProvider } from "./Context/AuthContext.jsx";
import { DarkModeProvider } from "./Context/DarkModeContext.jsx";
import { Toaster } from "react-hot-toast";

const clientid="148388239184-5afa0ejenmi1t6gr9r444rkdpj7gn8mj.apps.googleusercontent.com";
createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={clientid}>
    <StrictMode>
      <Router>
        <AuthProvider>
          <DarkModeProvider>
            <Toaster position="top-center" reverseOrder= {false} />
            <App />
          </DarkModeProvider>
        </AuthProvider>
      </Router>
    </StrictMode>
  </GoogleOAuthProvider>
)
