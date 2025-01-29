import Link from "next/link";
import { 
  ChartBarIcon, 
  BellAlertIcon, 
  UserGroupIcon, 
  ChatBubbleLeftRightIcon 
} from '@heroicons/react/24/outline';
import Header from '@/components/Header';

export default function ARSPage() {
  return (
    <div className="min-h-screen bg-black font-helvetica">
      <Header />
      {/* Hero Section */}
      <div className="h-[40vh] flex items-center justify-center bg-zinc-900">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            ARS
          </h1>
          <p className="text-xl text-zinc-400">
            Análises e Recomendações Semanais
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Descrição Principal */}
          <div className="bg-zinc-900 rounded p-8 mb-16 border border-zinc-800">
            <h2 className="text-2xl font-bold text-white mb-6">
              Sobre o ARS
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              O ARS é um serviço premium que oferece análises semanais aprofundadas e recomendações 
              precisas para o mercado cripto. Nossa equipe monitora o mercado 24/7, identificando 
              oportunidades de alto potencial e fornecendo insights estratégicos para maximizar seus 
              resultados.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-zinc-900 p-6 rounded border border-zinc-800">
              <h3 className="text-lg font-bold text-white mb-3">
                Análises Detalhadas
              </h3>
              <p className="text-zinc-400">
                Receba semanalmente análises técnicas completas dos principais criptoativos e 
                recomendações estratégicas.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded border border-zinc-800">
              <h3 className="text-lg font-bold text-white mb-3">
                Alertas Estratégicos
              </h3>
              <p className="text-zinc-400">
                Alertas em tempo real sobre movimentações importantes e oportunidades de entrada e saída.
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
                <ChartBarIcon className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium mb-1">Análises Semanais</h4>
                  <p className="text-sm">Análises técnicas e fundamentalistas dos principais criptoativos toda semana</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <BellAlertIcon className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium mb-1">Alertas de Operações</h4>
                  <p className="text-sm">Notificações em tempo real de oportunidades de compra e venda</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <UserGroupIcon className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium mb-1">Grupo VIP</h4>
                  <p className="text-sm">Acesso ao grupo exclusivo no Telegram com outros membros</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <ChatBubbleLeftRightIcon className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium mb-1">Suporte Dedicado</h4>
                  <p className="text-sm">Atendimento prioritário para dúvidas e suporte técnico</p>
                </div>
              </li>
            </ul>

            <div className="flex gap-4 justify-center">
              <a
                href="https://checkout.k17.com.br/subscribe/ars"
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