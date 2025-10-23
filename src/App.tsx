import { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import AdminPanel from './pages/AdminPanel';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'services':
        return <Services onNavigate={setCurrentPage} />;
      case 'gallery':
        return <Gallery />;
      case 'booking':
        return <Booking />;
      case 'contact':
        return <Contact />;
      case 'admin-panel':
        return <AdminPanel />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-black">
        <Loader />
        {currentPage !== 'admin-panel' && (
          <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
        )}
        <main>{renderPage()}</main>
        {currentPage !== 'admin-panel' && <Footer />}
        {currentPage !== 'admin-panel' && <WhatsAppButton />}
      </div>
    </AuthProvider>
  );
}

export default App;
