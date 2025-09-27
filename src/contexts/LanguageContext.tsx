'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// 支持的语言类型
export type Language = 'zh' | 'en' | 'ru';

// 消息类型定义
interface Messages {
  nav: Record<string, string>;
  hero: Record<string, string>;
  stats: Record<string, string>;
  about: Record<string, string>;
  team: Record<string, string>;
  research: Record<string, string>;
  products: Record<string, string>;
  news: Record<string, string>;
  investment: {
    title: string;
    subtitle: string;
    description: string;
    advantages: Record<string, string>;
  };
  careers: Record<string, string>;
  contact: Record<string, string>;
  footer: Record<string, string>;
}

// 语言上下文类型
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  messages: Messages;
}

// 创建语言上下文
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 语言提供者组件
interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('zh');
  const [messages, setMessages] = useState<Messages>({
    nav: {},
    hero: {},
    stats: {},
    about: {},
    team: {},
    research: {},
    products: {},
    news: {},
    investment: { title: '', subtitle: '', description: '', advantages: {} },
    careers: {},
    contact: {},
    footer: {}
  });

  // 加载语言包
  const loadMessages = async (lang: Language) => {
    try {
      const response = await fetch(`/messages/${lang}.json`);
      if (response.ok) {
        const data = await response.json();
        setMessages(data as Messages);
      } else {
        // 如果加载失败，使用默认中文
        const defaultResponse = await fetch('/messages/zh.json');
        const defaultData = await defaultResponse.json();
        setMessages(defaultData as Messages);
      }
    } catch (error) {
      console.error('Failed to load language messages:', error);
      // 使用默认空结构作为后备
      setMessages({
        nav: {},
        hero: {},
        stats: {},
        about: {},
        team: {},
        research: {},
        products: {},
        news: {},
        investment: { title: '', subtitle: '', description: '', advantages: {} },
        careers: {},
        contact: {},
        footer: {}
      });
    }
  };

  // 设置语言并保存到本地存储
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferred-language', lang);
    loadMessages(lang);
  };

  // 初始化语言设置
  useEffect(() => {
    // 从本地存储读取语言偏好
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    
    if (savedLanguage && ['zh', 'en', 'ru'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
      loadMessages(savedLanguage);
    } else {
      // 检测浏览器语言
      const browserLanguage = navigator.language.toLowerCase();
      let detectedLanguage: Language = 'zh'; // 默认中文
      
      if (browserLanguage.startsWith('en')) {
        detectedLanguage = 'en';
      } else if (browserLanguage.startsWith('ru')) {
        detectedLanguage = 'ru';
      }
      
      setLanguageState(detectedLanguage);
      loadMessages(detectedLanguage);
      localStorage.setItem('preferred-language', detectedLanguage);
    }
  }, []);

  const value: LanguageContextType = {
    language,
    setLanguage,
    messages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// 使用语言上下文的Hook
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}