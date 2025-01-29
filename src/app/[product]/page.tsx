import Link from 'next/link';
import Header from '@/components/Header';
import { Icon } from '@heroicons/react/24/outline';

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-black font-helvetica">
      <Header />
      {/* Hero Section */}
      <div className="h-[30vh] md:h-[40vh] flex items-center justify-center bg-zinc-900">
        <div className="text-center px-4">
          <h1 className="text-xl md:text-4xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            {/* Nome do produto */}
          </h1>
          <p className="text-sm md:text-lg text-zinc-400">
            {/* Subtítulo */}
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-6 md:py-16">
        <div className="max-w-3xl mx-auto">
          {/* Descrição Principal */}
          <div className="bg-zinc-900 rounded p-5 md:p-8 mb-6 md:mb-16 border border-zinc-800">
            <h2 className="text-base md:text-xl font-bold text-white mb-3 md:mb-6">
              Sobre o {/* Nome do produto */}
            </h2>
            <p className="text-xs md:text-base text-zinc-400 leading-relaxed">
              {/* Descrição */}
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-16">
            <div className="bg-zinc-900 p-4 md:p-6 rounded border border-zinc-800">
              <h3 className="text-sm md:text-lg font-bold text-white mb-2 md:mb-3">
                {/* Título do Feature */}
              </h3>
              <p className="text-xs md:text-sm text-zinc-400">
                {/* Descrição do Feature */}
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-zinc-900 rounded p-5 md:p-8 border border-zinc-800">
            <h2 className="text-base md:text-xl font-bold text-white mb-4 md:mb-6 text-center">
              O que você recebe
            </h2>
            <ul className="text-zinc-400 mb-6 md:mb-8 space-y-4 md:space-y-6 max-w-md mx-auto">
              <li className="flex items-start gap-3 md:gap-4">
                <Icon className="w-4 h-4 md:w-5 md:h-5 text-white flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs md:text-sm font-medium text-white mb-0.5 md:mb-1">
                    {/* Título do item */}
                  </h4>
                  <p className="text-xs md:text-sm leading-relaxed text-zinc-400">
                    {/* Descrição do item */}
                  </p>
                </div>
              </li>
            </ul>

            {/* Botões */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center">
              <a
                href="/* Link do checkout */"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 md:px-8 py-2 md:py-3 bg-white text-black rounded hover:bg-zinc-200 transition-colors text-xs md:text-sm font-medium text-center"
              >
                Assinar
              </a>
              <Link
                href="/"
                className="px-4 md:px-8 py-2 md:py-3 bg-zinc-800 text-white rounded hover:bg-zinc-700 transition-colors text-xs md:text-sm font-medium text-center"
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