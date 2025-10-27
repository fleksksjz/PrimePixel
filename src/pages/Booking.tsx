import { useState } from 'react';
import { Calendar, Clock, User, Phone, Scissors, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Booking() {
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_phone: '',
    service: '',
    booking_date: '',
    booking_time: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const services = [
    'Corte Tradicional',
    'Corte Premium',
    'Barba Completa',
    'Design de Sobrancelha',
    'Pigmentação Capilar',
    'Combo Completo',
  ];

  const timeSlots = [
    '09:00',
    '10:00',
    '11:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error: submitError } = await supabase.from('bookings').insert([
      {
        customer_name: formData.customer_name,
        customer_phone: formData.customer_phone,
        service: formData.service,
        booking_date: formData.booking_date,
        booking_time: formData.booking_time,
        status: 'pending',
      },
    ]);

    setLoading(false);

    if (submitError) {
      setError('Erro ao agendar. Tente novamente.');
      return;
    }

    setSuccess(true);
    setFormData({
      customer_name: '',
      customer_phone: '',
      service: '',
      booking_date: '',
      booking_time: '',
    });

    setTimeout(() => setSuccess(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Faça seu <span className="text-amber-500">Agendamento</span>
          </h1>
          <p className="text-xl text-gray-400">
            Preencha o formulário e garanta seu horário
          </p>
        </div>

        {success && (
          <div className="mb-8 bg-green-500/20 border border-green-500 rounded-sm p-6 flex items-center space-x-4 animate-fade-in">
            <CheckCircle className="text-green-500 flex-shrink-0" size={32} />
            <div>
              <h3 className="text-white font-bold text-lg">
                Agendamento realizado com sucesso!
              </h3>
              <p className="text-gray-300 text-sm">
                Entraremos em contato em breve para confirmar.
              </p>
            </div>
          </div>
        )}

        {error && (
          <div className="mb-8 bg-red-500/20 border border-red-500 rounded-sm p-6 text-center">
            <p className="text-red-500 font-semibold">{error}</p>
          </div>
        )}

        <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 rounded-sm p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="flex items-center text-gray-300 mb-3 text-sm font-semibold">
                <User size={18} className="mr-2 text-amber-500" />
                Nome Completo
              </label>
              <input
                type="text"
                name="customer_name"
                value={formData.customer_name}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-amber-500/30 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                placeholder="Digite seu nome"
              />
            </div>

            <div>
              <label className="flex items-center text-gray-300 mb-3 text-sm font-semibold">
                <Phone size={18} className="mr-2 text-amber-500" />
                Telefone
              </label>
              <input
                type="tel"
                name="customer_phone"
                value={formData.customer_phone}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-amber-500/30 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                placeholder="(00) 00000-0000"
              />
            </div>

            <div>
              <label className="flex items-center text-gray-300 mb-3 text-sm font-semibold">
                <Scissors size={18} className="mr-2 text-amber-500" />
                Serviço Desejado
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-amber-500/30 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
              >
                <option value="">Selecione um serviço</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="flex items-center text-gray-300 mb-3 text-sm font-semibold">
                <Calendar size={18} className="mr-2 text-amber-500" />
                Data
              </label>
              <input
                type="date"
                name="booking_date"
                value={formData.booking_date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full bg-black/50 border border-amber-500/30 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            <div>
              <label className="flex items-center text-gray-300 mb-3 text-sm font-semibold">
                <Clock size={18} className="mr-2 text-amber-500" />
                Horário
              </label>
              <select
                name="booking_time"
                value={formData.booking_time}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-amber-500/30 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
              >
                <option value="">Selecione um horário</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-amber-500/50 text-black font-bold py-4 rounded-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/50"
            >
              {loading ? 'Agendando...' : 'Confirmar Agendamento'}
            </button>
          </form>
        </div>

        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>
            Após o envio, entraremos em contato para confirmar seu horário.
          </p>
        </div>
      </div>
    </div>
  );
}
