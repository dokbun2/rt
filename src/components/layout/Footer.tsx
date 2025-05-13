import Link from 'next/link';

const rentalSolutions = [
  { name: '렌탈사 설립', href: '/services' },
  { name: '렌탈업무 제휴', href: '/services' },
  { name: '렌탈시스템 구축', href: '/services' },
  { name: '렌탈 부업', href: '/services' },
  { name: '온라인 세미나', href: '/services' },
];

const customerSupport = [
  { name: '문의하기', href: '/contact' },
  { name: 'FAQ', href: '/faq' },
  { name: '자료실', href: '/resources' },
  { name: '이용약관', href: '/terms' },
  { name: '개인정보처리방침', href: '/privacy' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8 px-4 md:px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* 좌측: 로고/설명/소셜 */}
        <div className="md:col-span-1 flex flex-col items-start justify-between">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-purple-500">REN</span>
              <span className="text-purple-300">'T</span>
              <span className="text-white ml-2">렌잇</span>
            </div>
            <p className="text-gray-300 text-sm mb-6 max-w-xs">
              렌탈 비즈니스의 성공적인 시작과 성장을 위한 전문 컨설팅 서비스를 제공합니다. 렌잇과 함께 성장하세요.
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.01-4.52 4.5 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.67 1.64 1.15c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.95 3.65A4.48 4.48 0 01.96 6v.06c0 2.13 1.52 3.9 3.55 4.3-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.55 1.7 2.16 2.94 4.07 2.97A9.05 9.05 0 010 19.54a12.8 12.8 0 006.95 2.03c8.36 0 12.94-6.92 12.94-12.93 0-.2 0-.39-.01-.58A9.22 9.22 0 0023 3z" /></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" /></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.966 0-1.75-.79-1.75-1.76s.784-1.76 1.75-1.76 1.75.79 1.75 1.76-.784 1.76-1.75 1.76zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.38v4.59h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z" /></svg>
              </a>
            </div>
          </div>
        </div>
        {/* 중간: 렌탈솔루션/고객지원 */}
        <div className="md:col-span-2 grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">렌탈솔루션</h3>
            <ul className="space-y-2">
              {rentalSolutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="relative text-gray-300 hover:text-purple-400 transition-colors text-sm after:content-[''] after:block after:w-full after:h-1 after:bg-purple-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:rounded-full"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">고객지원</h3>
            <ul className="space-y-2">
              {customerSupport.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="relative text-gray-300 hover:text-purple-400 transition-colors text-sm after:content-[''] after:block after:w-full after:h-1 after:bg-purple-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:rounded-full"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* 우측: 뉴스레터 구독 */}
        <div className="md:col-span-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">뉴스레터</h3>
            <p className="text-gray-300 text-sm mb-4">최신 렌탈 시장 동향과 비즈니스 팁을 정기적으로 받아보세요.</p>
            <form className="flex w-full max-w-xs">
              <input
                type="email"
                placeholder="이메일 주소"
                className="flex-grow px-4 py-2 rounded-l-md bg-gray-800 text-white border-none focus:ring-2 focus:ring-purple-500 text-sm"
              />
              <button
                type="submit"
                className="px-4 bg-purple-600 text-white rounded-r-md hover:bg-purple-500 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </form>
            <p className="text-gray-500 text-xs mt-2">구독을 통해 이벤트 및 프로모션 정보를 수신하는 것에 동의합니다.</p>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-800 pt-6 text-center">
        <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} RENIT Inc. All rights reserved.</p>
      </div>
    </footer>
  );
} 