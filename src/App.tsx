import { AuthProvider } from './contexts/AuthContext';
import WowBarber from './pages/WowBarber';
import WowBarberAdmin from './pages/WowBarberAdmin';

function App() {
  const isAdminPath = window.location.hash === '#admin' || window.location.pathname.includes('admin');

  return (
    <AuthProvider>
      <div className="min-h-screen bg-black">
        {isAdminPath ? <WowBarberAdmin /> : <WowBarber />}
      </div>
    </AuthProvider>
  );
}

export default App;
