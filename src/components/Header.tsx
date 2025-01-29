import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full p-3 md:p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="block w-20 md:w-24">
          <Image
            src="/logo.png"
            alt="Logo"
            width={96}
            height={32}
            className="w-auto h-6 md:h-8"
          />
        </Link>
        
        <a
          href="https://plataforma.k17.com.br/homepage"
          className="flex items-center gap-2 text-zinc-400 hover:text-white text-xs md:text-sm transition-colors"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          <span>Voltar para Plataforma</span>
        </a>
      </div>
    </header>
  );
} 