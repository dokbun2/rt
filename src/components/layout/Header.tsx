'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: '회사소개', href: '#hero' },
  { name: '렌탈솔루션', href: '#services' },
  { name: '렌탈뉴스', href: '#news' },
  { name: '고객 사례', href: '#cases' },
  { name: '문의하기', href: '#contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/70 backdrop-blur-md shadow-lg' : 'bg-gray-900/30 backdrop-blur-sm'}`}>
      {mounted && (
        <nav className="container mx-auto flex items-center justify-between py-6 px-6" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#hero" className="p-0" onClick={(e) => handleScrollTo(e, '#hero')}>
              <span className="text-4xl font-bold tracking-wide">
                <span className="text-purple-500">REN</span>
                <span className="text-purple-300 tracking-tighter">' T</span>
                <span className="text-white ml-2">렌잇</span>
              </span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">메뉴 열기</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="flex flex-row items-center gap-x-8">
              {navigation.slice(0, -1).map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="group relative text-xl font-semibold leading-6 text-white hover:text-purple-300 transition-colors duration-200 cursor-pointer"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute left-0 -bottom-1 w-full h-1 bg-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </a>
              ))}
              <a
                key={navigation[navigation.length-1].name}
                href={navigation[navigation.length-1].href}
                onClick={(e) => handleScrollTo(e, navigation[navigation.length-1].href)}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-400 text-white font-semibold shadow hover:from-purple-600 hover:to-purple-500 transition-all duration-200 text-xl cursor-pointer"
              >
                {navigation[navigation.length-1].name}
              </a>
            </div>
          </div>
        </nav>
      )}
      {/* 모바일 메뉴 */}
      <div className={`lg:hidden absolute left-0 right-0 top-full w-full z-[100] transition-all duration-300 ${mobileMenuOpen ? '' : 'hidden'}`}>
        <div className="bg-gray-900/95 backdrop-blur-md border-b border-purple-900/30 shadow-lg px-6 py-4">
          <div className="flex justify-end mb-4">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">메뉴 닫기</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {navigation.slice(0, -1).map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="block rounded-lg px-3 py-3 text-xl font-semibold leading-7 text-white hover:bg-gray-800 transition-colors hover:border-b-4 hover:border-purple-400 border-b-0 cursor-pointer"
              >
                {item.name}
              </a>
            ))}
            <a
              key={navigation[navigation.length-1].name}
              href={navigation[navigation.length-1].href}
              onClick={(e) => handleScrollTo(e, navigation[navigation.length-1].href)}
              className="mt-2 block rounded-full bg-gradient-to-r from-purple-500 to-purple-400 px-5 py-3 text-center text-xl font-bold text-white shadow hover:from-purple-600 hover:to-purple-500 transition-all duration-200 cursor-pointer"
            >
              {navigation[navigation.length-1].name}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
} 