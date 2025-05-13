import Link from 'next/link';
import MainHero from "@/components/sections/MainHero";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero section */}
      <MainHero />
      
      {/* 서비스 섹션 */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-white">디지털 </span>
            <span className="text-blue-500">솔루션</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 서비스 내용 */}
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-blue-900/20 hover:border-blue-500/50 transition-all duration-300 hover:shadow-blue-500/10 hover:shadow-xl group">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">웹사이트 개발</h3>
              <p className="text-xl text-gray-300">최신 기술을 활용한 반응형 웹사이트를 개발합니다. SEO 최적화, 빠른 로딩 속도, 사용자 친화적 UI/UX를 제공합니다.</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-blue-900/20 hover:border-blue-500/50 transition-all duration-300 hover:shadow-blue-500/10 hover:shadow-xl group">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">앱 개발</h3>
              <p className="text-xl text-gray-300">iOS 및 Android 플랫폼을 위한 네이티브 및 하이브리드 앱을 개발합니다. 사용자 경험을 최우선으로 고려한 앱 솔루션을 제공합니다.</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-blue-900/20 hover:border-blue-500/50 transition-all duration-300 hover:shadow-blue-500/10 hover:shadow-xl group">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">디지털 마케팅</h3>
              <p className="text-xl text-gray-300">SEO, 소셜 미디어 마케팅, 콘텐츠 마케팅 등 종합적인 디지털 마케팅 전략을 수립하고 실행합니다. 데이터 기반의 마케팅 솔루션을 제공합니다.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 뉴스 섹션 */}
      <section id="news" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-white">최신 </span>
            <span className="text-blue-500">소식</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 뉴스 내용 */}
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg group">
              <div className="h-48 bg-blue-900/30 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-blue-600 text-white text-base font-semibold px-3 py-1 rounded-full">업계 소식</span>
                  <p className="text-white font-semibold mt-2 text-lg">2023년 06월 15일</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">웹 개발 트렌드, 2023년 변화</h3>
                <p className="text-xl text-gray-300 mb-4">최신 웹 개발 기술과 프레임워크의 변화를 살펴보고 비즈니스에 어떤 영향을 미칠지 분석합니다.</p>
                <a href="#" className="text-xl text-blue-400 font-semibold hover:text-blue-300 transition-colors">자세히 보기 →</a>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg group">
              <div className="h-48 bg-blue-900/30 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-blue-600 text-white text-base font-semibold px-3 py-1 rounded-full">기술 동향</span>
                  <p className="text-white font-semibold mt-2 text-lg">2023년 05월 22일</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">AI 기반 웹 개발 도구 출시</h3>
                <p className="text-xl text-gray-300 mb-4">인공지능을 활용한 새로운 웹 개발 도구가 출시되어 개발 효율성과 사용자 경험이 크게 향상될 전망입니다.</p>
                <a href="#" className="text-xl text-blue-400 font-semibold hover:text-blue-300 transition-colors">자세히 보기 →</a>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg group">
              <div className="h-48 bg-blue-900/30 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-blue-600 text-white text-base font-semibold px-3 py-1 rounded-full">정책 변화</span>
                  <p className="text-white font-semibold mt-2 text-lg">2023년 04월 10일</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">디지털 산업 지원 정책 확대</h3>
                <p className="text-xl text-gray-300 mb-4">정부가 디지털 산업 활성화를 위한 지원 정책을 확대하기로 결정했습니다. 이는 디지털 기업들에게 큰 기회가 될 전망입니다.</p>
                <a href="#" className="text-xl text-blue-400 font-semibold hover:text-blue-300 transition-colors">자세히 보기 →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 고객 사례 섹션 */}
      <section id="cases" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-white">고객 </span>
            <span className="text-purple-500">사례</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 고객 사례 내용 */}
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-purple-900/20 transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">A 렌탈</h3>
                  <p className="text-lg text-gray-400">가전제품 렌탈</p>
                </div>
              </div>
              <p className="text-xl text-gray-300 mb-6">
                "렌잇의 컨설팅을 통해 6개월 만에 매출이 3배 증가했습니다. 특히 렌탈 관리 시스템 도입 후 업무 효율이 크게 향상되었습니다."
              </p>
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-400 ml-2 text-lg">CEO 김민수</span>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-purple-900/20 transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">B</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">B 렌탈</h3>
                  <p className="text-lg text-gray-400">사무기기 렌탈</p>
                </div>
              </div>
              <p className="text-xl text-gray-300 mb-6">
                "렌탈 비즈니스를 시작할 때 많은 어려움이 있었지만, 렌잇의 체계적인 컨설팅 덕분에 안정적으로 사업을 운영할 수 있게 되었습니다."
              </p>
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-400 ml-2 text-lg">이사 박지영</span>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-purple-900/20 transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">C 렌탈</h3>
                  <p className="text-lg text-gray-400">생활용품 렌탈</p>
                </div>
              </div>
              <p className="text-xl text-gray-300 mb-6">
                "렌잇의 파트너십 프로그램을 통해 다양한 공급업체와 연결되어 상품 라인업을 크게 확장할 수 있었습니다. 고객 만족도도 함께 상승했습니다."
              </p>
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-400 ml-2 text-lg">대표 최준호</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 문의하기 섹션 */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-white">문의 </span>
            <span className="text-purple-500">하기</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            {/* 문의 양식 */}
            <div className="bg-gray-900 rounded-lg p-8 shadow-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-lg font-medium text-gray-300 mb-2">이름</label>
                    <input type="text" id="name" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white text-lg" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-2">이메일</label>
                    <input type="email" id="email" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white text-lg" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-lg font-medium text-gray-300 mb-2">제목</label>
                  <input type="text" id="subject" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white text-lg" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-gray-300 mb-2">메시지</label>
                  <textarea id="message" rows={5} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white text-lg"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full px-6 py-4 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-500 transition-all duration-300 text-xl">문의하기</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
