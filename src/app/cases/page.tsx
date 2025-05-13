import Image from 'next/image';

export default function Cases() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero section */}
      <section className="relative overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 bg-black/70">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-black opacity-80"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-purple-500">고객 사례</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              성공적인 렌탈 사업 사례
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              RENIT과 함께한 고객들의 성공적인 렌탈 사업 사례를 소개합니다.
            </p>
          </div>
        </div>
      </section>
      {/* 사례 카드 섹션 */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cases.map((case_) => (
              <article key={case_.id} className="flex flex-col items-start bg-black/30 p-6 rounded-xl border border-purple-900/20 hover:border-purple-500 transition-all duration-300">
                <div className="relative w-full">
                  <Image
                    src={case_.imageUrl}
                    alt={case_.title}
                    width={500}
                    height={300}
                    className="aspect-[16/9] w-full rounded-xl bg-gray-800 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-700/30" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={case_.date} className="text-gray-400">
                      {case_.date}
                    </time>
                    <span className="relative z-10 rounded-full bg-purple-900/50 px-3 py-1.5 font-medium text-purple-300">
                      {case_.category}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-purple-300">
                      <a href={case_.href}>
                        <span className="absolute inset-0" />
                        {case_.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">{case_.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const cases = [
  {
    id: 1,
    title: 'A사의 가구 렌탈 사업 성공 사례',
    href: '#',
    description:
      'A사는 RENIT의 컨설팅을 통해 가구 렌탈 사업을 성공적으로 시작했습니다. 시장 조사와 전략 수립부터 운영 시스템 구축까지 전 과정을 지원했습니다.',
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=300&fit=crop&auto=format',
    date: '2024년 3월',
    category: '가구 렌탈',
  },
  {
    id: 2,
    title: 'B사의 전자기기 렌탈 사업 성공 사례',
    href: '#',
    description:
      'B사는 RENIT의 컨설팅을 통해 전자기기 렌탈 사업을 성공적으로 시작했습니다. 시장 조사와 전략 수립부터 운영 시스템 구축까지 전 과정을 지원했습니다.',
    imageUrl: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500&h=300&fit=crop&auto=format',
    date: '2024년 2월',
    category: '전자기기 렌탈',
  },
  {
    id: 3,
    title: 'C사의 의류 렌탈 사업 성공 사례',
    href: '#',
    description:
      'C사는 RENIT의 컨설팅을 통해 의류 렌탈 사업을 성공적으로 시작했습니다. 시장 조사와 전략 수립부터 운영 시스템 구축까지 전 과정을 지원했습니다.',
    imageUrl: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&h=300&fit=crop&auto=format',
    date: '2024년 1월',
    category: '의류 렌탈',
  },
]; 