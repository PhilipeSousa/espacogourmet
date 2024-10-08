import React from 'react';
import Papa from 'papaparse';
import Image from 'next/image';

interface MenuItem {
  'Tem todo dia'?: string;
  [key: string]: string | undefined;
  'Preço do Almoco'?: string;
  'Opção no preço'?: string;
}

async function fetchMenuData(): Promise<MenuItem[]> {
  const url = process.env.VAR_ALMOCO;

  if (!url) {
    throw new Error('A variável de ambiente não está definida.');
  }

  const response = await fetch(url, { cache: 'no-store' });
  const csvData = await response.text();
  const parsedData = Papa.parse(csvData, { header: true });
  return parsedData.data as MenuItem[];
}

function getToday() {
  const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const todayIndex = new Date().getDay();
  return daysOfWeek[todayIndex];
}

export default async function Almoco() {
  const menuData = await fetchMenuData();
  const today = getToday();

  const pratosTodoDia = menuData.filter((item: MenuItem) => item['Tem todo dia']);
  const pratosDoDia = menuData.filter((item: MenuItem) => item[today]);

  const opcoesDeCompra = menuData.map((item: MenuItem) => ({
    preco: item['Preço do Almoco'],
    opcao: item['Opção no preço'],
  })).filter((item) => item.preco && item.opcao);

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero1-50.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen p-4">
        <h1 className="text-4xl font-bold text-white">Self-Service</h1>

        <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 mt-6 max-w-4xl w-full flex flex-col md:flex-row">

          <div className="flex-1 mb-4 md:mr-4">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-gray-800 pb-2">O que temos hoje no Buffet! ({today})</h2>
              <ul className="list-disc list-inside text-gray-700 text-2xl">
                {pratosTodoDia.map((item, index) => (
                  <li key={index}>{item['Tem todo dia']}</li>
                ))}
                {pratosDoDia.map((item, index) => (
                  <li key={index}>{item[today]}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-gray-800 pt-6">Preços</h2>
              <ul className="list-disc list-inside text-gray-700 text-2xl pt-2">
                {opcoesDeCompra.map((item, index) => (
                  <li key={index}>
                    <span>{item.opcao}</span>: <span className='text-black font-bold'>R$ {item.preco}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex md:flex-col items-center pt-2">
            <Image src="/images/marmita_card.png" alt="Prato 1" className="rounded-lg w-[6rem] h-[6rem] md:w-32 md:h-32 object-cover mb-4 md:ml-6" />
            <Image src="/images/tilapia.jpg" alt="Prato 2" className="rounded-lg  w-[6rem] h-[6rem] md:w-32 md:h-32 object-cover mb-4 ml-6" />
            <Image src="/images/contra-file.jpg" alt="Prato 3" className="rounded-lg  w-[6rem] h-[6rem] md:w-32 md:h-32 object-cover mb-4 ml-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
