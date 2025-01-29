import Link from "next/link";
import { 
  UserGroupIcon, 
  PresentationChartLineIcon, 
  BuildingOfficeIcon,
  AcademicCapIcon 
} from '@heroicons/react/24/outline';
import Header from '@/components/Header';

export default function PrivatePage() {
  return (
    <div className="min-h-screen bg-black font-helvetica">
      <Header />
      {/* Hero Section */}
      <div className="h-[40vh] flex items-center justify-center bg-zinc-900">
        <div className="text-center">
          <h1 className="text-2xl md:text-5xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            PRIVATE
          </h1>
          <p className="text-sm md:text-xl text-zinc-400">
            Grupo Exclusivo de Elite
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Descrição Principal */}
          <div className="bg-zinc-900 rounded p-8 mb-16 border border-zinc-800">
            <h2 className="text-2xl font-bold text-white mb-6">
              Sobre o PRIVATE
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              O PRIVATE é um grupo seleto de investidores com acesso às estratégias mais avançadas 
              do mercado cripto. Exclusivo para investidores sérios e comprometidos, oferecemos 
              mentorias personalizadas, análises privilegiadas e networking de alto nível para 
              maximizar seus resultados.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-zinc-900 p-6 rounded border border-zinc-800">
              <h3 className="text-lg font-bold text-white mb-3">
                Mentorias Exclusivas
              </h3>
              <p className="text-zinc-400">
                Sessões individuais com especialistas para desenvolver e refinar suas estratégias 
                de investimento.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded border border-zinc-800">
              <h3 className="text-lg font-bold text-white mb-3">
                Acesso Privilegiado
              </h3>
              <p className="text-zinc-400">
                Informações antecipadas, análises exclusivas e participação em eventos presenciais 
                com especialistas.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-zinc-900 rounded p-8 border border-zinc-800">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              O que você recebe
            </h2>
            <ul className="text-zinc-400 mb-8 space-y-6 max-w-md mx-auto">
              <li className="flex items-start gap-4">
                <AcademicCapIcon className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium mb-1">Mentorias Individuais</h4>
                  <p className="text-sm">Sessões mensais de mentoria individual com especialistas do mercado</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <BuildingOfficeIcon className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium mb-1">Eventos Exclusivos</h4>
                  <p className="text-sm">Participação em eventos presenciais e online com conteúdo exclusivo</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <PresentationChartLineIcon className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium mb-1">Análises Privilegiadas</h4>
                  <p className="text-sm">Acesso antecipado a análises e recomendações estratégicas</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <UserGroupIcon className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium mb-1">Network Premium</h4>
                  <p className="text-sm">Conexão direta com investidores de alto nível e especialistas</p>
                </div>
              </li>
            </ul>

            <div className="flex gap-4 justify-center">
              <a
                href="https://checkout.k17.com.br/pay/private-link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-black rounded hover:bg-zinc-200 transition-colors font-medium"
              >
                Assinar
              </a>
              <Link
                href="/"
                className="px-8 py-4 bg-zinc-800 text-white rounded hover:bg-zinc-700 transition-colors font-medium"
              >
                Voltar
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export const metadata = {
  title: 'PRIVATE - Grupo Exclusivo de Elite | K17',
  description: 'Acesse estratégias avançadas e mentorias personalizadas com os maiores especialistas do mercado cripto.',
} 