'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: '회사소개', href: '#about' },
  { name: '렌탈솔루션', href: '#services' },
  { name: '렌탈뉴스', href: '#news' },
  { name: '고객 사례', href: '#cases' },
  { name: '무료상담', href: '#contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => {
      // 스크롤 여부 확인
      setScrolled(window.scrollY > 40);
      
      // 현재 섹션 확인
      const sections = ['hero', 'about', 'services', 'news', 'cases', 'contact'];
      let currentActive = 'hero';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // 헤더 높이를 고려하여 화면에 보이는 섹션 찾기 (헤더 높이 100px)
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentActive = section;
            break;
          }
        }
      }
      
      setCurrentSection(currentActive);
    };
    
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  
  // 배경색 설정 함수
  const getHeaderBackground = () => {
    if (!scrolled) return 'bg-transparent';
    
    // 각 섹션별 배경색 설정
    switch (currentSection) {
      case 'hero':
        return 'bg-transparent backdrop-blur-sm';
      case 'about':
        return 'bg-[#000000] backdrop-blur-sm';
      case 'services':
        return 'bg-[#0d1528] backdrop-blur-sm';
      case 'news':
        return 'bg-black backdrop-blur-sm';
      case 'cases':
        return 'bg-gradient-to-b from-black to-black/90 backdrop-blur-sm';
      case 'contact':
        return 'bg-[#000000] backdrop-blur-sm';
      default:
        return 'bg-transparent backdrop-blur-sm';
    }
  };
  
  // 메뉴 영역 외부 클릭 시 메뉴 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (mobileMenuOpen && 
          mobileMenuRef.current && 
          !mobileMenuRef.current.contains(event.target as Node) &&
          mobileButtonRef.current &&
          !mobileButtonRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside as EventListener);
    document.addEventListener('touchstart', handleClickOutside as EventListener);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside as EventListener);
      document.removeEventListener('touchstart', handleClickOutside as EventListener);
    };
  }, [mobileMenuOpen]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      // 헤더 높이를 고려한 스크롤 위치 계산
      const headerHeight = 100; // 헤더 높이 (px)
      let elementPosition = element.getBoundingClientRect().top;
      let offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      // 모든 섹션에 대해 스크롤 위치를 약간 더 내려오게 조정
      if (href === '#about' || href === '#services' || href === '#news' || href === '#cases' || href === '#contact') {
        offsetPosition += 50; // 50px 더 내려오게 조정
      }
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${getHeaderBackground()}`}>
      {/* 배경 그라데이션 오버레이 - 메인 화면에서만 표시 */}
      {currentSection === 'hero' && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent transition-opacity duration-300 opacity-30"></div>
      )}
      
      {mounted && (
        <nav className="container mx-auto flex items-center justify-between py-6 px-6 relative z-10" aria-label="Global">
          <div className="flex lg:flex-1 w-full lg:w-auto justify-center lg:justify-start">
            <a href="#hero" className="p-0" onClick={(e) => handleScrollTo(e, '#hero')}>
              <span className="text-4xl md:text-5xl font-bold tracking-wide">
                <span className="text-purple-500">REN</span>
                <span className="text-[#11b77f] tracking-tighter">' T</span>
                <span className="text-white ml-3 md:ml-6 text-2xl md:text-3xl font-light">렌잇</span>
              </span>
            </a>
          </div>
          <div className="absolute right-6 lg:hidden flex items-center">
            <button
              ref={mobileButtonRef}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-purple-400 hover:text-purple-300 transition-colors"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">메뉴 열기</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-9 w-9" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-9 w-9" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="flex flex-row items-center gap-x-8">
              {navigation.slice(0, -1).map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="group relative text-xl font-light leading-6 text-white hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </a>
              ))}
              <a
                key={navigation[navigation.length-1].name}
                href={navigation[navigation.length-1].href}
                onClick={(e) => handleScrollTo(e, navigation[navigation.length-1].href)}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-400 text-white font-semibold shadow hover:from-purple-600 hover:to-purple-500 transition-all duration-200 text-lg cursor-pointer"
              >
                {navigation[navigation.length-1].name}
              </a>
            </div>
          </div>
        </nav>
      )}
      {/* 모바일 메뉴 */}
      <div 
        ref={mobileMenuRef}
        className={`lg:hidden absolute left-0 right-0 top-full w-full z-[100] transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <div className="bg-black/70 backdrop-blur-lg border-b border-purple-900/30 shadow-lg px-6 py-6">
          <div className="flex flex-col gap-3">
            {navigation.slice(0, -1).map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="block rounded-lg px-4 py-4 text-xl font-light leading-7 text-white hover:text-white transition-all duration-300 relative group overflow-hidden cursor-pointer"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-white group-hover:w-full transition-all duration-300 ease-in-out"></span>
                <span className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
              </a>
            ))}
            <a
              key={navigation[navigation.length-1].name}
              href={navigation[navigation.length-1].href}
              onClick={(e) => handleScrollTo(e, navigation[navigation.length-1].href)}
              className="mt-3 block rounded-full bg-gradient-to-r from-purple-500 to-purple-400 px-5 py-4 text-center text-xl font-bold text-white shadow hover:from-purple-600 hover:to-purple-500 transition-all duration-200 cursor-pointer"
            >
              {navigation[navigation.length-1].name}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
} 