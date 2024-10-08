"use client"
import Hero from './Hero/Hero';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import LoadingScreen from '../loading';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImages = () => {
      
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 100); 

      return () => clearTimeout(timer); 
    };

    loadImages();
  }, []);

  if (isLoading) {
    return <LoadingScreen />; 
  }
  return (
    <div className="min-h-screen text-2xl">
      <Hero />

      <div className="flex flex-col items-center justify-center px-4 py-8 sm:py-12 bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center">Sobre</h2>
        <p className="text-base sm:text-lg mb-4 sm:mb-6 text-center">
          Com capacidade para atender nossos clientes com conforto e qualidade, 
          nosso espaço está localizado na praça de alimentação do anexo do Palácio do Buriti, 
          oferecendo opções deliciosas para todos os gostos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
          <div className="w-full sm:w-1/2 p-4">
            <Image
              src="" 
              alt="Foto externa do Espaço Gourmet"
              width={500}
              height={300}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="w-full sm:w-1/2 p-4">
            <Image
              src="" 
              alt="Foto interna do Espaço Gourmet"
              width={500}
              height={300}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
