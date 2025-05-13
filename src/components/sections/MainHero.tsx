'use client';
import { motion } from 'framer-motion';

export default function MainHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full min-h-screen flex items-center bg-gray-900 text-white pt-32 pb-20 relative overflow-hidden"
      id="hero"
    >
      {/* 배경 동영상 */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/poster.png"
          className="object-cover w-full h-full opacity-60"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black opacity-2"></div>
      </div>
      
      {/* 배경 그라데이션 효과 */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-black opacity-70 z-1"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col justify-center h-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between h-full">
          <motion.div
            className="w-full lg:w-1/2 mb-12 lg:mb-0 flex flex-col text-center lg:text-left items-center lg:items-start justify-center"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            >
              <span className="text-white">렌탈 비즈니스 </span>
              <span className="text-purple-500">모든 것!</span>
              <br />
              <span className="text-white">렌잇이</span>
              <span className="text-purple-500"> 알려드립니다.</span>
            </motion.h1>
            <motion.p
              className="text-2xl text-gray-300 mb-10 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
            >
              렌탈사 설립, 렌탈전산구축, 렌탈업무제휴, 렌탈부업<br />
              렌탈 비즈니스의 모든 것을 도와드립니다.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
            >
              <a
                href="#services"
                className="px-8 py-4 bg-purple-600 text-white rounded-full text-2xl font-semibold shadow-lg hover:bg-purple-500 transition-all duration-300"
              >
                렌탈솔루션
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full text-2xl font-semibold hover:bg-white/10 transition-all duration-300"
              >
                무료상담신청
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="w-full lg:w-2/5 bg-black/30 rounded-xl p-6 backdrop-blur-sm border border-purple-900/30 flex flex-col justify-start items-start mx-auto lg:mx-0 max-w-md lg:max-w-none lg:mt-6 lg:ml-8"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          >
            <div className="flex items-center mb-4 justify-start w-full pl-2">
              <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">렌잇과 함께 성장</h2>
            </div>
            <div className="pl-20 text-left w-full">
              <p className="text-xl text-gray-300 mb-4">성공적인 렌탈 비즈니스의 시작</p>
              <ul className="space-y-3 text-left">
                {[
                  '렌탈사 설립 전문 컨설팅',
                  '최신 렌탈 시스템 구축',
                  '업계 최고 렌탈 비즈니스 파트너십',
                  '부업으로 시작하는 렌탈 비즈니스'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mt-1 mr-3 text-purple-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 