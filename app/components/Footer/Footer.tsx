import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6">
      <div className="w-11/12 max-w-5xl mx-auto border-b border-gray-700 border-opacity-50 pb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div>
          <div className="flex items-center space-x-3">
            <Image
              src="/images/mesa-de-jantar.png"
              alt="Restaurant Logo"
              className="w-12 h-12 sm:w-16 sm:h-16"
            />
            <h1 className="text-2xl sm:text-3xl text-gray-100 font-bold">
              Espaço Gourmet
            </h1>
          </div>
          <p className="text-gray-400 mt-3 text-base sm:text-lg">
            Espaço Gourmet antiga banca do Luis
          </p>
          <p className="text-red-400 text-lg sm:text-xl font-bold mt-3">
            ( 61 ) 9 9254-8494
          </p>
        </div>

        <div className="md:pt-4">
          <h1 className="text-xl sm:text-2xl text-white font-semibold uppercase mb-4">
            Horário de funcionamento
          </h1>
          <p className="text-gray-100 text-base sm:text-lg">
            Segunda à Sexta :{' '}
            <span className="text-yellow-300">
              10:40 da manhã às 18:00 da tarde
            </span>
          </p>
          <p className="text-gray-100 text-base sm:text-lg mt-2">
            Excepcionalmente, nos finais de semana em dias de evento.
          </p>
        </div>
      </div>

      <div className="text-center mt-3">
        <p className="text-gray-400 text-[16px]">
          © {new Date().getFullYear()} Espaço Gourmet. Todos os direitos reservados.
        </p>
        <p className="text-gray-400 text-[14px]">
          Desenvolvido por Philipe S. Barros.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
