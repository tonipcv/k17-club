import Image from "next/image";
import Link from "next/link";
import Header from '@/components/Header';

export default function Home() {
  const products = [
    {
      title: "ARS",
      description: "Análises e Recomendações Semanais para o mercado cripto",
      link: "https://checkout.k17.com.br/subscribe/ars",
      path: "/ars",
    },
    {
      title: "PRIVATE",
      description: "Grupo seleto de investidores com acesso a estratégias avançadas",
      link: "https://checkout.k17.com.br/pay/private-link",
      path: "/private",
    },
    {
      title: "FIP",
      description: "Formação para Investidor Profissional",
      link: "https://checkout.k17.com.br/pay/fip-normal",
      path: "/fip",
    },
    {
      title: "PROJETO MEME",
      description: "Estratégias para lucrar com moedas meme de forma inteligente",
      link: "https://checkout.k17.com.br/subscribe/projeto-meme-2",
      path: "/meme",
    }
  ];

  return (
    <div className="min-h-screen bg-black font-helvetica">
      <Header />
      <main className="container mx-auto px-4 py-24">
        {/* Gráfico Minimalista de Candlesticks */}
        <div className="w-full max-w-lg mx-auto mb-16">
          <svg
            viewBox="0 0 400 120"
            className="w-full h-auto"
          >
            {/* Grid Lines */}
            <g className="stroke-zinc-800/20" strokeWidth="0.5">
              <line x1="0" y1="30" x2="400" y2="30" />
              <line x1="0" y1="60" x2="400" y2="60" />
              <line x1="0" y1="90" x2="400" y2="90" />
            </g>

            {/* Candlesticks */}
            <g className="stroke-current">
              {/* Candle 1 - Verde */}
              <line x1="50" y1="40" x2="50" y2="80" className="stroke-green-500" strokeWidth="1" />
              <rect x="45" y="50" width="10" height="20" className="fill-green-500" />

              {/* Candle 2 - Vermelho */}
              <line x1="100" y1="30" x2="100" y2="70" className="stroke-red-500" strokeWidth="1" />
              <rect x="95" y="30" width="10" height="20" className="fill-red-500" />

              {/* Candle 3 - Verde */}
              <line x1="150" y1="50" x2="150" y2="90" className="stroke-green-500" strokeWidth="1" />
              <rect x="145" y="60" width="10" height="20" className="fill-green-500" />

              {/* Candle 4 - Verde */}
              <line x1="200" y1="35" x2="200" y2="75" className="stroke-green-500" strokeWidth="1" />
              <rect x="195" y="45" width="10" height="20" className="fill-green-500" />

              {/* Candle 5 - Vermelho */}
              <line x1="250" y1="40" x2="250" y2="80" className="stroke-red-500" strokeWidth="1" />
              <rect x="245" y="40" width="10" height="20" className="fill-red-500" />

              {/* Candle 6 - Verde */}
              <line x1="300" y1="45" x2="300" y2="85" className="stroke-green-500" strokeWidth="1" />
              <rect x="295" y="55" width="10" height="20" className="fill-green-500" />

              {/* Candle 7 - Verde */}
              <line x1="350" y1="30" x2="350" y2="70" className="stroke-green-500" strokeWidth="1" />
              <rect x="345" y="40" width="10" height="20" className="fill-green-500" />
            </g>

            {/* Volume Bars */}
            <g className="opacity-30">
              <rect x="45" y="100" width="10" height="10" className="fill-green-500" />
              <rect x="95" y="100" width="10" height="15" className="fill-red-500" />
              <rect x="145" y="100" width="10" height="8" className="fill-green-500" />
              <rect x="195" y="100" width="10" height="12" className="fill-green-500" />
              <rect x="245" y="100" width="10" height="7" className="fill-red-500" />
              <rect x="295" y="100" width="10" height="14" className="fill-green-500" />
              <rect x="345" y="100" width="10" height="16" className="fill-green-500" />
            </g>
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <div key={product.title} className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 md:p-8 hover:bg-zinc-800 transition-colors">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
                {product.title}
              </h2>
              <p className="text-base md:text-lg text-zinc-400 mb-6 md:mb-8">
                {product.description}
              </p>
              <div className="flex gap-4">
                <Link
                  href={product.path}
                  className="px-6 py-3 bg-white text-black rounded hover:bg-zinc-200 transition-colors text-sm font-medium flex-1 text-center"
                >
                  Saiba mais
                </Link>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-zinc-800 text-white border border-zinc-700 rounded hover:bg-zinc-700 transition-colors text-sm font-medium flex-1 text-center"
                >
                  Assinar
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
