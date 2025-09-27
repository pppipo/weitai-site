'use client';

import React, { useState } from 'react';
import { useLanguage, Language } from '@/contexts/LanguageContext';

// 语言选项配置
const languageOptions = [
  { code: 'zh' as Language, name: '中文', flag: '🇨🇳', shortName: 'CN' },
  { code: 'en' as Language, name: 'English', flag: '🇺🇸', shortName: 'EN' },
  { code: 'ru' as Language, name: 'Русский', flag: '🇷🇺', shortName: 'RU' },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languageOptions.find(lang => lang.code === language);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* 当前语言按钮 - 桌面版 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden lg:flex items-center space-x-2 px-3 py-1.5 rounded-md border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 text-gray-700 shadow-sm"
      >
        <span className="text-sm">{currentLanguage?.flag}</span>
        <span className="text-sm font-medium">{currentLanguage?.shortName}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* 当前语言按钮 - 移动版 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200 text-gray-700"
      >
        <span className="text-sm">{currentLanguage?.flag}</span>
        <span className="text-sm font-medium">{currentLanguage?.name}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* 下拉菜单 */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-44 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50 overflow-hidden">
          {languageOptions.map((option) => (
            <button
              key={option.code}
              onClick={() => handleLanguageChange(option.code)}
              className={`w-full flex items-center space-x-3 px-4 py-2.5 text-left hover:bg-blue-50 transition-colors duration-200 ${
                language === option.code ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              <span className="text-base">{option.flag}</span>
              <div className="flex flex-col">
                <span className="font-medium text-sm">{option.name}</span>
                <span className="text-xs text-gray-500">{option.shortName}</span>
              </div>
              {language === option.code && (
                <svg className="w-4 h-4 ml-auto text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}

      {/* 点击外部关闭下拉菜单 */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}