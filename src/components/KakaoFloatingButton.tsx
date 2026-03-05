"use client";

import Image from "next/image";

export default function KakaoFloatingButton() {
  return (
    <a
      href="http://pf.kakao.com/_Sgxjaxb/chat"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] w-16 h-16 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer block"
      style={{ boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)' }}
      aria-label="KakaoTalk Chat"
    >
      <Image
        src="/images/common/kakaotalk.png"
        alt="KakaoTalk"
        width={64}
        height={64}
        className="w-full h-full rounded-full"
      />
    </a>
  );
}
