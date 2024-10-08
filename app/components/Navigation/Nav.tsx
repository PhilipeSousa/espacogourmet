import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  openNav: ()=> void
}

const Nav = ({openNav}:Props) => {

  return (
    <div className='h-[10vh] bg-white shadow-md'>
      <div className='sm:w-[90%] w-[95%] mx-auto flex h-full items-center justify-between'>
        
        <div className='flex items-center space-x-2'>
          <Image
            src="/images/mesa-de-jantar.png" 
            alt="Restaurant Logo" 
            className='w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem]'
          />
          <h1 className='text-[24px] sm:text-[32px] text-gray-800'>
            <Link href="/">Espaço Gourmet</Link>
          </h1>
        </div>

        
        <div className='flex items-center space-x-4'>
          <ul className='hidden lg:flex items-center space-x-8'>
            <li className='text-[20px] font-medium hover:text-red-600'>
              <Link href="/almoco">Almoço</Link>
            </li>
            <li className='text-[20px] font-medium hover:text-red-600'>
              <Link href="/lanches">Lanches</Link>
            </li>
            <li className='text-[20px] font-medium hover:text-red-600'>
              <Link href="/sobre">Sobre</Link>
            </li>
          </ul>

        
          <div onClick={openNav}
               className='lg:hidden text-[2.0rem] text-black'>
            &#9776;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
