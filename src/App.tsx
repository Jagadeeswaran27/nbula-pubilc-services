import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { ensureFirestoreStructure } from './firebase/firestore';

function App() {
  useEffect(() => {
    // Initialize Firestore structure when the app loads
    ensureFirestoreStructure();
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <HomePage />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;