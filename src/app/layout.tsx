import type { Metadata } from "next";
import "./globals.css";
import "@/styles/fonts.css";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "REN'T - 렌탈 전문 컨설팅",
  description: "렌탈 전문 컨설팅 기업 REN'T입니다. 렌탈 비즈니스의 시작과 성장을 함께합니다.",
  metadataBase: new URL('https://rt.dokbun2.com'),
  
  // Open Graph 메타태그
  openGraph: {
    title: "REN'T - 렌탈 전문 컨설팅",
    description: "렌탈 전문 컨설팅 기업 REN'T입니다. 렌탈 비즈니스의 시작과 성장을 함께합니다.",
    url: "https://rt.dokbun2.com",
    siteName: "REN'T",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "REN'T - 렌탈 전문 컨설팅",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  
  // Twitter Card 메타태그
  twitter: {
    card: "summary_large_image",
    title: "REN'T - 렌탈 전문 컨설팅",
    description: "렌탈 전문 컨설팅 기업 REN'T입니다. 렌탈 비즈니스의 시작과 성장을 함께합니다.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="h-full">
      <body className="h-full font-['Paperlogy'] bg-gray-900">
        <div className="min-h-full">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
