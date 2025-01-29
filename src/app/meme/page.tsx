import Link from "next/link";
import { 
  BellAlertIcon, 
  ChartBarIcon, 
  UserGroupIcon,
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';
import Header from '@/components/Header';

export default function MemePage() {
  return (
    <div className="min-h-screen bg-black font-helvetica">
      <Header />
      {/* Hero Section */}
      <div className="h-[40vh] flex items-center justify-center bg-zinc-900">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            PROJETO MEME
          </h1>
          <p className="text-xl text-zinc-400">
            Estratégias para Moedas Meme
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Descrição Principal */}
          <div className="bg-zinc-900 rounded p-8 mb-16 border border-zinc-800">
            <h2 className="text-2xl font-bold text-white mb-6">
              Sobre o Projeto MEME
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              O Projeto MEME é um sistema estratégico para identificar e lucrar com moedas meme 
              antes do hype. Combinamos análise de dados, timing preciso e gestão de risco para 
              maximizar os ganhos em um dos segmentos mais lucrativos do mercado cripto.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-zinc-900 p-6 rounded border border-zinc-800">
              <h3 className="text-lg font-bold text-white mb-3">
                Alertas Antecipados
              </h3>
              <p className="text-zinc-400">
                Identificamos oportunidades em moedas meme antes do movimento de alta, maximizando 
                seu potencial de lucro.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded border border-zinc-800">
              <h3 className="text-lg font-bold text-white mb-3">
                Estratégia Completa
              </h3>
              <p className="text-zinc-400">
                Aprenda a identificar, entrar e sair de trades com moedas meme de forma lucrativa 
                e segura.
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
                <BellAlertIcon className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium mb-1">Alertas de Oportunidades</h4>
                  <p className="text-sm">Notificações em tempo real sobre novas moedas meme promissoras</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <ChartBarIcon className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium mb-1">Análises Detalhadas</h4>
                  <p className="text-sm">Análise completa dos projetos e pontos de entrada e saída</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <UserGroupIcon className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium mb-1">Grupo Exclusivo</h4>
                  <p className="text-sm">Comunidade focada em identificar oportunidades em moedas meme</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <ShieldCheckIcon className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium mb-1">Gestão de Risco</h4>
                  <p className="text-sm">Estratégias para proteger seu capital e maximizar resultados</p>
                </div>
              </li>
            </ul>

            <div className="flex gap-4 justify-center">
              <a
                href="https://checkout.k17.com.br/subscribe/projeto-meme-2"
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
  title: 'Projeto MEME - Estratégias para Moedas Meme | K17',
  description: 'Aprenda a identificar e lucrar com moedas meme antes do hype. Estratégias comprovadas para maximizar seus ganhos.',
} 