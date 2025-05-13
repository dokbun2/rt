export default function Process() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">컨설팅 프로세스</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            체계적인 컨설팅 프로세스
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            RENIT은 체계적인 컨설팅 프로세스를 통해 귀사의 렌탈 사업 성공을 도와드립니다.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
            {processes.map((process, index) => (
              <div key={process.name} className="relative">
                <div className="flex items-center gap-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                    {index + 1}
                  </div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {process.name}
                  </h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const processes = [
  {
    name: '초기 상담',
    description:
      '고객사의 렌탈 사업 현황과 목표를 파악하고, 컨설팅 방향을 설정합니다. 이를 통해 맞춤형 컨설팅 계획을 수립합니다.',
  },
  {
    name: '현황 분석',
    description:
      '고객사의 렌탈 사업 현황을 분석하고, 문제점과 개선점을 파악합니다. 시장 조사와 경쟁사 분석을 포함합니다.',
  },
  {
    name: '전략 수립',
    description:
      '분석 결과를 바탕으로 렌탈 사업 전략을 수립합니다. 목표 설정, 실행 계획, 예산 계획 등을 포함합니다.',
  },
  {
    name: '시스템 구축',
    description:
      '렌탈 사업 운영에 필요한 시스템을 구축합니다. 재고 관리, 고객 관리, 결제 시스템 등을 포함합니다.',
  },
  {
    name: '인력 교육',
    description:
      '렌탈 사업 운영에 필요한 인력을 교육합니다. 직원 채용, 교육 프로그램 개발, 성과 관리 등을 포함합니다.',
  },
  {
    name: '성과 관리',
    description:
      '렌탈 사업의 성과를 측정하고 관리합니다. KPI 설정, 성과 분석, 개선 계획 수립 등을 포함합니다.',
  },
]; 