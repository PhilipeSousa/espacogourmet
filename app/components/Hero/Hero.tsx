"use client";
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import prato1 from '@/public/images/hero1-50.jpg';
import prato2 from '@/public/images/hero2-50.jpg';
import Link from 'next/link';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const Hero = () => {
  return (
    <section className="relative">
      {/* Carousel Section */}
      <Carousel 
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        showDots={true}
        arrows={false}
        className="z-0"
      >
        {/* Slide 1 */}
        <div className="relative">
          <Image src={prato1} alt="Delicioso Prato 1" className="w-full h-[500px] object-cover" priority />
          <div className="absolute inset-0 flex flex-col justify-center items-center z-20 space-y-20">
            <h1 className="text-gray-100 text-6xl md:text-8xl font-bold mb-4 text-center"  style={{
                textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)',
                WebkitTextStroke: '2px black',
              }}>
              Bem-vindo ao Espaço Gourmet
            </h1>
            <a href="/almoco" 
               className="bg-accent text-2xl text-gray-100 px-6 py-3 rounded-full font-semibold hover:bg-creme transition-all duration-300 border-4 border-creme">Nosso Menu</a>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <Image 
            src={prato2} 
            alt="Delicioso Prato 2" 
            className="w-full h-[500px] object-cover object-bottom md:object-[0px_80%]"
            priority 
          />
         <div className="absolute inset-0 flex flex-col justify-center items-center z-20">
            <h1
              className="text-gray-100 text-5xl md:text-6xl font-bold mb-4 text-center pb-20"
              style={{
                textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)',
                WebkitTextStroke: '2px black',
              }}
            >
              Lanches Variados
            </h1>
            <Link
              href="/lanches"
              className="bg-accent text-gray-100 text-2xl px-6 py-3 rounded-full font-semibold hover:bg-creme transition-all duration-300 border-4 border-creme"
            >
              Cardápio
            </Link>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default Hero;
