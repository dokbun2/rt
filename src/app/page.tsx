import Link from 'next/link';
import MainHero from "@/components/sections/MainHero";
import { motion } from 'framer-motion';
import Image from 'next/image';
import ScrollSection from '@/components/ui/ScrollSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="bg-black text-white h-full overflow-y-auto">
      {/* Hero section */}
      <div className="min-h-screen flex flex-col">
        <MainHero />
      </div>
      
      {/* 회사소개 섹션 */}
      <ScrollSection id="about" className="bg-black pt-32 pb-16 md:pb-24" enableSnap={false} fullHeight={false}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center lg:text-left">
                <span className="text-white">회사 </span>
                <span className="text-purple-500 inline-block ml-1 md:ml-2">소개</span>
              </h2>
              <p className="text-lg text-gray-300 mb-4 text-center lg:text-left">
                렌잇은 렌탈 비즈니스 설립부터 운영까지 필요한 모든 전문 서비스를 제공합니다.
                10년 이상의 경험을 바탕으로 고객님의 성공적인 비즈니스를 위해 최선을 다하고 있습니다.
              </p>
              <p className="text-lg text-gray-300 mb-6 text-center lg:text-left">
                시장 조사부터 비즈니스 모델 구축, 시스템 개발까지 종합적인 컨설팅 서비스로
                고객의 니즈에 맞는 최적의 솔루션을 제공합니다.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-base text-gray-200">전문성</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-base text-gray-200">신뢰성</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-base text-gray-200">효율성</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="text-base text-gray-200">고객 중심</span>
                </div>
              </div>
              
            </div>
            
            <div className="w-full lg:w-1/2 relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-purple-900/30">
                <div className="aspect-[16/9] relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-transparent z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1000" 
                    alt="렌잇 회사 이미지" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900 to-transparent">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                      <span className="text-base font-bold text-white">렌탈 비즈니스의 전문가</span>
                      <span className="text-sm text-purple-300">10년 이상의 경험</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-purple-600 rounded-lg p-3 shadow-xl hidden md:block">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-white">200+</span>
                  <span className="block text-xs text-white/80">성공 사례</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* 왜 렌잇인가요? 섹션 추가 */}
          <div className="mt-16 md:mt-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              <span className="text-white">왜 </span>
              <span className="text-purple-500 inline-block">렌잇</span>
              <span className="text-white">인가요?</span>
            </h2>
            
            <p className="text-center text-gray-300 text-base mb-8 max-w-3xl mx-auto">
              렌탈 비즈니스의 성공을 위한 최고의 선택,<br/>
              렌잇만의 특별함을 확인하세요.
            </p>
            
            {/* 특징 카드 섹션 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-14">
              {/* 특징 카드 1 */}
              <div className="bg-black/40 rounded-xl p-5 md:p-6 border border-purple-900/20 group hover:border-purple-500/40 transition-all duration-300">
                <div className="w-14 h-14 bg-violet-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-violet-500 transition-all duration-300 shadow-lg shadow-violet-700/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-white text-center">업계 전문 지식</h3>
                <p className="text-sm md:text-base text-gray-300 text-center">10년 이상의 렌탈 비즈니스 경험을 바탕으로 시장 트렌드와 효과적인 전략을 제공합니다.</p>
              </div>
              
              {/* 특징 카드 2 */}
              <div className="bg-black/40 rounded-xl p-5 md:p-6 border border-purple-900/20 group hover:border-purple-500/40 transition-all duration-300">
                <div className="w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-indigo-500 transition-all duration-300 shadow-lg shadow-indigo-700/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-white text-center">맞춤형 솔루션</h3>
                <p className="text-sm md:text-base text-gray-300 text-center">각 비즈니스의 특성과 요구사항에 맞는 최적화된 솔루션을 개발하고 제공합니다.</p>
              </div>
              
              {/* 특징 카드 3 */}
              <div className="bg-black/40 rounded-xl p-5 md:p-6 border border-purple-900/20 group hover:border-purple-500/40 transition-all duration-300">
                <div className="w-14 h-14 bg-cyan-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-cyan-500 transition-all duration-300 shadow-lg shadow-cyan-700/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-white text-center">지속적인 지원</h3>
                <p className="text-sm md:text-base text-gray-300 text-center">비즈니스 설립 이후에도 지속적인 컨설팅과 기술 지원으로 성장을 돕습니다.</p>
              </div>
            </div>
            
            {/* 통계 섹션 */}
            <div className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-6 py-8 px-5 md:px-6 rounded-xl bg-black/30 border border-purple-900/30 shadow-lg shadow-purple-900/5">
              {/* 통계 항목 1 */}
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-500 mb-2">98%</div>
                <div className="text-sm md:text-base text-gray-300">고객 만족도</div>
              </div>
              
              {/* 통계 항목 2 */}
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">200+</div>
                <div className="text-sm md:text-base text-gray-300">성공 사례</div>
              </div>
              
              {/* 통계 항목 3 */}
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">10년+</div>
                <div className="text-sm md:text-base text-gray-300">업계 경험</div>
              </div>
            </div>
          </div>
        </div>
      </ScrollSection>
      
      {/* 서비스 섹션 */}
      <ScrollSection id="services" className="bg-[#0d1528] pt-20 md:pt-24 pb-16 md:pb-24" enableSnap={false}>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="text-white">렌탈 </span>
            <span className="text-purple-500 inline-block ml-1 md:ml-2">솔루션</span>
          </h2>
          <p className="text-center text-gray-300 text-xl mb-16 max-w-3xl mx-auto">
            렌탈 비즈니스의 시작부터 성장까지,<br/>
            전문적인 컨설팅으로 넓어드립니다.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* 서비스 카드 1 */}
            <div className="bg-gradient-to-br from-purple-900/40 to-black rounded-2xl overflow-hidden shadow-xl group transition-transform hover:scale-105 border border-purple-500/30 hover:border-purple-500/50">
              <div className="h-32 flex items-center justify-center bg-gradient-to-r from-purple-900/60 to-indigo-900/60">
                <div className="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center mb-0 group-hover:bg-violet-500 transition-colors shadow-lg shadow-violet-700/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors text-center">렌탈사 설립</h3>
                <p className="text-gray-300 mb-6 text-center">렌탈사설립, 전산시스템구축, 조직 셋팅 등, 초기 운영전략까지 렌탈사 설립의 모든 과정을 지원합니다.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-300">법인설립 전반</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-300">전산시스템구축</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-300">각종계약서 작성</span>
                  </li>
                </ul>
              </div>
              <div className="px-6 pb-6">
                <button className="w-full py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition-colors shadow-md hover:shadow-lg shadow-violet-900/30">자세히 보기</button>
              </div>
            </div>
            
            {/* 서비스 카드 2 */}
            <div className="bg-gradient-to-br from-indigo-900/40 to-black rounded-2xl overflow-hidden shadow-xl group transition-transform hover:scale-105 border border-indigo-500/30 hover:border-indigo-500/50">
              <div className="h-32 flex items-center justify-center bg-gradient-to-r from-indigo-900/60 to-blue-900/60">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-0 group-hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-700/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-indigo-300 transition-colors text-center">렌탈업무 제휴</h3>
                <p className="text-gray-300 mb-6 text-center">국내 렌탈사의 파트너십 구축과 효율적인 업무 제휴를 통해 렌탈사와 협업 타사 대비 경쟁력을 강화.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-300">전략적 파트너 발굴</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-300">계약 조건 협상 지원</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-300">협력 관계 구축 컨설팅</span>
                  </li>
                </ul>
              </div>
              <div className="px-6 pb-6">
                <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors shadow-md hover:shadow-lg shadow-indigo-900/30">자세히 보기</button>
              </div>
            </div>
            
            {/* 서비스 카드 3 */}
            <div className="bg-gradient-to-br from-cyan-900/40 to-black rounded-2xl overflow-hidden shadow-xl group transition-transform hover:scale-105 border border-cyan-500/30 hover:border-cyan-500/50">
              <div className="h-32 flex items-center justify-center bg-gradient-to-r from-cyan-900/60 to-teal-900/60">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mb-0 group-hover:bg-cyan-500 transition-colors shadow-lg shadow-cyan-700/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors text-center">렌탈시스템 구축</h3>
                <p className="text-gray-300 mb-6 text-center">렌탈전산시스템 구축을 통해 고객 비용 절감 및 효율적인 렌탈 관리를 제공합니다.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-300">맞춤형 렌탈 관리 시스템</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-300">재고 및 자산 관리 솔루션</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-300">고객 관리 및 결제 시스템</span>
                  </li>
                </ul>
              </div>
              <div className="px-6 pb-6">
                <button className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-colors shadow-md hover:shadow-lg shadow-cyan-900/30">자세히 보기</button>
              </div>
            </div>
            
            {/* 서비스 카드 4 */}
            <div className="bg-gradient-to-br from-amber-800/40 to-black rounded-2xl overflow-hidden shadow-xl group transition-transform hover:scale-105 border border-amber-500/30 hover:border-amber-500/50">
              <div className="h-32 flex items-center justify-center bg-gradient-to-r from-amber-800/60 to-orange-900/60">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-0 group-hover:bg-amber-500 transition-colors shadow-lg shadow-amber-700/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-amber-300 transition-colors text-center">렌탈 부업</h3>
                <p className="text-gray-300 mb-6 text-center">렌탈 단기 부업을 희망하시는 분들 중 선별하여 월 100만원 벌수있도록 무료워셔비스를 무료로 제공.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-300">무료 부업 컨설팅</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-300">월 100만원 프로젝트</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-300">체계적인 운영 모델 구축</span>
                  </li>
                </ul>
              </div>
              <div className="px-6 pb-6">
                <button className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-lg transition-colors shadow-md hover:shadow-lg shadow-amber-900/30">자세히 보기</button>
              </div>
            </div>
          </div>
        </div>
      </ScrollSection>
      
      {/* 뉴스 섹션 */}
      <ScrollSection id="news" className="bg-black pt-20 md:pt-24 pb-16 md:pb-24" enableSnap={false}>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="text-white">렌탈 </span>
            <span className="text-purple-500 inline-block ml-1 md:ml-2">뉴스</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 뉴스 내용 */}
            <div className="bg-black/60 rounded-xl overflow-hidden shadow-lg group">
              <div className="h-48 bg-purple-900/30 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-purple-600 text-white text-base font-semibold px-3 py-1 rounded-full">업계 소식</span>
                  <p className="text-white font-semibold mt-2 text-lg">2023년 06월 15일</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">렌탈 시장, 2023년 20% 성장 전망</h3>
                <p className="text-xl text-gray-300 mb-4">코로나19 이후 소유보다 경험을 중시하는 소비 트렌드가 확산되며 렌탈 시장이 급성장하고 있습니다.</p>
                <a href="#" className="text-xl text-purple-400 font-semibold hover:text-purple-300 transition-colors">자세히 보기 →</a>
              </div>
            </div>
            
            <div className="bg-black/60 rounded-xl overflow-hidden shadow-lg group">
              <div className="h-48 bg-purple-900/30 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-purple-600 text-white text-base font-semibold px-3 py-1 rounded-full">기술 동향</span>
                  <p className="text-white font-semibold mt-2 text-lg">2023년 05월 22일</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">AI 기반 렌탈 관리 시스템 출시</h3>
                <p className="text-xl text-gray-300 mb-4">인공지능을 활용한 새로운 렌탈 관리 시스템이 출시되어 재고 예측 및 고객 관리 효율이 크게 향상될 전망입니다.</p>
                <a href="#" className="text-xl text-purple-400 font-semibold hover:text-purple-300 transition-colors">자세히 보기 →</a>
              </div>
            </div>
            
            <div className="bg-black/60 rounded-xl overflow-hidden shadow-lg group">
              <div className="h-48 bg-purple-900/30 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-purple-600 text-white text-base font-semibold px-3 py-1 rounded-full">정책 변화</span>
                  <p className="text-white font-semibold mt-2 text-lg">2023년 04월 10일</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">렌탈 업계 세제 혜택 확대</h3>
                <p className="text-xl text-gray-300 mb-4">정부가 렌탈 업계 활성화를 위한 세제 혜택을 확대하기로 결정했습니다. 이는 신규 창업자들에게 큰 기회가 될 전망입니다.</p>
                <a href="#" className="text-xl text-purple-400 font-semibold hover:text-purple-300 transition-colors">자세히 보기 →</a>
              </div>
            </div>
          </div>
        </div>
      </ScrollSection>
      
      {/* 고객 사례 섹션 */}
      <ScrollSection id="cases" className="bg-gradient-to-b from-black to-black/90 pt-20 md:pt-24 pb-16 md:pb-24" enableSnap={false}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-center">
            <span className="text-white">고객 </span>
            <span className="text-purple-500 inline-block ml-1 md:ml-2">사례</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* 고객 사례 내용 */}
            <div className="bg-black/60 rounded-xl p-6 md:p-8 shadow-lg border border-purple-900/20 transition-all duration-300 group hover:border-purple-500/40">
              <div className="flex items-center mb-5 md:mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">A 렌탈</h3>
                  <p className="text-lg text-gray-400">가전제품 렌탈</p>
                </div>
              </div>
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                "렌잇의 컨설팅을 통해 6개월 만에 매출이 3배 증가했습니다. 특히 렌탈 관리 시스템 도입 후 업무 효율이 크게 향상되었습니다."
              </p>
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-400 ml-2 text-base md:text-lg">CEO 김민수</span>
              </div>
            </div>
            
            <div className="bg-black/60 rounded-xl p-6 md:p-8 shadow-lg border border-purple-900/20 transition-all duration-300 group hover:border-purple-500/40">
              <div className="flex items-center mb-5 md:mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">B</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">B 렌탈</h3>
                  <p className="text-lg text-gray-400">사무기기 렌탈</p>
                </div>
              </div>
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                "렌탈 비즈니스를 시작할 때 많은 어려움이 있었지만, 렌잇의 체계적인 컨설팅 덕분에 안정적으로 사업을 운영할 수 있게 되었습니다."
              </p>
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-400 ml-2 text-base md:text-lg">이사 박지영</span>
              </div>
            </div>
            
            <div className="bg-black/60 rounded-xl p-6 md:p-8 shadow-lg border border-purple-900/20 transition-all duration-300 group hover:border-purple-500/40">
              <div className="flex items-center mb-5 md:mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">C 렌탈</h3>
                  <p className="text-lg text-gray-400">생활용품 렌탈</p>
                </div>
              </div>
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                "렌잇의 파트너십 프로그램을 통해 다양한 공급업체와 연결되어 상품 라인업을 크게 확장할 수 있었습니다. 고객 만족도도 함께 상승했습니다."
              </p>
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-400 ml-2 text-base md:text-lg">대표 최준호</span>
              </div>
            </div>
          </div>
        </div>
      </ScrollSection>
      
      {/* 문의하기 섹션 */}
      <div id="contact" className="w-full flex items-center justify-center bg-gradient-to-b from-black to-gray-900/80 pt-15 md:pt-20 pb-16 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="w-full max-w-3xl mx-auto">
            <div className="bg-[#131313] rounded-xl shadow-2xl overflow-hidden border border-purple-900/20 shadow-purple-900/10">
              <div className="p-6 md:p-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-10 text-center">
                  <span className="text-purple-500">무료상담 </span>
                  <span className="text-white inline-block">신청하기</span>
                </h2>
                <form className="space-y-5 md:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-lg font-medium text-gray-300 mb-2">이름 <span className="text-purple-500">*</span></label>
                    <input type="text" id="name" placeholder="이름을 입력하세요" className="w-full px-5 py-3 md:py-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black text-lg shadow-sm" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-lg font-medium text-gray-300 mb-2">연락처 <span className="text-purple-500">*</span></label>
                    <input type="text" id="phone" placeholder="연락처를 입력하세요" className="w-full px-5 py-3 md:py-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black text-lg shadow-sm" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-2">이메일 <span className="text-purple-500">*</span></label>
                    <input type="email" id="email" placeholder="이메일을 입력하세요" className="w-full px-5 py-3 md:py-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black text-lg shadow-sm" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-lg font-medium text-gray-300 mb-2">관심 서비스 <span className="text-purple-500">*</span></label>
                    <select id="service" className="w-full px-5 py-3 md:py-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black text-lg shadow-sm">
                      <option value="">선택해주세요</option>
                      <option value="rental-setup">렌탈사 설립</option>
                      <option value="rental-partnership">렌탈업무 제휴</option>
                      <option value="rental-system">렌탈시스템 구축</option>
                      <option value="rental-part-time">렌탈 부업</option>
                      <option value="online-seminar">온라인 세미나</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-lg font-medium text-gray-300 mb-2">문의 내용 <span className="text-purple-500">*</span></label>
                    <textarea id="message" placeholder="문의 내용을 입력하세요" rows={4} className="w-full px-5 py-3 md:py-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black text-lg shadow-sm"></textarea>
                  </div>
                  <div className="flex items-start mt-4">
                    <div className="flex items-center h-6">
                      <input id="privacy" type="checkbox" className="h-6 w-6 accent-purple-600" />
                    </div>
                    <div className="ml-3 text-base">
                      <label htmlFor="privacy" className="text-gray-300">개인정보 수집 및 이용에 동의합니다. <span className="text-purple-500">*</span></label>
                    </div>
                  </div>
                  <div className="pt-4 md:pt-6">
                    <button type="submit" className="w-full px-6 py-6 md:py-7 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-500 transition-all duration-300 text-xl shadow-lg shadow-purple-900/30">상담 신청하기</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 푸터 */}
      <Footer />
    </div>
  );
}
