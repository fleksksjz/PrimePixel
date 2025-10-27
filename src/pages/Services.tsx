import { Scissors, Award, Eye, Droplet, Star, Clock } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: Scissors,
      title: 'Corte Tradicional',
      price: 'R$ 45',
      description: 'Corte clássico com acabamento profissional e atenção aos detalhes',
      features: ['Lavagem', 'Corte', 'Finalização'],
    },
    {
      icon: Star,
      title: 'Corte Premium',
      price: 'R$ 65',
      description: 'Corte moderno com design personalizado e técnicas avançadas',
      features: ['Lavagem premium', 'Design exclusivo', 'Hidratação'],
    },
    {
      icon: Award,
      title: 'Barba Completa',
      price: 'R$ 40',
      description: 'Aparo, design e finalização perfeita com produtos premium',
      features: ['Design', 'Aparo', 'Hidratação'],
    },
    {
      icon: Eye,
      title: 'Design de Sobrancelha',
      price: 'R$ 25',
      description: 'Modelagem masculina com técnica profissional',
      features: ['Limpeza', 'Design', 'Acabamento'],
    },
    {
      icon: Droplet,
      title: 'Pigmentação Capilar',
      price: 'R$ 120',
      description: 'Cobertura de fios brancos com resultado natural',
      features: ['Análise', 'Aplicação', 'Finalização'],
    },
    {
      icon: Clock,
      title: 'Combo Completo',
      price: 'R$ 95',
      description: 'Corte + Barba + Sobrancelha em um único atendimento',
      features: ['3 serviços', 'Economia', 'Prioridade'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Nossos <span className="text-amber-500">Serviços</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Qualidade e estilo em cada detalhe. Escolha o serviço ideal para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 rounded-sm overflow-hidden hover:border-amber-500 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/30 transform hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>

              <div className="relative p-8">
                <service.icon className="w-16 h-16 text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300" />

                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>

                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-amber-500">{service.price}</span>
                </div>

                <p className="text-gray-400 mb-6 min-h-[3rem]">{service.description}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onNavigate('booking')}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-6 rounded-sm transition-all duration-300 transform group-hover:scale-105"
                >
                  Agendar
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-black border border-amber-500/30 rounded-sm p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Horário de Funcionamento
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <div>
                <p className="font-semibold text-amber-500">Segunda a Sexta</p>
                <p>09:00 - 20:00</p>
              </div>
              <div>
                <p className="font-semibold text-amber-500">Sábado</p>
                <p>09:00 - 18:00</p>
              </div>
            </div>
            <p className="text-gray-400 mt-4 text-sm">Domingo: Fechado</p>
          </div>
        </div>
      </div>
    </div>
  );
}
