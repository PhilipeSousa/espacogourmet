import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navStyle = showNav ? 'translate-x-0' : 'translate-x-[-100%]';
  return (
    <div
      className={`fixed ${navStyle} right-0 transition-all duration-500 left-0 top-0 bottom-0 h-[100vh] bg-[#000000e0] z-[1002]`}
    >
      <div
        onClick={closeNav}
        className='absolute top-[2rem] text-[2.0rem] right-[2rem] w-[2rem] h-[2rem] text-white'
      >
        &#10006;
      </div>

      <div
        className={`bg-emerald-700 ${navStyle} transition-all duration-500 delay-200 flex flex-col w-[70%] h-[100%]`}
      >
        <div className='flex items-center space-x-2 px-6 py-4 shadow-md'>
          <Image
            src='/images/mesa-de-jantar.png'
            alt='Restaurant Logo'
            className='w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem]'
          />
          <h1 className='text-[24px] sm:text-[32px] text-gray-800'>
            Espaço Gourmet
          </h1>
        </div>

        <ul className='space-y-8 mt-8 px-6 text-white'>
          <li className='text-[30px] font-medium hover:text-red-600'>
            <Link href='/almoco' onClick={closeNav} >Almoço</Link>
          </li>
          <li className='text-[30px] font-medium hover:text-red-600'>
            <Link href='/lanches' onClick={closeNav}>Lanches</Link>
          </li>
          <li className='text-[30px] font-medium hover:text-red-600'>
            <Link href='/sobre' onClick={closeNav} >Sobre</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
