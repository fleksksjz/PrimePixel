import { useState, useEffect } from 'react';
import { Trash2, LogOut, Calendar, Clock, User, Phone, Scissors, Lock } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import type { Booking } from '../lib/supabase';

export default function AdminPanel() {
  const { user, signIn, signOut } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) {
      fetchBookings();
    }
  }, [user]);

  const fetchBookings = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .order('booking_date', { ascending: true })
      .order('booking_time', { ascending: true });

    if (!error && data) {
      setBookings(data);
    }
    setLoading(false);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const { error: loginError } = await signIn(email, password);

    if (loginError) {
      setError('Credenciais inválidas');
      return;
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir este agendamento?')) return;

    const { error } = await supabase.from('bookings').delete().eq('id', id);

    if (!error) {
      setBookings(bookings.filter((b) => b.id !== id));
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString + 'T00:00:00').toLocaleDateString('pt-BR');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-500 border-yellow-500';
      case 'confirmed':
        return 'bg-green-500/20 text-green-500 border-green-500';
      case 'cancelled':
        return 'bg-red-500/20 text-red-500 border-red-500';
      default:
        return 'bg-gray-500/20 text-gray-500 border-gray-500';
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-32 pb-20 px-4 flex items-center justify-center">
        <div className="max-w-md w-full">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 rounded-sm p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/10 rounded-sm mb-4">
                <Lock className="text-amber-500" size={32} />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Painel Admin</h1>
              <p className="text-gray-400">Acesso restrito</p>
            </div>

            {error && (
              <div className="mb-6 bg-red-500/20 border border-red-500 rounded-sm p-4 text-center">
                <p className="text-red-500 text-sm font-semibold">{error}</p>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2 text-sm font-semibold">
                  E-mail
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-black/50 border border-amber-500/30 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="admin@barberstudiox.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 text-sm font-semibold">
                  Senha
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-black/50 border border-amber-500/30 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 rounded-sm transition-all duration-300"
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Painel <span className="text-amber-500">Administrativo</span>
            </h1>
            <p className="text-gray-400">Gerencie os agendamentos da barbearia</p>
          </div>
          <button
            onClick={signOut}
            className="flex items-center space-x-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500 text-red-500 px-6 py-3 rounded-sm transition-all duration-300"
          >
            <LogOut size={20} />
            <span>Sair</span>
          </button>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-amber-500 border-t-transparent"></div>
            <p className="text-gray-400 mt-4">Carregando agendamentos...</p>
          </div>
        ) : bookings.length === 0 ? (
          <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 rounded-sm p-12 text-center">
            <Calendar className="w-16 h-16 text-amber-500/50 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">
              Nenhum agendamento
            </h3>
            <p className="text-gray-400">
              Os agendamentos aparecerão aqui quando forem realizados.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 rounded-sm p-6 hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-3">
                      <User className="text-amber-500 flex-shrink-0" size={20} />
                      <div>
                        <p className="text-xs text-gray-400 mb-1">Cliente</p>
                        <p className="text-white font-semibold">
                          {booking.customer_name}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="text-amber-500 flex-shrink-0" size={20} />
                      <div>
                        <p className="text-xs text-gray-400 mb-1">Telefone</p>
                        <p className="text-white font-semibold">
                          {booking.customer_phone}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Scissors className="text-amber-500 flex-shrink-0" size={20} />
                      <div>
                        <p className="text-xs text-gray-400 mb-1">Serviço</p>
                        <p className="text-white font-semibold">{booking.service}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Calendar className="text-amber-500 flex-shrink-0" size={20} />
                      <div>
                        <p className="text-xs text-gray-400 mb-1">Data</p>
                        <p className="text-white font-semibold">
                          {formatDate(booking.booking_date)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock className="text-amber-500 flex-shrink-0" size={20} />
                      <div>
                        <p className="text-xs text-gray-400 mb-1">Horário</p>
                        <p className="text-white font-semibold">
                          {booking.booking_time}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div
                        className={`px-3 py-1 rounded-sm border text-xs font-semibold ${getStatusColor(
                          booking.status
                        )}`}
                      >
                        {booking.status === 'pending' && 'Pendente'}
                        {booking.status === 'confirmed' && 'Confirmado'}
                        {booking.status === 'cancelled' && 'Cancelado'}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDelete(booking.id)}
                    className="flex items-center justify-center space-x-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500 text-red-500 px-6 py-3 rounded-sm transition-all duration-300"
                  >
                    <Trash2 size={18} />
                    <span>Excluir</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
