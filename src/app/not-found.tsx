import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-6">페이지를 찾을 수 없습니다</h2>
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
        <Link 
          href="/" 
          className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-500 transition-all duration-300"
        >
          메인 페이지로 돌아가기
        </Link>
      </div>
    </div>
  );
} 