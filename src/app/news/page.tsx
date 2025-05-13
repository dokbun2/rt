import Image from 'next/image';
import Link from 'next/link';

export default function News() {
  return (
    <div className="bg-gray-900 text-white">
      {/* 렌탈 뉴스 Hero 섹션 */}
      <section className="relative overflow-hidden pt-24 pb-20">
        {/* 배경 이미지 (어두운 사무실) */}
        <div className="absolute inset-0 bg-black/70">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-black opacity-80"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-purple-500">최신 소식</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              렌탈 뉴스
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              렌탈 산업의 최신 동향과 RENIT의 소식을 확인하세요.
            </p>
          </div>
        </div>
      </section>

      {/* 뉴스 목록 섹션 */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item) => (
              <div key={item.id} className="bg-black/30 rounded-xl overflow-hidden border border-purple-900/20 hover:border-purple-500 transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                  <div className="absolute bottom-0 left-0 p-4 z-20">
                    <div className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full mb-2 inline-block">
                      {item.category}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-purple-300">
                    <Link href={item.href}>{item.title}</Link>
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-400">{item.date}</div>
                    <Link href={item.href} className="text-purple-400 hover:text-purple-300 text-sm flex items-center">
                      자세히 보기
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 뉴스레터 구독 섹션 */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-black/30 p-8 rounded-xl border border-purple-900/20">
            <h2 className="text-2xl font-bold mb-4 text-center">
              <span className="text-white">렌탈 뉴스레터 </span>
              <span className="text-purple-500">구독하기</span>
            </h2>
            <p className="text-gray-300 text-center mb-6">
              렌탈 산업의 최신 동향과 뉴스를 월 1회 이메일로 받아보세요
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="flex-grow px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button type="submit" className="px-6 py-2 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-500 transition-all duration-300">
                구독하기
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

const news = [
  {
    id: 1,
    title: '2024년 렌탈 산업 전망 분석',
    description: '2024년 렌탈 산업은 어떻게 변화할까요? 최신 시장 동향과 전망을 분석했습니다. 렌탈 사업자가 주목해야 할 트렌드와 기회 요인을 알아보세요.',
    category: '시장 분석',
    date: '2024년 4월 15일',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&auto=format',
  },
  {
    id: 2,
    title: '렌탈 사업자를 위한 재무 관리 팁',
    description: '렌탈 사업의 수익성을 높이기 위한 재무 관리 팁을 소개합니다. 초기 투자부터 자금 관리, 세금 혜택까지 알아보세요.',
    category: '경영 팁',
    date: '2024년 4월 3일',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop&auto=format',
  },
  {
    id: 3,
    title: 'RENIT, 신규 렌탈 솔루션 출시 예정',
    description: 'RENIT이 신규 렌탈 솔루션을 출시할 예정입니다. 더욱 효율적인 렌탈 사업 운영을 위한 새로운 서비스를 소개합니다.',
    category: '회사 소식',
    date: '2024년 3월 28일',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop&auto=format',
  },
  {
    id: 4,
    title: '렌탈 고객 확보를 위한 마케팅 전략',
    description: '렌탈 사업에서 고객을 확보하고 유지하기 위한 효과적인 마케팅 전략을 알아봅니다. 디지털 마케팅부터 고객 경험 관리까지 다양한 방법을 소개합니다.',
    category: '마케팅',
    date: '2024년 3월 15일',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format',
  },
  {
    id: 5,
    title: '렌탈 사업의 법적 고려사항',
    description: '렌탈 사업을 운영할 때 주의해야 할 법적 고려사항에 대해 알아봅니다. 계약서 작성부터 소비자 보호법까지 꼭 알아야 할 법률 정보를 소개합니다.',
    category: '법률',
    date: '2024년 3월 5일',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=500&fit=crop&auto=format',
  },
  {
    id: 6,
    title: '성공적인 렌탈 스타트업 사례',
    description: '성공적으로 시장에 안착한 렌탈 스타트업 사례를 소개합니다. 그들의 성공 비결과 극복한 어려움에 대해 알아보세요.',
    category: '성공 사례',
    date: '2024년 2월 22일',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=500&fit=crop&auto=format',
  },
]; 