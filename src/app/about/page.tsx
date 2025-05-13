import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-gray-900 text-white">
      {/* 회사 소개 Hero 섹션 */}
      <section className="relative overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 bg-black/70">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/30 to-black opacity-80"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-purple-500">회사소개</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">회사 소개</p>
            <p className="mt-6 text-lg leading-8 text-gray-300">렌잇은 렌탈 비즈니스의 설립부터 운영까지 필요한 모든 전문 서비스를 제공합니다.</p>
          </div>
        </div>
      </section>

      {/* 렌탈 솔루션 섹션 */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-white">렌탈 </span>
              <span className="text-purple-500 inline-block ml-1 md:ml-2">솔루션</span>
              <span className="text-white inline-block ml-1 md:ml-2">이란?</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              렌탈 비즈니스의 성공을 위한 통합 솔루션을 제공합니다.
              <br />성공적인 렌탈 사업을 위한 모든 요소를 도와드립니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/rental-solution.jpg"
                width={540}
                height={400}
                alt="렌탈 솔루션"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-400">렌탈 비즈니스의 <span className="text-white inline-block ml-1 md:ml-2">전문가</span></h3>
              <p className="text-gray-300 mb-6">
                렌잇은 렌탈 비즈니스 분야에서 10년 이상의 경험을 바탕으로 고객님의 성공적인 비즈니스를 위한 최고의 솔루션을 제공합니다. 시장 조사부터 비즈니스 모델 구축, 시스템 개발까지 종합적인 컨설팅 서비스로 고객의 니즈에 맞는 최적의 결과를 도출합니다.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { title: '전문성', text: '렌탈 분야 전문 컨설턴트' },
                  { title: '신뢰성', text: '200+ 성공 비즈니스 사례' },
                  { title: '혁신성', text: '최신 렌탈 트렌드 반영' },
                  { title: '고객 중심', text: '맞춤형 솔루션 제공' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="mt-1 mr-3">
                      <div className={`w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-16 text-center">
            <span className="text-white">렌탈 </span>
            <span className="text-purple-500 inline-block ml-1 md:ml-2">솔루션</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-black/20 rounded-xl border border-purple-900/20">
              <div className="text-5xl font-bold text-purple-500 mb-2">99%</div>
              <div className="text-sm text-gray-300">고객 만족도</div>
            </div>
            <div className="text-center p-8 bg-black/20 rounded-xl border border-purple-900/20">
              <div className="text-5xl font-bold text-teal-400 mb-2">200+</div>
              <div className="text-sm text-gray-300">비즈니스 사례</div>
            </div>
            <div className="text-center p-8 bg-black/20 rounded-xl border border-purple-900/20">
              <div className="text-5xl font-bold text-amber-400 mb-2">10년+</div>
              <div className="text-sm text-gray-300">업계 경력</div>
            </div>
          </div>
        </div>
      </section>

      {/* 렌탈 뉴스 섹션 */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-16 text-center">
            <span className="text-white">렌탈 </span>
            <span className="text-purple-500 inline-block ml-1 md:ml-2">뉴스</span>
          </h2>
          <p className="text-center text-gray-300 mb-16">최신 렌탈 업계 소식과 트렌드를 확인하세요</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* 뉴스 이미지 */}
            <div className="col-span-2 rounded-xl overflow-hidden relative h-64">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
              <div className="absolute bottom-0 left-0 p-6 z-20">
                <div className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full mb-2 inline-block">트렌드</div>
                <h3 className="text-xl font-bold text-white">2024년 렌탈 산업 트렌드 분석</h3>
              </div>
            </div>
            {/* 차트 */}
            <div className="col-span-2 bg-black/30 rounded-xl p-4 border border-purple-900/20">
              <h3 className="text-lg font-bold text-white mb-4">월별 렌탈 시장 동향</h3>
              <div className="h-44 bg-gradient-to-r from-purple-500 to-purple-800 rounded opacity-70"></div>
              <div className="text-right mt-2">
                <button className="text-purple-400 text-sm hover:text-purple-300">자세히 보기</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 고객 후기 섹션 */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-16 text-center">
            <span className="text-white">고객 </span>
            <span className="text-purple-500 inline-block ml-1 md:ml-2">후기</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/30 p-6 rounded-xl border border-purple-900/20">
              <p className="text-gray-300 mb-6">
                "렌잇의 컨설팅 덕분에 렌탈 사업을 성공적으로 시작할 수 있었습니다. 시장조사부터 운영시스템 구축까지 체계적인 도움을 받아 단기간에 안정적인 수익을 창출하게 되었습니다."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">K</span>
                </div>
                <div>
                  <p className="font-semibold text-white">김성민 대표</p>
                  <p className="text-xs text-gray-400">렌탈케어 CEO</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-black/30 p-6 rounded-xl border border-purple-900/20">
              <p className="text-gray-300 mb-6">
                "처음에는 반신반의했지만 렌잇의 전문적인 접근 방식과 세심한 컨설팅을 통해 기존 렌탈 사업의 문제점을 해결하고 수익을 2배 이상 늘릴 수 있었습니다."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">L</span>
                </div>
                <div>
                  <p className="font-semibold text-white">이지연 매니저</p>
                  <p className="text-xs text-gray-400">퓨처렌트 이사</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/cases"
              className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold shadow hover:bg-purple-500 transition-all duration-300 inline-block"
            >
              더 많은 후기 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 문의 섹션 */}
      <section className="py-20 bg-black/70">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-16 text-center">
            <span className="text-white">문의 </span>
            <span className="text-purple-500 inline-block ml-1 md:ml-2">하기</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <div className="text-2xl font-bold mb-4">
                  <span className="text-purple-500">REN</span>
                  <span className="text-[#11b77f]">'T</span>
                  <span className="text-white ml-4 md:ml-6">렌잇</span>
                </div>
                <p className="text-gray-300 mb-4">
                  빠르고 효율적인 렌탈 비즈니스의 시작,<br />
                  렌잇과 함께하세요
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="mr-3 text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">주소</p>
                    <p className="text-gray-300">서울특별시 강남구 테헤란로 123</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">이메일</p>
                    <p className="text-gray-300">info@renit.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">전화번호</p>
                    <p className="text-gray-300">02-1234-5678</p>
                  </div>
                </li>
              </ul>
              
              <h3 className="text-lg font-semibold text-white mb-4">SNS 채널</h3>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors duration-300">
                    <span className="text-white">{social.charAt(0).toUpperCase()}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <div className="bg-black/30 p-6 rounded-xl border border-purple-900/20">
                <h3 className="text-lg font-semibold text-white mb-6">무료 상담 신청</h3>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input type="text" placeholder="이름" className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    </div>
                    <div>
                      <input type="text" placeholder="연락처" className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    </div>
                  </div>
                  
                  <div>
                    <input type="email" placeholder="이메일" className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
                  </div>
                  
                  <div>
                    <textarea placeholder="문의사항" rows={4} className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input type="checkbox" id="privacy" className="mr-2" />
                    <label htmlFor="privacy" className="text-sm text-gray-300">개인정보 수집 및 이용에 동의합니다.</label>
                  </div>
                  
                  <button type="submit" className="w-full py-3 bg-purple-600 text-white rounded-md font-semibold shadow hover:bg-purple-500 transition-all duration-300">
                    문의하기
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 