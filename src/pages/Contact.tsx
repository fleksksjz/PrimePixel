import { MapPin, Phone, Instagram, Clock, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Entre em <span className="text-amber-500">Contato</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Estamos prontos para atendê-lo. Visite-nos ou entre em contato
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 rounded-sm p-8 hover:border-amber-500/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-500/10 p-4 rounded-sm">
                  <MapPin className="text-amber-500" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Endereço</h3>
                  <p className="text-gray-400">
                    Rua dos Barbeiros, 123
                    <br />
                    Centro, São Paulo - SP
                    <br />
                    CEP: 01234-567
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 rounded-sm p-8 hover:border-amber-500/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-500/10 p-4 rounded-sm">
                  <Phone className="text-amber-500" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Telefone</h3>
                  <p className="text-gray-400 mb-1">(11) 98765-4321</p>
                  <p className="text-gray-400">(11) 3456-7890</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 rounded-sm p-8 hover:border-amber-500/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-500/10 p-4 rounded-sm">
                  <Mail className="text-amber-500" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">E-mail</h3>
                  <p className="text-gray-400">contato@barberstudiox.com</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 rounded-sm p-8 hover:border-amber-500/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-500/10 p-4 rounded-sm">
                  <Instagram className="text-amber-500" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Instagram</h3>
                  <a
                    href="https://instagram.com/barberstudiox"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-500 hover:text-amber-400 transition-colors"
                  >
                    @barberstudiox
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 rounded-sm p-8 hover:border-amber-500/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-500/10 p-4 rounded-sm">
                  <Clock className="text-amber-500" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Horário de Funcionamento
                  </h3>
                  <div className="space-y-2 text-gray-400">
                    <p>
                      <span className="text-amber-500 font-semibold">
                        Segunda a Sexta:
                      </span>{' '}
                      09:00 - 20:00
                    </p>
                    <p>
                      <span className="text-amber-500 font-semibold">Sábado:</span>{' '}
                      09:00 - 18:00
                    </p>
                    <p>
                      <span className="text-amber-500 font-semibold">Domingo:</span>{' '}
                      Fechado
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-32 h-fit">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 rounded-sm overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0977853586494!2d-46.63424668502205!3d-23.561414484681844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6 bg-black/50">
                <h3 className="text-xl font-bold text-white mb-2">
                  Visite Nossa Barbearia
                </h3>
                <p className="text-gray-400 text-sm">
                  Localização privilegiada com fácil acesso e estacionamento próximo
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/5511987654321"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-sm transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
            >
              <Phone size={24} />
              <span>Fale conosco no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
