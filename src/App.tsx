import React from 'react';
import { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import ForgotPasswordModal from './components/auth/ForgotPasswordModal';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

type AppState = 'landing' | 'login' | 'signup' | 'dashboard';

function App() {
  const [appState, setAppState] = useState<AppState>('landing');
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser(session.user);
        setAppState('dashboard');
      }
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(session.user);
        setAppState('dashboard');
      } else {
        setUser(null);
        setAppState('landing');
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center mb-4 mx-auto animate-pulse">
            <div className="w-8 h-8 bg-white rounded-lg"></div>
          </div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  if (appState === 'login') {
    return (
      <>
        <LoginForm
          onSuccess={() => setAppState('dashboard')}
          onForgotPassword={() => setShowForgotPassword(true)}
          onCreateAccount={() => setAppState('signup')}
          onBackToHome={() => setAppState('landing')}
        />
        <ForgotPasswordModal
          isOpen={showForgotPassword}
          onClose={() => setShowForgotPassword(false)}
        />
      </>
    );
  }

  if (appState === 'signup') {
    return (
      <SignUpForm
        onSuccess={() => setAppState('dashboard')}
        onBackToLogin={() => setAppState('login')}
        onBackToHome={() => setAppState('landing')}
      />
    );
  }

  if (appState === 'dashboard' && user) {
    return (
      <Dashboard
        user={user}
        onLogout={() => {
          setUser(null);
          setAppState('landing');
        }}
      />
    );
  }

  // Landing page with modified header
  return (
    <div className="min-h-screen">
      <Header onLoginClick={() => setAppState('login')} />
      <Hero />
      <Benefits />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;