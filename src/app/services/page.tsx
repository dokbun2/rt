import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero section */}
      <section className="relative overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 bg-black/70">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/30 to-black opacity-80"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-purple-500">렌탈솔루션</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              렌탈 비즈니스의 시작과 성장
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              렌잇은 렌탈 비즈니스의 설립부터 운영까지 필요한 모든 전문 서비스를 제공합니다.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                href="/contact"
                className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold shadow hover:bg-purple-500 transition-all duration-300"
              >
                상담의뢰하기
              </Link>
              <Link
                href="/process"
                className="px-6 py-3 border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                컨설팅 프로세스
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* 서비스 항목 섹션 */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-white">렌탈 </span>
              <span className="text-purple-500">서비스</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              렌탈 비즈니스의 성공을 위한 다양한 서비스를 제공합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-black/30 rounded-xl p-6 border border-purple-900/20 hover:border-purple-500 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <Link href="#" className="text-purple-400 hover:text-purple-300 flex items-center">
                  자세히 보기 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    name: '렌탈 사업 전략 수립',
    description:
      '시장 조사와 분석을 통해 최적의 렌탈 사업 전략을 수립합니다. 경쟁사 분석, 타겟 고객 선정, 가격 전략 등을 포함합니다.',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    name: '운영 시스템 구축',
    description:
      '효율적인 렌탈 사업 운영을 위한 시스템을 구축합니다. 재고 관리, 고객 관리, 결제 시스템 등을 포함합니다.',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
      </svg>
    ),
  },
  {
    name: '인력 교육 및 관리',
    description:
      '렌탈 사업에 필요한 전문 인력을 교육하고 관리합니다. 직원 채용, 교육 프로그램 개발, 성과 관리 등을 포함합니다.',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    name: '시장 조사 및 분석',
    description:
      '렌탈 시장의 동향과 경쟁 상황을 분석하여 기회와 위협을 파악합니다. 시장 규모, 성장률, 경쟁사 분석 등을 포함합니다.',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
  },
  {
    name: '성과 측정 및 개선',
    description:
      '렌탈 사업의 성과를 측정하고 개선 방안을 제시합니다. KPI 설정, 성과 분석, 개선 계획 수립 등을 포함합니다.',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    name: '리스크 관리',
    description:
      '렌탈 사업의 리스크를 관리하고 대응 방안을 마련합니다. 계약 관리, 보험, 법적 리스크 등을 포함합니다.',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
]; 