import React from 'react';
import Papa from 'papaparse';

interface LancheItem {
  lanche: string;
  preco: string;
}

interface BebidaItem {
  bebida: string;
  'preco bebidas': string;
}

async function fetchMenuData(): Promise<LancheItem[]> {
  const url = process.env.VAR_LANCHES;

  if (!url) {
    throw new Error('A variável de ambiente não está definida.');
  }

  const response = await fetch(url, { cache: 'no-store' });
  const csvData = await response.text();
  const parsedData = Papa.parse(csvData, { header: true });
  return parsedData.data as LancheItem[]; 
}

async function fetchMenuDataBebidas(): Promise<BebidaItem[]> {
  const url = process.env.VAR_BEBIDAS;

  if (!url) {
    throw new Error('A variável de ambiente não está definida.');
  }

  const response = await fetch(url, { cache: 'no-store' });
  const csvData = await response.text();
  const parsedData = Papa.parse(csvData, { header: true });
  return parsedData.data as BebidaItem[]; 
}

export default async function Lanches() {
  
  const lanchesData = await fetchMenuData();
  const bebidasData = await fetchMenuDataBebidas();

  const lanches = lanchesData.map((item: LancheItem) => ({
    name: item.lanche,
    price: item.preco,
  }));

  const bebidas = bebidasData.map((item: BebidaItem) => ({
    name: item.bebida,
    price: item['preco bebidas'],
  }));

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Cardápio
        </h2>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-green-600 rounded-lg mb-4">
            Lanches
          </h3>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {lanches.map((item, index) => (
              <li key={index} className="flex justify-between items-center bg-white rounded-lg shadow-lg p-4">
                <span className="text-lg font-semibold text-gray-800">{item.name}</span>
                <span className="text-indigo-600 text-2xl font-bold">R$ {item.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-green-600 mb-4">
            Bebidas
          </h3>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {bebidas.map((item, index) => (
              <li key={index} className="flex justify-between items-center bg-white rounded-lg shadow-lg p-4">
                <span className="text-lg font-semibold text-gray-800">{item.name}</span>
                <span className="text-indigo-600 text-2xl font-bold"> R$ {item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
