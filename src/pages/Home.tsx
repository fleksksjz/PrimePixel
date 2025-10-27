import { Scissors, Award, Clock, Users } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const services = [
    { icon: Scissors, title: 'Corte', desc: 'Estilo e precisão' },
    { icon: Award, title: 'Barba', desc: 'Acabamento perfeito' },
    { icon: Clock, title: 'Sobrancelha', desc: 'Design masculino' },
    { icon: Users, title: 'Pigmentação', desc: 'Resultado natural' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        ></div>

        <div className="relative z-20 text-center px-4 max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Estilo, Confiança e <span className="text-amber-500">Precisão</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Barber Studio X
          </p>
          <button
            onClick={() => onNavigate('booking')}
            className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 px-12 rounded-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/50"
          >
            Agende seu horário
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-500 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-amber-500 rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Nossos <span className="text-amber-500">Serviços</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 p-8 rounded-sm hover:border-amber-500 transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/20 transform hover:-translate-y-2 cursor-pointer"
              >
                <service.icon className="w-16 h-16 text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Por que escolher a <span className="text-amber-500">Studio X</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-6">
              <div className="text-5xl font-bold text-amber-500 mb-4">5+</div>
              <p className="text-xl text-gray-300">Anos de experiência</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-amber-500 mb-4">2000+</div>
              <p className="text-xl text-gray-300">Clientes satisfeitos</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-amber-500 mb-4">100%</div>
              <p className="text-xl text-gray-300">Profissionalismo</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
