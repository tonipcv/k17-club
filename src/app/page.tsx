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
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center mb-8 md:mb-16">
          Produtos
        </h1>
        
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
