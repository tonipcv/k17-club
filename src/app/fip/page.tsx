import Link from "next/link";
import { 
  BookOpenIcon, 
  UserGroupIcon, 
  DocumentCheckIcon,
  AcademicCapIcon 
} from '@heroicons/react/24/outline';
import Header from '@/components/Header';

export default function FIPPage() {
  return (
    <div className="min-h-screen bg-black font-helvetica">
      <Header />
      {/* Hero Section */}
      <div className="h-[40vh] flex items-center justify-center bg-zinc-900">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            FIP
          </h1>
          <p className="text-xl text-zinc-400">
            Formação para Investidor Profissional
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Descrição Principal */}
          <div className="bg-zinc-900 rounded p-8 mb-16 border border-zinc-800">
            <h2 className="text-2xl font-bold text-white mb-6">
              Sobre o FIP
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              O FIP é uma formação completa que transforma iniciantes em investidores profissionais. 
              Do básico ao avançado, você aprenderá análise fundamentalista, técnica, gestão de risco 
              e estratégias comprovadas para operar com consistência no mercado financeiro.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-zinc-900 p-6 rounded border border-zinc-800">
              <h3 className="text-lg font-bold text-white mb-3">
                Metodologia Completa
              </h3>
              <p className="text-zinc-400">
                Aprenda desde os fundamentos até as estratégias mais avançadas do mercado de criptomoedas.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded border border-zinc-800">
              <h3 className="text-lg font-bold text-white mb-3">
                Material Exclusivo
              </h3>
              <p className="text-zinc-400">
                Acesso ao Black Book Digital e ao Aplicativo Futuros Tech para complementar seus estudos.
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
                <BookOpenIcon className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium mb-1">Curso Completo</h4>
                  <p className="text-sm">Aulas do Básico ao Avançado sobre o Mercado de Criptomoedas com atualizações constantes.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <AcademicCapIcon className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium mb-1">Aplicativo Exclusivo</h4>
                  <p className="text-sm">Acesso ao Aplicativo do Futuros Tech</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <UserGroupIcon className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium mb-1">Black Book Digital</h4>
                  <p className="text-sm">Livro Digital Completo para Análise Gráfica no Day Trade.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <DocumentCheckIcon className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium mb-1">Certificado</h4>
                  <p className="text-sm">Certificado de conclusão após finalizar o treinamento</p>
                </div>
              </li>
            </ul>

            <div className="flex gap-4 justify-center">
              <a
                href="https://checkout.k17.com.br/pay/fip-normal"
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
  title: 'FIP - Formação para Investidor Profissional | K17',
  description: 'Transforme-se em um investidor profissional com nossa formação completa em criptomoedas. Do básico ao avançado.',
} 