"use client";

import { useEffect, useRef } from "react";

interface Props {
  className?: string;
}

export default function TranslateSwitcher({ className }: Props) {
  const countries = [
    { flag: "🇦🇺", name: "English", code: "en" },
    { flag: "🇻🇳", name: "Vietnam", code: "vi" },
    { flag: "🇲🇾", name: "Malaysia", code: "ms" },
    { flag: "🇹🇭", name: "Thailand", code: "th" },
    { flag: "🇵🇭", name: "Philippines", code: "tl" },
    { flag: "🇨🇳", name: "中文（简体）", code: "zh-CN" },
  ];
  const injectedRef = useRef(false);

  useEffect(() => {
    if (injectedRef.current) return;
    injectedRef.current = true;

    // callback khởi tạo cho widget
    window.googleTranslateElementInit = () => {
      // Chỉ định ngôn ngữ gốc là vi (hoặc en tuỳ site)
      new window.google!.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,vi,ms,th,tl,zh-CN",
          layout: 1, // 0: horizontal, 1: vertical (dropdown), 2: simple
          autoDisplay: false,
        },
        "google_translate_element"
      )

    };

    // nạp script của Google Translate
    const s = document.createElement("script");
    s.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    s.async = true;
    document.body.appendChild(s);

    return () => {
      // không cần cleanup đặc biệt; để nguyên cho trang
    };
  }, []);



  // mẹo đổi ngôn ngữ qua JS (ẩn UI gốc của Google nếu muốn)
  const changeLang = (lang: string) => {
    const combo = document.querySelector<HTMLSelectElement>("select.goog-te-combo");
    if (!combo) {
      setTimeout(() => changeLang(lang), 200);
      return;
    }
    if (combo.value !== lang) {
      combo.value = lang;
      // bắn cả change + input cho chắc
      combo.dispatchEvent(new Event("change"));
      combo.dispatchEvent(new Event("input"));
    }
  };

  return (
    <div className={`flex items-center gap-2  ${className || ""}`}>
      {/* 1) Widget mặc định của Google (có thể ẩn bằng CSS) */}
      <div id="google_translate_element" className="min-w-[180px]" />

      {/* 2) Dropdown tuỳ biến (gọi changeLang) */}
      <select
        aria-label="Translate"
        className="
        border border-amber-400
      hover:border-amber-500 
      focus:border-r-amber-500 focus:ring-2
      focus:ring-amber-300/30 focus:outline-none
        font-medium text-sm md:text-xl
        rounded px-2 py-1
        transition-colors duration-300
        "
        onChange={(e) => changeLang(e.target.value)}
        defaultValue="en"
      >
        {countries.map((c) => {
          return (
            <option className="notranslate text-sm md:text-xl" key={c.code} value={c.code}>{c.flag} {c.name}</option>
          )
        })}

      </select>
    </div>
  );
}
