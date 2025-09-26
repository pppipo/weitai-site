import React from "react";
import Image from "next/image";
import ScrollAnimation from "../components/ScrollAnimation";
import ImageModal from "../components/ImageModal";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollAnimation />
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-teal-600 bg-clip-text text-transparent">
                微肽生物
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4 xl:space-x-8">
                <a href="#" className="text-gray-900 hover:text-blue-800 px-2 xl:px-3 py-2 text-sm font-medium transition-colors">首页</a>
                <a href="#about" className="text-gray-600 hover:text-blue-800 px-2 xl:px-3 py-2 text-sm font-medium transition-colors">关于我们</a>
                <a href="#research" className="text-gray-600 hover:text-blue-800 px-2 xl:px-3 py-2 text-sm font-medium transition-colors">研发实力</a>
                <a href="#production" className="text-gray-600 hover:text-blue-800 px-2 xl:px-3 py-2 text-sm font-medium transition-colors">生产实力</a>
                <a href="#materials" className="text-gray-600 hover:text-blue-800 px-2 xl:px-3 py-2 text-sm font-medium transition-colors">原料基地</a>
                <a href="#freeze-dry" className="text-gray-600 hover:text-blue-800 px-2 xl:px-3 py-2 text-sm font-medium transition-colors">冻干研究院</a>
                <a href="#solutions" className="text-gray-600 hover:text-blue-800 px-2 xl:px-3 py-2 text-sm font-medium transition-colors">解决方案</a>
                <a href="#news" className="text-gray-600 hover:text-blue-800 px-2 xl:px-3 py-2 text-sm font-medium transition-colors">新闻中心</a>
                <a href="#contact" className="text-gray-600 hover:text-blue-800 px-2 xl:px-3 py-2 text-sm font-medium transition-colors">联系方式</a>
              </div>
            </div>
            {/* 移动端菜单按钮 */}
            <div className="lg:hidden">
              <button className="text-gray-600 hover:text-blue-800 p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
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
                功效性护肤
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-blue-300 bg-clip-text text-transparent">
                超级工厂
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              生物技术驱动的产研闭环 · 打造国际化功效护肤品牌
            </p>

            

            {/* 数字徽章 - 移动端优化 */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
              <div className="group bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 group-hover:text-blue-300 transition-colors">3</div>
                <div className="text-blue-100 text-xs sm:text-sm">大生产基地</div>
              </div>
              <div className="group bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 group-hover:text-teal-300 transition-colors">10</div>
                <div className="text-blue-100 text-xs sm:text-sm">大研究院</div>
              </div>
              <div className="group bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 group-hover:text-blue-300 transition-colors">50+</div>
                <div className="text-blue-100 text-xs sm:text-sm">条生产线</div>
              </div>
              <div className="group bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 group-hover:text-teal-300 transition-colors">十万级</div>
                <div className="text-blue-100 text-xs sm:text-sm">GMPC车间</div>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">解决方案</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              四大核心业务板块，为客户提供全方位的美妆产品解决方案
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            <div className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 scroll-reveal stagger-1">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">OEM/ODM 一站式</h3>
              <p className="text-gray-600 mb-6">从配方研发到生产交付，提供完整的代工服务解决方案</p>
      
            </div>

            {/* 医美术后修复 */}
            <div className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 scroll-reveal stagger-2">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">医美术后修复</h3>
              <p className="text-gray-600 mb-6">专业医美级修复产品，临床验证安全有效</p>
              
            </div>

            {/* 冻干技术平台 */}
            <div className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 scroll-reveal stagger-3">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">冻干技术平台</h3>
              <p className="text-gray-600 mb-6">多种冻干剂型，保持活性成分稳定性与功效性</p>
              
            </div>

            {/* 功效护肤赛道 */}
            <div className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 scroll-reveal stagger-4">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">功效护肤赛道</h3>
              <p className="text-gray-600 mb-6">美白、抗衰、防脱、修复等多个功效方向深度布局</p>
              
            </div>
          </div>
        </div>
      </section>

      {/* 联合实验室与研发实力 */}
      <section id="research" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 scroll-reveal">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">研发实力</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              与知名高校深度合作，构建强大的研发体系和技术平台
            </p>
          </div>

          {/* 联合实验室 */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12 scroll-reveal">联合实验室</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <div className="group text-center p-6 sm:p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 scroll-reveal stagger-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">南方医科大学</h4>
                <p className="text-sm sm:text-base text-gray-600">聚焦透皮技术、纳米包裹、天然原料开发；累计 56 项专利，合作企业包括华润三九、丹姿、霸王、HBN 等。</p>
              </div>

              <div className="group text-center p-6 sm:p-8 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl sm:rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">安徽医科大学</h4>
                <p className="text-sm sm:text-base text-gray-600">联合重点实验室，开发高活性、高稳定性生物活性成分（如重组Ⅲ型胶原蛋白、金属硫蛋白），替代传统动物提取物。</p>
              </div>

              <div className="group text-center p-6 sm:p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl sm:rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">湘雅专家团队</h4>
                <p className="text-sm sm:text-base text-gray-600">自 2022 年起联合攻关，专注医美行业高质量发展，提供定制化美肤解决方案，强调临床验证与行业推动。</p>
              </div>
            </div>
          </div>

          {/* 技术平台 */}
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">核心技术平台</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-800 font-bold">冻</span>
                </div>
                <h4 className="font-medium text-gray-900 mb-2">冻干稳定性</h4>
                <p className="text-gray-600 text-xs">活性保持技术</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal-600 font-bold">纳</span>
                </div>
                <h4 className="font-medium text-gray-900 mb-2">纳米载体</h4>
                <p className="text-gray-600 text-xs">微球包埋技术</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-800 font-bold">仿</span>
                </div>
                <h4 className="font-medium text-gray-900 mb-2">仿生防晒</h4>
                <p className="text-gray-600 text-xs">物理化学复配</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal-600 font-bold">微</span>
                </div>
                <h4 className="font-medium text-gray-900 mb-2">微乳化</h4>
                <p className="text-gray-600 text-xs">超细分散技术</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-800 font-bold">透</span>
                </div>
                <h4 className="font-medium text-gray-900 mb-2">透皮吸收</h4>
                <p className="text-gray-600 text-xs">载体渗透技术</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 生产实力 */}
      <section id="production" className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">生产实力</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              十万级GMPC车间，全自动化生产线，确保产品质量与交付能力
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* 生产能力 */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">生产能力</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                    <span className="font-medium text-gray-900">日产能</span>
                    <span className="text-2xl font-bold text-blue-800">100万+</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-teal-50 rounded-xl">
                    <span className="font-medium text-gray-900">生产线数量</span>
                    <span className="text-2xl font-bold text-teal-600">50+条</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                    <span className="font-medium text-gray-900">质检流程</span>
                    <span className="text-2xl font-bold text-blue-800">36道</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 认证资质 */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">认证资质</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-gray-100">
                    <div className="text-3xl mb-2">🏭</div>
                    <h4 className="font-semibold text-gray-900 mb-1">GMPC</h4>
                    <p className="text-gray-600 text-sm">十万级洁净车间</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-white rounded-xl border border-gray-100">
                    <div className="text-3xl mb-2">🔬</div>
                    <h4 className="font-semibold text-gray-900 mb-1">ISO</h4>
                    <p className="text-gray-600 text-sm">质量管理体系</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-gray-100">
                    <div className="text-3xl mb-2">🌍</div>
                    <h4 className="font-semibold text-gray-900 mb-1">FDA</h4>
                    <p className="text-gray-600 text-sm">美国食药监认证</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-white rounded-xl border border-gray-100">
                    <div className="text-3xl mb-2">⚡</div>
                    <h4 className="font-semibold text-gray-900 mb-1">自动化</h4>
                    <p className="text-gray-600 text-sm">智能生产系统</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">原料基地</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              三大核心原料基地，从源头保证产品品质与功效
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 不二莓茶 */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-4xl mb-4">🍃</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">不二莓茶</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm">
                  <span className="font-medium text-gray-700 w-16">产地：</span>
                  <span className="text-gray-600">湖南张家界</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="font-medium text-gray-700 w-16">成分：</span>
                  <span className="text-gray-600">二氢杨梅素</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="font-medium text-gray-700 w-16">功效：</span>
                  <span className="text-gray-600">抗氧化、美白</span>
                </div>
              </div>
              <a href="#" className="text-green-600 font-medium hover:text-green-700 transition-colors">
                了解更多 →
              </a>
            </div>

            {/* 九节茶 */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">九节茶</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm">
                  <span className="font-medium text-gray-700 w-16">产地：</span>
                  <span className="text-gray-600">广西大瑶山</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="font-medium text-gray-700 w-16">成分：</span>
                  <span className="text-gray-600">多酚类化合物</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="font-medium text-gray-700 w-16">功效：</span>
                  <span className="text-gray-600">抗炎、修复</span>
                </div>
              </div>
              <a href="#" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                了解更多 →
              </a>
            </div>

            {/* 长白山人参 */}
            <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">长白山人参</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm">
                  <span className="font-medium text-gray-700 w-16">产地：</span>
                  <span className="text-gray-600">吉林长白山</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="font-medium text-gray-700 w-16">成分：</span>
                  <span className="text-gray-600">人参皂苷</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="font-medium text-gray-700 w-16">功效：</span>
                  <span className="text-gray-600">抗衰、紧致</span>
                </div>
              </div>
              <a href="#" className="text-red-600 font-medium hover:text-red-700 transition-colors">
                了解更多 →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 冻干研究院 */}
      <section id="freeze-dry" className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">冻干研究院</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              专业冻干技术研发，多种剂型满足不同产品需求
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* 冻干剂型 */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">冻干剂型矩阵</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="text-2xl mb-2">❄️</div>
                  <h4 className="font-medium text-gray-900">冻干粉</h4>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="text-2xl mb-2">🧊</div>
                  <h4 className="font-medium text-gray-900">冻干片</h4>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="text-2xl mb-2">🎭</div>
                  <h4 className="font-medium text-gray-900">冻干面膜</h4>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="text-2xl mb-2">⚪</div>
                  <h4 className="font-medium text-gray-900">冻干球</h4>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="text-2xl mb-2">🔸</div>
                  <h4 className="font-medium text-gray-900">冻干粒</h4>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="text-2xl mb-2">🥛</div>
                  <h4 className="font-medium text-gray-900">冻干乳</h4>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="text-2xl mb-2">💧</div>
                  <h4 className="font-medium text-gray-900">冻干精华</h4>
                </div>
              </div>
            </div>

            {/* 开发流程 */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">开发流程</h3>
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-800 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">处方开发</h4>
                    <p className="text-gray-600 text-sm">配方设计与优化</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-teal-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">中试</h4>
                    <p className="text-gray-600 text-sm">小批量试产验证</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-800 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">验证</h4>
                    <p className="text-gray-600 text-sm">稳定性与安全性测试</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-teal-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">放量</h4>
                    <p className="text-gray-600 text-sm">规模化生产交付</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">资质与荣誉</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              权威认证与行业荣誉，彰显企业实力与品质保证
            </p>
          </div>

          {/* 资质证书图片展示 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="relative h-64 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <ImageModal 
                src="/ppt/weitai10.png" 
                alt="企业资质证书" 
                className="w-full h-full"
              />
            </div>
            <div className="relative h-64 bg-gradient-to-br from-teal-50 to-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <ImageModal 
                src="/ppt/weitai14.png" 
                alt="企业荣誉证书" 
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-3">🏆</div>
              <h4 className="font-semibold text-gray-900 text-sm">高新技术企业</h4>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-3">⭐</div>
              <h4 className="font-semibold text-gray-900 text-sm">专精特新</h4>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-3">🏭</div>
              <h4 className="font-semibold text-gray-900 text-sm">GMPC认证</h4>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-3">🔬</div>
              <h4 className="font-semibold text-gray-900 text-sm">ISO认证</h4>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-3">🌍</div>
              <h4 className="font-semibold text-gray-900 text-sm">FDA认证</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 新闻中心 */}
      <section id="news" className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">新闻中心</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              关注行业动态，分享科研成果与合作进展
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 新闻卡片1 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 relative">
                <ImageModal 
                  src="/ppt/weitai07.png" 
                  alt="微肽生物与南方医科大学战略合作" 
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">微肽生物与南方医科大学签署战略合作协议</h3>
                <p className="text-gray-600 text-sm mb-4">双方将在皮肤科学研究、功效验证等领域开展深度合作，共同推进产学研一体化发展。</p>
                
              </div>
            </div>

            {/* 新闻卡片2 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-teal-100 to-teal-200 relative">
                <ImageModal 
                  src="/ppt/weitai15.png" 
                  alt="新建十万级GMPC车间正式投产" 
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">新建十万级GMPC车间正式投产</h3>
                <p className="text-gray-600 text-sm mb-4">全新的自动化生产线正式投入使用，日产能提升至100万+，进一步提升交付能力。</p>
                
              </div>
            </div>

            {/* 新闻卡片3 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 relative">
                <ImageModal 
                  src="/ppt/weitai08.png" 
                  alt="安徽医科大学共建合成生物蛋白重点实验室" 
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">安徽医科大学共建合成生物蛋白重点实验室</h3>
                <p className="text-gray-600 text-sm mb-4">合成生物蛋白安徽省联合共建重点实验室： 生物学+药 学+皮肤学组合， 形成问题皮肤解决方案。</p>
                
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
                微肽生物
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                专注于东方美学与现代科技融合的生物科技公司，致力于打造功效性护肤超级工厂。
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span className="text-gray-300">13973553688</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <span className="text-gray-300">info@weitaibio.com</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <div className="flex flex-col space-y-1">
                    <span className="text-gray-300">广州微肽工厂：广州市白云区白云湖街道大朗村15社77号</span>
                    <span className="text-gray-300">广东微肽工厂：佛山市南海区狮山镇松岗松夏工业园桃园东路18号</span>
                    <span className="text-gray-300">湖南微肽工厂：长沙市宁乡经济开发区谐园北路蓝月谷智能产业园11栋</span>
                    <span className="text-gray-300">营销中心：广州市白云区广云路408号白云美湾检测大厦801</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 快速链接 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">快速链接</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">关于我们</a></li>
                <li><a href="#research" className="text-gray-300 hover:text-white transition-colors">研发实力</a></li>
                <li><a href="#production" className="text-gray-300 hover:text-white transition-colors">生产实力</a></li>
                <li><a href="#solutions" className="text-gray-300 hover:text-white transition-colors">解决方案</a></li>
                <li><a href="#news" className="text-gray-300 hover:text-white transition-colors">新闻中心</a></li>
              </ul>
            </div>

            {/* 微信二维码 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">微信咨询</h3>
              <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center mb-4">
                <Image
                  src="/ppt/weixin.png"
                  alt="微信公众号二维码"
                  width={128}
                  height={128}
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-300 text-sm">扫码关注微信公众号</p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">Copyright © 2025 All Rights Reserved  微肽集团  
              <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                备案号：粤ICP备2023152128号
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* 移动端底部固定操作条 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-40">
        {/* 移动端底部固定操作条 */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50 lg:hidden">
          <div className="flex space-x-3">
            <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center space-x-2 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span>一键拨号</span>
            </button>
            
            <button className="flex-1 bg-gradient-to-r from-teal-600 to-teal-700 text-white py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center space-x-2 hover:from-teal-700 hover:to-teal-800 transition-all duration-300 shadow-lg">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
              </svg>
              <span>微信咨询</span>
            </button>
            
            <button className="flex-1 border-2 border-gray-300 text-gray-700 py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center space-x-2 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V7zM5 9a1 1 0 000 2h6a1 1 0 100-2H5z" clipRule="evenodd"/>
              </svg>
              <span>白皮书</span>
            </button>
          </div>
        </div>

        {/* 为移动端底部操作条预留空间 */}
        <div className="h-20 lg:hidden"></div>
      </div>
    </div>
  );
}
