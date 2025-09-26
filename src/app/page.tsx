"use client";

import React, { useState } from "react";
import Image from "next/image";
import ScrollAnimation from "../components/ScrollAnimation";
import ImageModal from "../components/ImageModal";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="min-h-screen bg-white">
      <ScrollAnimation />
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-teal-600 bg-clip-text text-transparent">
                Микропептид Биотех
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="ml-10 flex flex-wrap items-center gap-x-2 xl:gap-x-4 gap-y-2">
                <a href="#" className="text-gray-900 hover:text-blue-800 px-2 py-2 text-sm font-medium transition-colors whitespace-nowrap">Главная</a>
                <a href="#about" className="text-gray-600 hover:text-blue-800 px-2 py-2 text-sm font-medium transition-colors whitespace-nowrap">О нас</a>
                <a href="#research" className="text-gray-600 hover:text-blue-800 px-2 py-2 text-sm font-medium transition-colors whitespace-nowrap">Исследования</a>
                <a href="#production" className="text-gray-600 hover:text-blue-800 px-2 py-2 text-sm font-medium transition-colors whitespace-nowrap">Производство</a>
                <a href="#materials" className="text-gray-600 hover:text-blue-800 px-2 py-2 text-sm font-medium transition-colors whitespace-nowrap">Сырьевая база</a>
                <a href="#freeze-dry" className="text-gray-600 hover:text-blue-800 px-2 py-2 text-sm font-medium transition-colors whitespace-nowrap">Институт лиофилизации</a>
                <a href="#solutions" className="text-gray-600 hover:text-blue-800 px-2 py-2 text-sm font-medium transition-colors whitespace-nowrap">Решения</a>
                <a href="#news" className="text-gray-600 hover:text-blue-800 px-2 py-2 text-sm font-medium transition-colors whitespace-nowrap">Новости</a>
                <a href="#contact" className="text-gray-600 hover:text-blue-800 px-2 py-2 text-sm font-medium transition-colors whitespace-nowrap">Контакты</a>
                <a href="https://www.weitaiclub.com" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-800 to-teal-600 text-white hover:from-blue-900 hover:to-teal-700 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap">Магазин</a>
              </div>
            </div>
            {/* 移动端菜单按钮 */}
            <div className="lg:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* 移动端菜单 */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <a href="#" className="text-gray-900 hover:text-blue-800 block px-3 py-2 text-base font-medium transition-colors">Главная</a>
              <a href="#about" className="text-gray-600 hover:text-blue-800 block px-3 py-2 text-base font-medium transition-colors">О нас</a>
              <a href="#research" className="text-gray-600 hover:text-blue-800 block px-3 py-2 text-base font-medium transition-colors">Исследования</a>
              <a href="#production" className="text-gray-600 hover:text-blue-800 block px-3 py-2 text-base font-medium transition-colors">Производство</a>
              <a href="#materials" className="text-gray-600 hover:text-blue-800 block px-3 py-2 text-base font-medium transition-colors">Сырьевая база</a>
              <a href="#freeze-dry" className="text-gray-600 hover:text-blue-800 block px-3 py-2 text-base font-medium transition-colors">Институт лиофилизации</a>
              <a href="#solutions" className="text-gray-600 hover:text-blue-800 block px-3 py-2 text-base font-medium transition-colors">Решения</a>
              <a href="#news" className="text-gray-600 hover:text-blue-800 block px-3 py-2 text-base font-medium transition-colors">Новости</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-800 block px-3 py-2 text-base font-medium transition-colors">Контакты</a>
              <a href="https://www.weitaiclub.com" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-800 to-teal-600 text-white hover:from-blue-900 hover:to-teal-700 block px-3 py-2 text-base font-medium rounded-lg transition-all duration-300 mx-3 mt-2">Магазин</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* 动态背景效果 */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900/40"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* 科技网格背景 */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-teal-100 bg-clip-text text-transparent">
                Функциональный уход за кожей
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-blue-300 bg-clip-text text-transparent">
                Супер фабрика
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Замкнутый цикл производства и исследований на основе биотехнологий · Создание международного бренда функциональной косметики
            </p>

            

            {/* 数字徽章 - 移动端优化 */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
              <div className="group bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 group-hover:text-blue-300 transition-colors">3</div>
                <div className="text-blue-100 text-xs sm:text-sm">Крупных производственных баз</div>
              </div>
              <div className="group bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 group-hover:text-teal-300 transition-colors">10</div>
                <div className="text-blue-100 text-xs sm:text-sm">Исследовательских институтов</div>
              </div>
              <div className="group bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 group-hover:text-blue-300 transition-colors">50+</div>
                <div className="text-blue-100 text-xs sm:text-sm">Производственных линий</div>
              </div>
              <div className="group bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 group-hover:text-teal-300 transition-colors">100 000 уровень</div>
                <div className="text-blue-100 text-xs sm:text-sm">GMPC цехов</div>
              </div>
            </div>
          </div>
        </div>

        {/* 滚动指示器 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* 解决方案 */}
      <section id="solutions" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 scroll-reveal">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Решения</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Четыре основных бизнес-направления, предоставляющих клиентам комплексные решения для косметических продуктов
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            <div className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 scroll-reveal stagger-1">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">OEM/ODM Комплексные услуги</h3>
              <p className="text-gray-600 mb-6">От разработки формул до производства и поставки, предоставляем полные решения контрактного производства</p>
      
            </div>

            {/* 医美术后修复 */}
            <div className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 scroll-reveal stagger-2">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Восстановление после эстетической медицины</h3>
              <p className="text-gray-600 mb-6">Профессиональные восстанавливающие продукты медицинского уровня, клинически проверенные на безопасность и эффективность</p>
              
            </div>

            {/* 冻干技术平台 */}
            <div className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 scroll-reveal stagger-3">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Платформа лиофилизационных технологий</h3>
              <p className="text-gray-600 mb-6">Различные лиофилизированные формы, сохраняющие стабильность и эффективность активных компонентов</p>
              
            </div>

            {/* 功效护肤赛道 */}
            <div className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 scroll-reveal stagger-4">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Функциональный уход за кожей</h3>
              <p className="text-gray-600 mb-6">Глубокая специализация в различных направлениях эффективности: отбеливание, антивозрастной уход, предотвращение выпадения волос, восстановление и другие</p>
              
            </div>
          </div>
        </div>
      </section>

      {/* 联合实验室与研发实力 */}
      <section id="research" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 scroll-reveal">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Исследовательский потенциал</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Глубокое сотрудничество с известными университетами, создание мощной системы исследований и разработок и технологической платформы
            </p>
          </div>

          {/* 联合实验室 */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12 scroll-reveal">Совместные лаборатории</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <div className="group text-center p-6 sm:p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 scroll-reveal stagger-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Южный медицинский университет</h4>
                <p className="text-sm sm:text-base text-gray-600">Фокус на трансдермальных технологиях, наноинкапсуляции, разработке натуральных ингредиентов; 56 патентов, партнеры включают China Resources 999, Danzi, Bawang, HBN и другие.</p>
              </div>

              <div className="group text-center p-6 sm:p-8 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl sm:rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Аньхойский медицинский университет</h4>
                <p className="text-sm sm:text-base text-gray-600">Совместная ключевая лаборатория, разработка высокоактивных, высокостабильных биологически активных компонентов (таких как рекомбинантный коллаген III типа, металлотионеин), замещающих традиционные экстракты животного происхождения.</p>
              </div>

              <div className="group text-center p-6 sm:p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl sm:rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Команда экспертов Сянъя</h4>
                <p className="text-sm sm:text-base text-gray-600">С 2022 года совместные исследования, фокус на высококачественном развитии индустрии медицинской эстетики, предоставление индивидуальных решений для ухода за кожей с акцентом на клинические испытания и развитие отрасли.</p>
              </div>
            </div>
          </div>

          {/* 技术平台 */}
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Основные технологические платформы</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-800 font-bold">Л</span>
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Лиофильная стабильность</h4>
                <p className="text-gray-600 text-xs">Технология сохранения активности</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal-600 font-bold">Н</span>
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Нано-носители</h4>
                <p className="text-gray-600 text-xs">Технология микросферной инкапсуляции</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-800 font-bold">Б</span>
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Биомиметическая защита</h4>
                <p className="text-gray-600 text-xs">Физико-химическая композиция</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal-600 font-bold">М</span>
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Микроэмульсификация</h4>
                <p className="text-gray-600 text-xs">Технология ультратонкой дисперсии</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-800 font-bold">Т</span>
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Трансдермальная абсорбция</h4>
                <p className="text-gray-600 text-xs">Технология проникновения носителей</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 生产实力 */}
      <section id="production" className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Производственные мощности</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Цеха класса 100,000 GMPC, полностью автоматизированные производственные линии, обеспечивающие качество продукции и возможности поставки
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* 生产能力 */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Производственные возможности</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                    <span className="font-medium text-gray-900">Дневная производительность</span>
                    <span className="text-2xl font-bold text-blue-800">1 млн+</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-teal-50 rounded-xl">
                    <span className="font-medium text-gray-900">Количество линий</span>
                    <span className="text-2xl font-bold text-teal-600">50+ линий</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                    <span className="font-medium text-gray-900">Процессы контроля качества</span>
                    <span className="text-2xl font-bold text-blue-800">36 этапов</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 认证资质 */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Сертификации и квалификации</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-gray-100">
                    <div className="text-3xl mb-2">🏭</div>
                    <h4 className="font-semibold text-gray-900 mb-1">GMPC</h4>
                    <p className="text-gray-600 text-sm">Чистые помещения класса 100,000</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-white rounded-xl border border-gray-100">
                    <div className="text-3xl mb-2">🔬</div>
                    <h4 className="font-semibold text-gray-900 mb-1">ISO</h4>
                    <p className="text-gray-600 text-sm">Система менеджмента качества</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-gray-100">
                    <div className="text-3xl mb-2">🌍</div>
                    <h4 className="font-semibold text-gray-900 mb-1">FDA</h4>
                    <p className="text-gray-600 text-sm">Сертификация FDA США</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-white rounded-xl border border-gray-100">
                    <div className="text-3xl mb-2">⚡</div>
                    <h4 className="font-semibold text-gray-900 mb-1">Автоматизация</h4>
                    <p className="text-gray-600 text-sm">Интеллектуальная производственная система</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 原料与种植基地 */}
      <section id="materials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Сырьевые базы</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Три основные сырьевые базы, обеспечивающие качество и эффективность продукции от источника
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 不二莓茶 */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-4xl mb-4">🍃</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Чай Буэр</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm">
                  <span className="font-medium text-gray-700 w-16">Место:</span>
                  <span className="text-gray-600">Чжанцзяцзе, Хунань</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="font-medium text-gray-700 w-16">Состав:</span>
                  <span className="text-gray-600">Дигидромирицетин</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="font-medium text-gray-700 w-16">Эффект:</span>
                  <span className="text-gray-600">Антиоксидант, отбеливание</span>
                </div>
              </div>
            </div>

            {/* 九节茶 */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Чай Цзюцзе</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm">
                  <span className="font-medium text-gray-700 w-16">Место:</span>
                  <span className="text-gray-600">Дайшань, Гуанси</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="font-medium text-gray-700 w-16">Состав:</span>
                  <span className="text-gray-600">Полифенольные соединения</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="font-medium text-gray-700 w-16">Эффект:</span>
                  <span className="text-gray-600">Противовоспалительный, восстанавливающий</span>
                </div>
              </div>
            </div>

            {/* 长白山人参 */}
            <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Женьшень Чанбайшань</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm">
                  <span className="font-medium text-gray-700 w-16">Место:</span>
                  <span className="text-gray-600">Чанбайшань, Цзилинь</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="font-medium text-gray-700 w-16">Состав:</span>
                  <span className="text-gray-600">Гинзенозиды</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="font-medium text-gray-700 w-16">Эффект:</span>
                  <span className="text-gray-600">Антивозрастной, подтягивающий</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 冻干研究院 */}
      <section id="freeze-dry" className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Институт лиофилизации</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Профессиональная разработка технологий лиофилизации, различные лекарственные формы для удовлетворения потребностей разных продуктов
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* 冻干剂型 */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Матрица лиофилизированных форм</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="text-2xl mb-2">❄️</div>
                  <h4 className="font-medium text-gray-900">Лиофилизированный порошок</h4>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="text-2xl mb-2">🧊</div>
                  <h4 className="font-medium text-gray-900">Лиофилизированные таблетки</h4>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="text-2xl mb-2">🎭</div>
                  <h4 className="font-medium text-gray-900">Лиофилизированная маска</h4>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="text-2xl mb-2">⚪</div>
                  <h4 className="font-medium text-gray-900">Лиофилизированные шарики</h4>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="text-2xl mb-2">🔸</div>
                  <h4 className="font-medium text-gray-900">Лиофилизированные гранулы</h4>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="text-2xl mb-2">🥛</div>
                  <h4 className="font-medium text-gray-900">Лиофилизированное молочко</h4>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="text-2xl mb-2">💧</div>
                  <h4 className="font-medium text-gray-900">Лиофилизированная сыворотка</h4>
                </div>
              </div>
            </div>

            {/* 开发流程 */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Процесс разработки</h3>
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-800 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Разработка рецептуры</h4>
                    <p className="text-gray-600 text-sm">Дизайн и оптимизация формулы</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-teal-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Пилотное производство</h4>
                    <p className="text-gray-600 text-sm">Проверка малосерийного производства</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-800 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Валидация</h4>
                    <p className="text-gray-600 text-sm">Тестирование стабильности и безопасности</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-teal-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Масштабирование</h4>
                    <p className="text-gray-600 text-sm">Крупномасштабное производство и поставка</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 资质与荣誉 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Квалификации и награды</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Авторитетные сертификаты и отраслевые награды, демонстрирующие силу предприятия и гарантию качества
            </p>
          </div>

          {/* 资质证书图片展示 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="relative h-64 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <ImageModal 
                src="/ppt/weitai10.png" 
                alt="Сертификат квалификации предприятия" 
                className="w-full h-full"
              />
            </div>
            <div className="relative h-64 bg-gradient-to-br from-teal-50 to-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <ImageModal 
                src="/ppt/weitai14.png" 
                alt="Сертификат награды предприятия" 
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-3">🏆</div>
              <h4 className="font-semibold text-gray-900 text-sm">Высокотехнологичное предприятие</h4>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-3">⭐</div>
              <h4 className="font-semibold text-gray-900 text-sm">Специализированное и новое</h4>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-3">🏭</div>
              <h4 className="font-semibold text-gray-900 text-sm">Сертификация GMPC</h4>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-3">🔬</div>
              <h4 className="font-semibold text-gray-900 text-sm">Сертификация ISO</h4>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-3">🌍</div>
              <h4 className="font-semibold text-gray-900 text-sm">Сертификация FDA</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 新闻中心 */}
      <section id="news" className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Новостной центр</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Следите за отраслевой динамикой, делитесь научными достижениями и прогрессом сотрудничества
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 新闻卡片1 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 relative">
                <ImageModal 
                  src="/ppt/weitai07.png" 
                  alt="Стратегическое сотрудничество Weitai Bio с Южным медицинским университетом" 
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Weitai Bio подписала соглашение о стратегическом сотрудничестве с Южным медицинским университетом</h3>
                <p className="text-gray-600 text-sm mb-4">Обе стороны будут проводить глубокое сотрудничество в области дерматологических исследований, проверки эффективности и других областях, совместно продвигая интегрированное развитие производства, обучения и исследований.</p>
                
              </div>
            </div>

            {/* 新闻卡片2 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-teal-100 to-teal-200 relative">
                <ImageModal 
                  src="/ppt/weitai15.png" 
                  alt="Новый цех класса 100,000 GMPC официально введен в эксплуатацию" 
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Новый цех класса 100,000 GMPC официально введен в эксплуатацию</h3>
                <p className="text-gray-600 text-sm mb-4">Новая автоматизированная производственная линия официально введена в эксплуатацию, суточная производительность увеличена до 1 миллиона+, что дополнительно повышает способность к поставкам.</p>
                
              </div>
            </div>

            {/* 新闻卡片3 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 relative">
                <ImageModal 
                  src="/ppt/weitai08.png" 
                  alt="Совместное строительство ключевой лаборатории синтетических биопротеинов с Аньхойским медицинским университетом" 
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Совместное строительство ключевой лаборатории синтетических биопротеинов с Аньхойским медицинским университетом</h3>
                <p className="text-gray-600 text-sm mb-4">Ключевая лаборатория синтетических биопротеинов провинции Аньхой: комбинация биологии + фармакологии + дерматологии, формирующая решения для проблемной кожи.</p>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 联系方式 */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* 公司信息 */}
            <div className="md:col-span-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-4">
                Weitai Bio
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Биотехнологическая компания, специализирующаяся на слиянии восточной эстетики и современных технологий, стремящаяся создать суперфабрику функциональной косметики.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span className="text-gray-300">13973553688</span>
                </div>
                {/* <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <span className="text-gray-300">info@weitaibio.com</span>
                </div> */}
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <div className="flex flex-col space-y-1">
                    <span className="text-gray-300">Завод Weitai в Гуанчжоу: № 77, 15-я община деревни Далан, улица Байюньху, район Байюнь, Гуанчжоу</span>
                    <span className="text-gray-300">Завод Weitai в Гуандуне: № 18, Восточная дорога Таоюань, промышленный парк Сунся, город Шишань, район Наньхай, Фошань</span>
                    <span className="text-gray-300">Завод Weitai в Хунани: корпус 11, интеллектуальный промышленный парк Лань Юэ Гу, Северная дорога Сеюань, зона экономического развития Нинсян, Чанша</span>
                    <span className="text-gray-300">Маркетинговый центр: комната 801, здание тестирования Байюнь Мейвань, № 408, дорога Гуанъюнь, район Байюнь, Гуанчжоу</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 快速链接 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">О нас</a></li>
                <li><a href="#research" className="text-gray-300 hover:text-white transition-colors">Исследования</a></li>
                <li><a href="#production" className="text-gray-300 hover:text-white transition-colors">Производство</a></li>
                <li><a href="#solutions" className="text-gray-300 hover:text-white transition-colors">Решения</a></li>
                <li><a href="#news" className="text-gray-300 hover:text-white transition-colors">Новости</a></li>
                <li><a href="https://www.weitaiclub.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Магазин</a></li>
              </ul>
            </div>

            {/* 微信二维码 */}
            {/* <div>
              <h3 className="text-lg font-semibold mb-4">Консультация WeChat</h3>
              <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center mb-4">
                <Image
                  src="/ppt/weixin.png"
                  alt="QR-код официального аккаунта WeChat"
                  width={128}
                  height={128}
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-300 text-sm">Отсканируйте QR-код, чтобы подписаться на официальный аккаунт WeChat</p>
            </div> */}
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">Copyright © 2025 All Rights Reserved  Микропептид Групп
              <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                Регистрационный номер：Юэ ICP бэй 2023152128 хао
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* 移动端底部固定操作条 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50 lg:hidden">
        <div className="flex space-x-3">
          <a href="tel:+8613973553688" className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center space-x-2 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            <span>Быстрый звонок</span>
          </a>
          
          {/* <button className="flex-1 bg-gradient-to-r from-teal-600 to-teal-700 text-white py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center space-x-2 hover:from-teal-700 hover:to-teal-800 transition-all duration-300 shadow-lg">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
            </svg>
            <span>Консультация WeChat</span>
          </button> */}
          
          <a href="https://www.weitaiclub.com" target="_blank" rel="noopener noreferrer" className="flex-1 border-2 border-gray-300 text-gray-700 py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center space-x-2 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5zM6 12a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd"/>
            </svg>
            <span>Магазин</span>
          </a>
        </div>
      </div>

      {/* 为移动端底部操作条预留空间 */}
      <div className="h-20 lg:hidden"></div>
    </div>
  );
}
