import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* 顶部导航 */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-blue-800 bg-clip-text text-transparent">
                微肽集团
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-gray-900 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-colors">首页</a>
                <a href="#about" className="text-gray-600 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-colors">关于我们</a>
                <a href="#solutions" className="text-gray-600 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-colors">解决方案</a>
                <a href="#research" className="text-gray-600 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-colors">研发实力</a>
                <a href="#production" className="text-gray-600 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-colors">生产实力</a>
                <a href="#contact" className="text-gray-600 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-colors">联系我们</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero 区域 - 洁净生物科技风 */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-16">
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-blue-200 to-transparent"></div>
          
          {/* 科技感SVG背景图案 */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* DNA双螺旋结构 */}
              <g stroke="#1e40af" strokeWidth="2" fill="none">
                <path d="M100 200 Q200 150 300 200 T500 200 T700 200 T900 200" />
                <path d="M100 250 Q200 300 300 250 T500 250 T700 250 T900 250" />
                <line x1="150" y1="175" x2="150" y2="275" />
                <line x1="250" y1="175" x2="250" y2="275" />
                <line x1="350" y1="175" x2="350" y2="275" />
                <line x1="450" y1="175" x2="450" y2="275" />
              </g>
              
              {/* 分子结构 */}
              <g fill="#1e40af" stroke="#1e40af" strokeWidth="1">
                <circle cx="800" cy="150" r="8" />
                <circle cx="850" cy="120" r="6" />
                <circle cx="820" cy="100" r="5" />
                <circle cx="780" cy="130" r="4" />
                <line x1="800" y1="150" x2="850" y2="120" />
                <line x1="800" y1="150" x2="820" y2="100" />
                <line x1="800" y1="150" x2="780" y2="130" />
              </g>
              
              {/* 六边形网格 */}
              <g stroke="#1e40af" strokeWidth="1" fill="none" opacity="0.3">
                <polygon points="200,400 230,385 260,400 260,430 230,445 200,430" />
                <polygon points="260,400 290,385 320,400 320,430 290,445 260,430" />
                <polygon points="230,445 260,430 290,445 290,475 260,490 230,475" />
                <polygon points="290,445 320,430 350,445 350,475 320,490 290,475" />
              </g>
              
              {/* 数据流线条 */}
              <g stroke="#1e40af" strokeWidth="1" fill="none" opacity="0.4">
                <path d="M50 500 Q150 480 250 500 T450 500 T650 500">
                  <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0" dur="3s" repeatCount="indefinite" />
                </path>
                <path d="M100 550 Q200 530 300 550 T500 550 T700 550">
                  <animate attributeName="stroke-dasharray" values="100,0;50,50;0,100" dur="3s" repeatCount="indefinite" />
                </path>
              </g>
              
              {/* 原子轨道 */}
              <g stroke="#1e40af" strokeWidth="1" fill="none" opacity="0.2">
                <ellipse cx="1000" cy="400" rx="80" ry="30" transform="rotate(0 1000 400)" />
                <ellipse cx="1000" cy="400" rx="80" ry="30" transform="rotate(60 1000 400)" />
                <ellipse cx="1000" cy="400" rx="80" ry="30" transform="rotate(120 1000 400)" />
                <circle cx="1000" cy="400" r="4" fill="#1e40af" />
              </g>
            </svg>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* 主标题 */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block text-gray-900 mb-4">功效性护肤</span>
              <span className="block bg-gradient-to-r from-blue-800 via-blue-800 to-blue-900 bg-clip-text text-transparent">
                超级工厂
              </span>
            </h1>
            
            {/* 副标题 */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              融合东方美学与现代生物科技<br />
              <span className="text-blue-800 font-medium">冻干技术 × 功效护肤 × 定制服务</span>
            </p>
            
            {/* CTA 按钮组 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-800 to-blue-800 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                了解解决方案
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-900 hover:text-blue-800 transition-all duration-300">
                联系我们
              </button>
            </div>
          </div>
        </div>
        
        {/* 底部滚动提示 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* 关于我们 - 公司简介 */}
      <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* 左侧：公司介绍 */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-900 rounded-full text-sm font-medium">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  专业 · 创新 · 品质
                </div>
                <h2 className="text-4xl font-bold text-gray-900">
                  关于微肽集团
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  中国功效性护肤品制造领军企业
                </p>
              </div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  微肽集团成立于2018年，专注于功效性护肤品的研发、生产与服务。我们融合东方美学与现代生物科技，致力于为全球合作伙伴提供一站式美妆解决方案。
                </p>
                <p>
                  集团拥有完整的产业链布局，从原料基地到生产制造，从研发创新到品牌服务，构建了涵盖OEM/ODM定制、医美术后修护、冻干技术平台、功效护肤管线的四大核心业务体系。
                </p>
                <p>
                  秉承&ldquo;不止于产品，更定义服务&rdquo;的企业理念，我们与清华大学、中科院等顶尖科研院所深度合作，持续推动行业技术创新与标准制定。
                </p>
              </div>

              {/* 核心数据展示 */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-blue-800 mb-2">6+</div>
                  <div className="text-gray-600 font-medium">年专业经验</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-blue-800 mb-2">50+</div>
                  <div className="text-gray-600 font-medium">自动化产线</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-blue-800 mb-2">200+</div>
                  <div className="text-gray-600 font-medium">合作品牌</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-blue-800 mb-2">3</div>
                  <div className="text-gray-600 font-medium">生产基地</div>
                </div>
              </div>
            </div>

            {/* 右侧：企业形象展示 */}
            <div className="relative">
              {/* 主要展示区域 */}
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 h-96">
                {/* 装饰性背景元素 */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute top-4 right-4 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-4 left-4 w-24 h-24 bg-indigo-200/40 rounded-full blur-xl"></div>
                </div>
                
                {/* 企业标识和核心价值 */}
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center space-y-6">
                  {/* 企业LOGO占位 */}
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-800 to-indigo-600 rounded-2xl flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">微肽集团</h3>
                    <p className="text-gray-600 max-w-xs">
                      融合东方美学与现代科技<br/>
                      定义功效护肤新标准
                    </p>
                  </div>
                  
                  {/* 核心优势标签 */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-medium">冻干技术</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">GMPC认证</span>
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">产学研融合</span>
                  </div>
                </div>
              </div>

              {/* 浮动信息卡片 */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">ISO 9001认证</div>
                    <div className="text-xs text-gray-500">国际质量管理体系</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 解决方案卡片 - 四宫格布局 */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">核心解决方案</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              四大业务板块，全方位服务美妆产业链
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* OEM/ODM 定制服务 */}
            <div className="group bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">OEM/ODM 定制服务</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                从配方研发到规模化生产，提供一站式定制化服务。覆盖护肤、彩妆、个护等全品类产品开发。
              </p>
              <div className="flex items-center text-blue-800 font-medium group-hover:text-blue-900">
                了解更多 
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* 医美术后修护 */}
            <div className="group bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl hover:border-teal-200 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-800 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">医美术后修护</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                专业医美术后护理产品线，温和修护，加速肌肤恢复。与知名医美机构深度合作。
              </p>
              <div className="flex items-center text-teal-600 font-medium group-hover:text-teal-700">
                了解更多 
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* 冻干技术平台 */}
            <div className="group bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl hover:border-indigo-200 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">冻干技术平台</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                先进冻干技术，保持活性成分稳定性。多种剂型选择：粉末、片剂、面膜、微球等。
              </p>
              <div className="flex items-center text-indigo-600 font-medium group-hover:text-indigo-700">
                了解更多 
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* 功效护肤管线 */}
            <div className="group bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl hover:border-purple-200 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">功效护肤管线</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                美白、抗衰、防脱、修复等核心功效赛道。科学验证，临床测试，确保产品功效。
              </p>
              <div className="flex items-center text-purple-600 font-medium group-hover:text-purple-700">
                了解更多 
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 产品矩阵展示 */}
      <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-900 rounded-full text-sm font-medium mb-4">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd"/>
              </svg>
              产品矩阵
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">全品类产品线</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              覆盖护肤、彩妆、个护全品类，满足不同市场需求
            </p>
          </div>

          {/* 产品分类导航 */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-3 bg-blue-800 text-white rounded-full font-medium hover:bg-blue-900 transition-colors">
              全部产品
            </button>
            <button className="px-6 py-3 bg-white text-gray-600 rounded-full font-medium hover:bg-gray-50 border border-gray-200 transition-colors">
              功效护肤
            </button>
            <button className="px-6 py-3 bg-white text-gray-600 rounded-full font-medium hover:bg-gray-50 border border-gray-200 transition-colors">
              医美修护
            </button>
            <button className="px-6 py-3 bg-white text-gray-600 rounded-full font-medium hover:bg-gray-50 border border-gray-200 transition-colors">
              冻干技术
            </button>
            <button className="px-6 py-3 bg-white text-gray-600 rounded-full font-medium hover:bg-gray-50 border border-gray-200 transition-colors">
              彩妆个护
            </button>
          </div>

          {/* 产品矩阵网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* 功效护肤系列 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              {/* 产品包装展示区域 */}
              <div className="relative mb-6 h-48 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="skincareBg" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f0f9ff" />
                      <stop offset="100%" stopColor="#e0e7ff" />
                    </linearGradient>
                    <linearGradient id="bottleGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1e40af" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                    <linearGradient id="bottleGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>
                  </defs>
                  
                  {/* 背景 */}
                  <rect width="300" height="200" fill="url(#skincareBg)" />
                  
                  {/* 精华瓶1 */}
                  <rect x="60" y="40" width="25" height="80" rx="3" fill="url(#bottleGrad1)" />
                  <rect x="62" y="42" width="21" height="76" rx="2" fill="#1e3a8a" opacity="0.8" />
                  <rect x="58" y="35" width="29" height="12" rx="6" fill="#374151" />
                  <rect x="60" y="37" width="25" height="8" rx="4" fill="#6b7280" />
                  <text x="72" y="135" textAnchor="middle" fill="#1e40af" fontSize="8" fontWeight="bold">美白精华</text>
                  
                  {/* 精华瓶2 */}
                  <rect x="120" y="30" width="30" height="90" rx="4" fill="url(#bottleGrad2)" />
                  <rect x="122" y="32" width="26" height="86" rx="3" fill="#0c4a6e" opacity="0.8" />
                  <rect x="117" y="25" width="36" height="15" rx="7" fill="#374151" />
                  <rect x="119" y="27" width="32" height="11" rx="5" fill="#6b7280" />
                  <text x="135" y="135" textAnchor="middle" fill="#0ea5e9" fontSize="8" fontWeight="bold">抗衰精华</text>
                  
                  {/* 面霜罐 */}
                  <ellipse cx="210" cy="100" rx="25" ry="15" fill="url(#bottleGrad1)" />
                  <ellipse cx="210" cy="95" rx="25" ry="15" fill="#1e3a8a" />
                  <ellipse cx="210" cy="90" rx="23" ry="13" fill="#f8fafc" />
                  <ellipse cx="210" cy="85" rx="20" ry="10" fill="#e2e8f0" />
                  <ellipse cx="210" cy="80" rx="15" ry="8" fill="#374151" />
                  <text x="210" y="135" textAnchor="middle" fill="#1e40af" fontSize="8" fontWeight="bold">修护面霜</text>
                  
                  {/* 装饰元素 */}
                  <circle cx="50" cy="160" r="3" fill="#3b82f6" opacity="0.3" />
                  <circle cx="250" cy="40" r="4" fill="#0ea5e9" opacity="0.3" />
                  <circle cx="30" cy="60" r="2" fill="#1e40af" opacity="0.4" />
                  
                  {/* 品牌标识 */}
                  <rect x="20" y="15" width="80" height="20" rx="10" fill="white" opacity="0.9" />
                  <text x="60" y="27" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">功效护肤</text>
                </svg>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-900 text-xs font-medium rounded-full">热销</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">功效护肤系列</h3>
              <p className="text-gray-600 text-sm mb-4">美白、抗衰、保湿、修复四大功效赛道</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">美白精华系列</span>
                  <span className="text-blue-800 font-medium">12款</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">抗衰老系列</span>
                  <span className="text-blue-800 font-medium">8款</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">保湿修护系列</span>
                  <span className="text-blue-800 font-medium">15款</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">敏感肌专用</span>
                  <span className="text-blue-800 font-medium">6款</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="text-xs text-gray-500">起订量: 1000件</div>
                <button className="text-blue-800 text-sm font-medium hover:text-blue-900">查看详情 →</button>
              </div>
            </div>

            {/* 医美修护系列 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              {/* 产品包装展示区域 */}
              <div className="relative mb-6 h-48 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="medicalBg" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f0fdfa" />
                      <stop offset="100%" stopColor="#ecfeff" />
                    </linearGradient>
                    <linearGradient id="medicalTeal" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0d9488" />
                      <stop offset="100%" stopColor="#14b8a6" />
                    </linearGradient>
                    <linearGradient id="medicalBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0891b2" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                  
                  {/* 背景 */}
                  <rect width="300" height="200" fill="url(#medicalBg)" />
                  
                  {/* 医用面膜包装 */}
                  <rect x="50" y="45" width="40" height="60" rx="3" fill="url(#medicalTeal)" />
                  <rect x="52" y="47" width="36" height="56" rx="2" fill="white" />
                  <rect x="54" y="49" width="32" height="20" rx="2" fill="#0d9488" />
                  <rect x="54" y="72" width="32" height="2" fill="#14b8a6" />
                  <rect x="54" y="76" width="32" height="2" fill="#14b8a6" />
                  <rect x="54" y="80" width="20" height="2" fill="#14b8a6" />
                  <circle cx="70" cy="95" r="8" fill="#f0fdfa" stroke="#0d9488" strokeWidth="2" />
                  <path d="M66 95 L69 98 L74 91" stroke="#0d9488" strokeWidth="2" fill="none" />
                  <text x="70" y="120" textAnchor="middle" fill="#0d9488" fontSize="8" fontWeight="bold">修护面膜</text>
                  
                  {/* 精华液瓶 */}
                  <rect x="130" y="40" width="25" height="75" rx="3" fill="url(#medicalBlue)" />
                  <rect x="132" y="42" width="21" height="71" rx="2" fill="#0c4a6e" opacity="0.8" />
                  <rect x="127" y="35" width="31" height="12" rx="6" fill="#374151" />
                  <rect x="129" y="37" width="27" height="8" rx="4" fill="#6b7280" />
                  <circle cx="142" cy="50" r="6" fill="white" opacity="0.9" />
                  <text x="142" y="55" textAnchor="middle" fill="#0891b2" fontSize="6" fontWeight="bold">+</text>
                  <text x="142" y="130" textAnchor="middle" fill="#0891b2" fontSize="8" fontWeight="bold">舒缓精华</text>
                  
                  {/* 修护霜罐 */}
                  <ellipse cx="210" cy="95" rx="25" ry="15" fill="url(#medicalTeal)" />
                  <ellipse cx="210" cy="90" rx="25" ry="15" fill="#0f766e" />
                  <ellipse cx="210" cy="85" rx="23" ry="13" fill="white" />
                  <ellipse cx="210" cy="80" rx="20" ry="10" fill="#f0fdfa" />
                  <ellipse cx="210" cy="75" rx="15" ry="8" fill="#374151" />
                  <circle cx="210" cy="70" r="10" fill="white" />
                  <circle cx="210" cy="70" r="6" fill="#0d9488" />
                  <text x="210" y="125" textAnchor="middle" fill="#0d9488" fontSize="8" fontWeight="bold">屏障修护</text>
                  
                  {/* 医用标识 */}
                  <circle cx="40" cy="40" r="8" fill="white" />
                  <circle cx="40" cy="40" r="6" fill="#dc2626" />
                  <path d="M37 40 L43 40 M40 37 L40 43" stroke="white" strokeWidth="1.5" />
                  
                  <circle cx="260" cy="160" r="8" fill="white" />
                  <circle cx="260" cy="160" r="6" fill="#dc2626" />
                  <path d="M257 160 L263 160 M260 157 L260 163" stroke="white" strokeWidth="1.5" />
                  
                  {/* 装饰元素 */}
                  <circle cx="30" cy="170" r="3" fill="#14b8a6" opacity="0.4" />
                  <circle cx="270" cy="50" r="4" fill="#0891b2" opacity="0.3" />
                  
                  {/* 品牌标识 */}
                  <rect x="15" y="15" width="90" height="22" rx="11" fill="white" opacity="0.95" />
                  <text x="60" y="28" textAnchor="middle" fill="#0d9488" fontSize="10" fontWeight="bold">医美修护</text>
                </svg>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-800 to-teal-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full">专业</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">医美修护系列</h3>
              <p className="text-gray-600 text-sm mb-4">术后修护，温和安全，加速恢复</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">术后修护面膜</span>
                  <span className="text-teal-600 font-medium">5款</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">舒缓精华液</span>
                  <span className="text-teal-600 font-medium">3款</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">屏障修护霜</span>
                  <span className="text-teal-600 font-medium">4款</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">医用冷敷贴</span>
                  <span className="text-teal-600 font-medium">2款</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="text-xs text-gray-500">起订量: 500件</div>
                <button className="text-teal-600 text-sm font-medium hover:text-teal-700">查看详情 →</button>
              </div>
            </div>

            {/* 冻干技术系列 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              {/* 产品包装展示区域 */}
              <div className="relative mb-6 h-48 bg-gradient-to-br from-indigo-50 to-violet-50 rounded-xl overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="freezeDryBg" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#eef2ff" />
                      <stop offset="100%" stopColor="#f5f3ff" />
                    </linearGradient>
                    <linearGradient id="techIndigo" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4338ca" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                    <linearGradient id="techViolet" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#7c3aed" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                    <linearGradient id="iceEffect" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#dbeafe" />
                      <stop offset="50%" stopColor="#bfdbfe" />
                      <stop offset="100%" stopColor="#93c5fd" />
                    </linearGradient>
                  </defs>
                  
                  {/* 背景 */}
                  <rect width="300" height="200" fill="url(#freezeDryBg)" />
                  
                  {/* 冻干面膜包装 */}
                  <rect x="40" y="50" width="45" height="65" rx="4" fill="url(#techIndigo)" />
                  <rect x="42" y="52" width="41" height="61" rx="3" fill="white" />
                  <rect x="44" y="54" width="37" height="25" rx="3" fill="#4338ca" />
                  <circle cx="62" cy="66" r="8" fill="white" />
                  <circle cx="62" cy="66" r="6" fill="url(#iceEffect)" />
                  <text x="62" y="70" textAnchor="middle" fill="#1e40af" fontSize="6" fontWeight="bold">-80°C</text>
                  <rect x="46" y="82" width="33" height="2" fill="#6366f1" />
                  <rect x="46" y="86" width="25" height="2" fill="#6366f1" />
                  <rect x="46" y="90" width="30" height="2" fill="#6366f1" />
                  <text x="62" y="130" textAnchor="middle" fill="#4338ca" fontSize="8" fontWeight="bold">冻干面膜</text>
                  
                  {/* 精华粉瓶 */}
                  <rect x="120" y="45" width="30" height="80" rx="4" fill="url(#techViolet)" />
                  <rect x="122" y="47" width="26" height="76" rx="3" fill="#581c87" opacity="0.8" />
                  <rect x="116" y="38" width="38" height="15" rx="7" fill="#374151" />
                  <rect x="118" y="40" width="34" height="11" rx="5" fill="#6b7280" />
                  
                  {/* 粉末效果 */}
                  <circle cx="135" cy="60" r="3" fill="white" opacity="0.8" />
                  <circle cx="130" cy="65" r="2" fill="white" opacity="0.6" />
                  <circle cx="140" cy="68" r="2.5" fill="white" opacity="0.7" />
                  <circle cx="133" cy="72" r="2" fill="white" opacity="0.5" />
                  <circle cx="137" cy="75" r="1.5" fill="white" opacity="0.6" />
                  
                  <text x="135" y="140" textAnchor="middle" fill="#7c3aed" fontSize="8" fontWeight="bold">精华粉</text>
                  
                  {/* 冻干微球容器 */}
                  <ellipse cx="210" cy="90" rx="28" ry="18" fill="url(#techIndigo)" />
                  <ellipse cx="210" cy="85" rx="28" ry="18" fill="#312e81" />
                  <ellipse cx="210" cy="80" rx="26" ry="16" fill="white" />
                  <ellipse cx="210" cy="75" rx="23" ry="13" fill="#f8fafc" />
                  <ellipse cx="210" cy="70" rx="18" ry="10" fill="#374151" />
                  
                  {/* 微球效果 */}
                  <circle cx="200" cy="75" r="2" fill="#4338ca" opacity="0.7" />
                  <circle cx="205" cy="78" r="1.5" fill="#6366f1" opacity="0.8" />
                  <circle cx="215" cy="76" r="2" fill="#4338ca" opacity="0.6" />
                  <circle cx="220" cy="79" r="1.5" fill="#6366f1" opacity="0.7" />
                  <circle cx="210" cy="82" r="1" fill="#4338ca" opacity="0.5" />
                  
                  <text x="210" y="125" textAnchor="middle" fill="#4338ca" fontSize="8" fontWeight="bold">冻干微球</text>
                  
                  {/* 冰晶装饰 */}
                  <polygon points="30,30 35,25 40,30 35,35" fill="#93c5fd" opacity="0.6" />
                  <polygon points="260,40 265,35 270,40 265,45" fill="#bfdbfe" opacity="0.5" />
                  <polygon points="25,160 30,155 35,160 30,165" fill="#dbeafe" opacity="0.7" />
                  
                  {/* 温度指示器 */}
                  <rect x="250" y="150" width="35" height="15" rx="7" fill="white" opacity="0.9" />
                  <text x="267" y="160" textAnchor="middle" fill="#1e40af" fontSize="8" fontWeight="bold">-80°C</text>
                  
                  {/* 品牌标识 */}
                  <rect x="15" y="15" width="100" height="22" rx="11" fill="white" opacity="0.95" />
                  <text x="65" y="28" textAnchor="middle" fill="#4338ca" fontSize="10" fontWeight="bold">冻干技术</text>
                </svg>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">创新</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">冻干技术系列</h3>
              <p className="text-gray-600 text-sm mb-4">先进冻干工艺，活性成分稳定保存</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">冻干面膜</span>
                  <span className="text-indigo-600 font-medium">8款</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">冻干精华粉</span>
                  <span className="text-indigo-600 font-medium">6款</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">冻干微球</span>
                  <span className="text-indigo-600 font-medium">4款</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">冻干片剂</span>
                  <span className="text-indigo-600 font-medium">3款</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="text-xs text-gray-500">起订量: 2000件</div>
                <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700">查看详情 →</button>
              </div>
            </div>

            {/* 彩妆系列 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z" />
                  </svg>
                </div>
                <span className="px-3 py-1 bg-pink-100 text-pink-700 text-xs font-medium rounded-full">时尚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">彩妆系列</h3>
              <p className="text-gray-600 text-sm mb-4">时尚彩妆，色彩丰富，持久显色</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">口红唇釉</span>
                  <span className="text-pink-600 font-medium">20款</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">粉底液</span>
                  <span className="text-pink-600 font-medium">12款</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">眼影盘</span>
                  <span className="text-pink-600 font-medium">8款</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">睫毛膏</span>
                  <span className="text-pink-600 font-medium">5款</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="text-xs text-gray-500">起订量: 1500件</div>
                <button className="text-pink-600 text-sm font-medium hover:text-pink-700">查看详情 →</button>
              </div>
            </div>

            {/* 个护系列 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">天然</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">个护系列</h3>
              <p className="text-gray-600 text-sm mb-4">天然温和，日常护理，全家适用</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">洗发护发</span>
                  <span className="text-green-600 font-medium">10款</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">沐浴露</span>
                  <span className="text-green-600 font-medium">6款</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">身体乳</span>
                  <span className="text-green-600 font-medium">4款</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">牙膏漱口水</span>
                  <span className="text-green-600 font-medium">3款</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="text-xs text-gray-500">起订量: 3000件</div>
                <button className="text-green-600 text-sm font-medium hover:text-green-700">查看详情 →</button>
              </div>
            </div>

            {/* 定制开发 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                  </svg>
                </div>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">定制</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">定制开发</h3>
              <p className="text-gray-600 text-sm mb-4">专属配方，个性包装，品牌定制</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">配方定制</span>
                  <span className="text-purple-600 font-medium">∞</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">包装设计</span>
                  <span className="text-purple-600 font-medium">∞</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">品牌策划</span>
                  <span className="text-purple-600 font-medium">∞</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">全案服务</span>
                  <span className="text-purple-600 font-medium">∞</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="text-xs text-gray-500">起订量: 协商</div>
                <button className="text-purple-600 text-sm font-medium hover:text-purple-700">立即咨询 →</button>
              </div>
            </div>
          </div>

          {/* 产品数据统计 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">产品数据一览</h3>
              <p className="text-gray-600">丰富的产品矩阵，满足多样化市场需求</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-800 mb-2">200+</div>
                <div className="text-gray-600 text-sm">在售产品</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600 mb-2">50+</div>
                <div className="text-gray-600 text-sm">核心配方</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">15+</div>
                <div className="text-gray-600 text-sm">产品系列</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                <div className="text-gray-600 text-sm">客户满意度</div>
              </div>
            </div>
          </div>

          {/* CTA区域 */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-800 to-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">寻找合适的产品解决方案？</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                我们的专业团队将根据您的品牌定位和市场需求，为您推荐最适合的产品组合
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-blue-800 rounded-full font-medium hover:bg-gray-50 transition-colors">
                  获取产品手册
                </button>
                <button className="px-8 py-3 border border-white text-white rounded-full font-medium hover:bg-white hover:text-blue-800 transition-colors">
                  预约产品咨询
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 管理团队展示 */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium mb-4">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
              专业团队
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">管理团队</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              汇聚行业精英，引领创新发展
            </p>
          </div>

          {/* 核心管理层 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* CEO */}
            <div className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
              <div className="text-center space-y-6">
                {/* 头像占位 */}
                <div className="relative mx-auto">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-900 to-blue-800 rounded-full flex items-center justify-center mx-auto overflow-hidden">
                    <svg className="w-20 h-20 text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* 专业商务头像 - CEO */}
                      <circle cx="50" cy="50" r="50" fill="url(#ceoGradient)" />
                      <circle cx="50" cy="35" r="12" fill="white" opacity="0.9" />
                      <path d="M30 70 Q50 60 70 70 L70 85 Q50 75 30 85 Z" fill="white" opacity="0.9" />
                      <circle cx="45" cy="32" r="1.5" fill="#1e40af" />
                      <circle cx="55" cy="32" r="1.5" fill="#1e40af" />
                      <path d="M47 38 Q50 40 53 38" stroke="#1e40af" strokeWidth="1" fill="none" />
                      <defs>
                        <linearGradient id="ceoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1e40af" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">张总</h3>
                  <p className="text-blue-800 font-medium">首席执行官 CEO</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    15年美妆行业经验，曾任知名国际品牌中国区总经理，专注功效护肤品市场开拓与品牌建设
                  </p>
                </div>
                
                <div className="flex justify-center space-x-2">
                  <span className="px-2 py-1 bg-blue-50 text-blue-900 rounded text-xs">战略规划</span>
                  <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded text-xs">市场开拓</span>
                </div>
              </div>
            </div>

            {/* CTO */}
            <div className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:border-teal-200 transition-all duration-300">
              <div className="text-center space-y-6">
                <div className="relative mx-auto">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-800 to-teal-600 rounded-full flex items-center justify-center mx-auto overflow-hidden">
                    <svg className="w-20 h-20 text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* 专业技术头像 - CTO */}
                      <circle cx="50" cy="50" r="50" fill="url(#ctoGradient)" />
                      <circle cx="50" cy="35" r="12" fill="white" opacity="0.9" />
                      <path d="M30 70 Q50 60 70 70 L70 85 Q50 75 30 85 Z" fill="white" opacity="0.9" />
                      <circle cx="45" cy="32" r="1.5" fill="#0f766e" />
                      <circle cx="55" cy="32" r="1.5" fill="#0f766e" />
                      <path d="M47 38 Q50 40 53 38" stroke="#0f766e" strokeWidth="1" fill="none" />
                      {/* 眼镜框 */}
                      <circle cx="45" cy="32" r="4" stroke="white" strokeWidth="1" fill="none" opacity="0.8" />
                      <circle cx="55" cy="32" r="4" stroke="white" strokeWidth="1" fill="none" opacity="0.8" />
                      <path d="M49 32 L51 32" stroke="white" strokeWidth="1" opacity="0.8" />
                      <defs>
                        <linearGradient id="ctoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#0f766e" />
                          <stop offset="100%" stopColor="#14b8a6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">李博士</h3>
                  <p className="text-teal-600 font-medium">首席技术官 CTO</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    清华大学化学工程博士，专注冻干技术研发12年，拥有30+项国家发明专利，行业技术标准制定者
                  </p>
                </div>
                
                <div className="flex justify-center space-x-2">
                  <span className="px-2 py-1 bg-teal-50 text-teal-700 rounded text-xs">冻干技术</span>
                  <span className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs">专利研发</span>
                </div>
              </div>
            </div>

            {/* COO */}
            <div className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300">
              <div className="text-center space-y-6">
                <div className="relative mx-auto">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto overflow-hidden">
                    <svg className="w-20 h-20 text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* 专业运营头像 - COO */}
                      <circle cx="50" cy="50" r="50" fill="url(#cooGradient)" />
                      <circle cx="50" cy="35" r="12" fill="white" opacity="0.9" />
                      <path d="M30 70 Q50 60 70 70 L70 85 Q50 75 30 85 Z" fill="white" opacity="0.9" />
                      <circle cx="45" cy="32" r="1.5" fill="#7c3aed" />
                      <circle cx="55" cy="32" r="1.5" fill="#7c3aed" />
                      <path d="M47 38 Q50 40 53 38" stroke="#7c3aed" strokeWidth="1" fill="none" />
                      {/* 领带细节 */}
                      <path d="M48 45 L52 45 L51 55 L49 55 Z" fill="white" opacity="0.7" />
                      <line x1="50" y1="47" x2="50" y2="53" stroke="#7c3aed" strokeWidth="0.5" />
                      <defs>
                        <linearGradient id="cooGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#7c3aed" />
                          <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                    </svg>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">王总</h3>
                  <p className="text-purple-600 font-medium">首席运营官 COO</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    20年制造业管理经验，曾任大型化妆品集团生产总监，专精GMPC体系建设与精益生产管理
                  </p>
                </div>
                
                <div className="flex justify-center space-x-2">
                  <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs">生产管理</span>
                  <span className="px-2 py-1 bg-pink-50 text-pink-700 rounded text-xs">质量体系</span>
                </div>
              </div>
            </div>
          </div>

          {/* 团队实力数据 */}
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-800">50+</div>
                <div className="text-gray-600 font-medium">核心团队成员</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-teal-600">15+</div>
                <div className="text-gray-600 font-medium">博士硕士学历</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-600">30+</div>
                <div className="text-gray-600 font-medium">发明专利</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-indigo-600">20+</div>
                <div className="text-gray-600 font-medium">年平均经验</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 合作伙伴品牌墙 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">联合实验室与合作院校</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              与顶尖科研院所深度合作，共建产学研一体化创新平台
            </p>
          </div>
          
          {/* 合作伙伴网格 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {/* 合作伙伴LOGO占位符 */}
            {[
              { name: "清华大学", type: "university" },
              { name: "中科院", type: "research" },
              { name: "北京理工大学", type: "university" },
              { name: "华南理工大学", type: "university" },
              { name: "中南大学", type: "university" },
              { name: "湖南大学", type: "university" },
              { name: "国家重点实验室", type: "lab" },
              { name: "生物医药研究院", type: "research" },
              { name: "化妆品检测中心", type: "testing" },
              { name: "皮肤科学研究所", type: "research" },
              { name: "功效评价中心", type: "testing" },
              { name: "临床试验机构", type: "clinical" }
            ].map((partner, index) => (
              <div key={index} className="group flex flex-col items-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300">
                {/* 合作伙伴LOGO */}
                <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-md transition-all duration-300">
                  <svg className="w-16 h-16" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {partner.type === 'university' && (
                      <>
                        <rect x="10" y="20" width="60" height="40" rx="4" fill="url(#universityGradient)" />
                        <rect x="15" y="25" width="50" height="30" rx="2" fill="white" opacity="0.9" />
                        <circle cx="25" cy="35" r="3" fill="#1e40af" />
                        <circle cx="40" cy="35" r="3" fill="#1e40af" />
                        <circle cx="55" cy="35" r="3" fill="#1e40af" />
                        <rect x="20" y="42" width="40" height="2" fill="#1e40af" />
                        <rect x="25" y="47" width="30" height="2" fill="#1e40af" />
                        <defs>
                          <linearGradient id="universityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1e40af" />
                            <stop offset="100%" stopColor="#3b82f6" />
                          </linearGradient>
                        </defs>
                      </>
                    )}
                    {partner.type === 'research' && (
                      <>
                        <circle cx="40" cy="40" r="25" fill="url(#researchGradient)" />
                        <circle cx="40" cy="40" r="18" fill="white" opacity="0.9" />
                        <circle cx="40" cy="40" r="8" fill="#0f766e" />
                        <circle cx="32" cy="32" r="3" fill="#0f766e" />
                        <circle cx="48" cy="32" r="3" fill="#0f766e" />
                        <circle cx="32" cy="48" r="3" fill="#0f766e" />
                        <circle cx="48" cy="48" r="3" fill="#0f766e" />
                        <defs>
                          <linearGradient id="researchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#0f766e" />
                            <stop offset="100%" stopColor="#14b8a6" />
                          </linearGradient>
                        </defs>
                      </>
                    )}
                    {partner.type === 'lab' && (
                      <>
                        <rect x="20" y="15" width="40" height="50" rx="6" fill="url(#labGradient)" />
                        <rect x="25" y="20" width="30" height="40" rx="3" fill="white" opacity="0.9" />
                        <circle cx="35" cy="30" r="4" fill="#7c3aed" />
                        <circle cx="45" cy="30" r="4" fill="#7c3aed" />
                        <rect x="30" y="40" width="20" height="3" fill="#7c3aed" />
                        <rect x="32" y="47" width="16" height="2" fill="#7c3aed" />
                        <defs>
                          <linearGradient id="labGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#7c3aed" />
                            <stop offset="100%" stopColor="#a855f7" />
                          </linearGradient>
                        </defs>
                      </>
                    )}
                    {(partner.type === 'testing' || partner.type === 'clinical') && (
                      <>
                        <rect x="15" y="25" width="50" height="30" rx="8" fill="url(#testingGradient)" />
                        <rect x="20" y="30" width="40" height="20" rx="4" fill="white" opacity="0.9" />
                        <circle cx="30" cy="37" r="2" fill="#dc2626" />
                        <circle cx="40" cy="37" r="2" fill="#dc2626" />
                        <circle cx="50" cy="37" r="2" fill="#dc2626" />
                        <rect x="25" y="42" width="30" height="1.5" fill="#dc2626" />
                        <defs>
                          <linearGradient id="testingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#dc2626" />
                            <stop offset="100%" stopColor="#ef4444" />
                          </linearGradient>
                        </defs>
                      </>
                    )}
                  </svg>
                </div>
                {/* 机构名称 */}
                <h3 className="text-sm font-medium text-gray-900 text-center group-hover:text-blue-800 transition-colors">
                  {partner.name}
                </h3>
              </div>
            ))}
          </div>
          
          {/* 分割线 */}
          <div className="mt-16 flex items-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            <div className="px-6 text-sm text-gray-500">产学研深度融合</div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* 生产实力展示 */}
      <section id="production" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">生产实力</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              GMPC十万级洁净车间，自动化产线，确保产品品质与安全
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 左侧：生产设施SVG插画 */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-teal-100 rounded-3xl border-2 border-white shadow-xl overflow-hidden">
                {/* 生产车间SVG插画 */}
                <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* 背景 */}
                  <rect width="400" height="300" fill="url(#factoryBg)" />
                  
                  {/* 车间地面 */}
                  <rect x="0" y="200" width="400" height="100" fill="#e2e8f0" />
                  
                  {/* 生产线设备 */}
                  <rect x="50" y="150" width="80" height="50" rx="8" fill="url(#equipmentGradient)" />
                  <rect x="150" y="140" width="100" height="60" rx="8" fill="url(#equipmentGradient)" />
                  <rect x="270" y="155" width="70" height="45" rx="8" fill="url(#equipmentGradient)" />
                  
                  {/* 传送带 */}
                  <rect x="40" y="190" width="320" height="8" rx="4" fill="#64748b" />
                  <circle cx="60" cy="194" r="3" fill="#475569" />
                  <circle cx="120" cy="194" r="3" fill="#475569" />
                  <circle cx="180" cy="194" r="3" fill="#475569" />
                  <circle cx="240" cy="194" r="3" fill="#475569" />
                  <circle cx="300" cy="194" r="3" fill="#475569" />
                  
                  {/* 洁净室天花板 */}
                  <rect x="0" y="0" width="400" height="60" fill="url(#ceilingGradient)" />
                  
                  {/* 空气净化系统 */}
                  <rect x="80" y="10" width="60" height="20" rx="10" fill="#ffffff" opacity="0.9" />
                  <rect x="160" y="10" width="60" height="20" rx="10" fill="#ffffff" opacity="0.9" />
                  <rect x="240" y="10" width="60" height="20" rx="10" fill="#ffffff" opacity="0.9" />
                  
                  {/* 空气流动线条 */}
                  <path d="M110 35 Q110 50 110 65" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.6" />
                  <path d="M190 35 Q190 50 190 65" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.6" />
                  <path d="M270 35 Q270 50 270 65" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.6" />
                  
                  {/* 工作人员（穿防护服） */}
                  <circle cx="100" cy="130" r="8" fill="#ffffff" />
                  <rect x="95" y="138" width="10" height="25" rx="5" fill="#e0f2fe" />
                  <circle cx="220" cy="125" r="8" fill="#ffffff" />
                  <rect x="215" y="133" width="10" height="25" rx="5" fill="#e0f2fe" />
                  
                  {/* 产品容器 */}
                  <rect x="70" y="175" width="12" height="15" rx="2" fill="#fbbf24" />
                  <rect x="170" y="175" width="12" height="15" rx="2" fill="#fbbf24" />
                  <rect x="280" y="175" width="12" height="15" rx="2" fill="#fbbf24" />
                  
                  {/* 质量检测设备 */}
                  <rect x="320" y="100" width="50" height="40" rx="6" fill="url(#testingGradient)" />
                  <circle cx="335" cy="115" r="4" fill="#ffffff" />
                  <circle cx="350" cy="115" r="4" fill="#ffffff" />
                  
                  {/* 数据显示屏 */}
                  <rect x="20" y="80" width="40" height="25" rx="4" fill="#1f2937" />
                  <rect x="25" y="85" width="30" height="15" rx="2" fill="#10b981" />
                  
                  <defs>
                    <linearGradient id="factoryBg" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f0f9ff" />
                      <stop offset="100%" stopColor="#e0f2fe" />
                    </linearGradient>
                    <linearGradient id="equipmentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1e40af" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                    <linearGradient id="ceilingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f8fafc" />
                      <stop offset="100%" stopColor="#e2e8f0" />
                    </linearGradient>
                    <linearGradient id="testingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#059669" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              {/* 浮动信息卡 */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border">
                <div className="text-2xl font-bold text-blue-800">10万级</div>
                <div className="text-sm text-gray-600">洁净车间标准</div>
              </div>
            </div>
            
            {/* 右侧：生产能力介绍 */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">先进制造能力</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  拥有符合GMPC标准的十万级洁净车间，配备全自动化生产线，从原料投入到成品包装全程无人化操作，确保产品质量稳定可控。
                </p>
              </div>
              
              {/* 生产能力指标 */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">50+</div>
                  <div className="text-sm text-gray-600">自动化产线</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-800 to-teal-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">3</div>
                  <div className="text-sm text-gray-600">生产基地</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">连续生产</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">99.9%</div>
                  <div className="text-sm text-gray-600">质量合格率</div>
                </div>
              </div>
              
              {/* 认证标准 */}
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">质量认证体系</h4>
                <div className="flex flex-wrap gap-3">
                  {['GMPC', 'ISO 9001', 'ISO 14001', 'FDA', 'GLP', 'GCP'].map((cert) => (
                    <span key={cert} className="px-4 py-2 bg-gradient-to-r from-blue-50 to-teal-50 text-blue-900 rounded-full text-sm font-medium border border-blue-100">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 原料基地展示 */}
      <section id="raw-materials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">原料基地</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              三大原料基地，从源头把控品质，确保原料纯净天然
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* 新疆基地 */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 to-orange-100 border-2 border-white shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/3] relative overflow-hidden">
                {/* 背景装饰 */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/60 to-orange-200/40"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-200/30 to-orange-300/20 rounded-full blur-2xl transform translate-x-8 -translate-y-8"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-amber-300/20 to-yellow-200/30 rounded-full blur-xl transform -translate-x-4 translate-y-4"></div>
                
                {/* 内容区域 */}
                <div className="relative h-full flex flex-col justify-center items-center p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">新疆基地</h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    天山雪莲、甘草等珍贵植物原料，纯净无污染的自然环境
                  </p>
                </div>
              </div>
              
              {/* 底部信息条 */}
              <div className="p-6 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">高原植物萃取</span>
                  </div>
                  <div className="text-sm text-gray-500">海拔3000m+</div>
                </div>
              </div>
            </div>
            
            {/* 云南基地 */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 to-green-100 border-2 border-white shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/3] relative overflow-hidden">
                {/* 背景装饰 */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/60 to-green-200/40"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200/30 to-emerald-300/20 rounded-full blur-2xl transform translate-x-8 -translate-y-8"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-emerald-300/20 to-green-200/30 rounded-full blur-xl transform -translate-x-4 translate-y-4"></div>
                
                {/* 内容区域 */}
                <div className="relative h-full flex flex-col justify-center items-center p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">云南基地</h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    三七、石斛等名贵中药材，亚热带气候孕育的天然宝库
                  </p>
                </div>
              </div>
              
              {/* 底部信息条 */}
              <div className="p-6 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">中药材精华</span>
                  </div>
                  <div className="text-sm text-gray-500">亚热带气候</div>
                </div>
              </div>
            </div>
            
            {/* 东北基地 */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-white shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/3] relative overflow-hidden">
                {/* 背景装饰 */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 to-indigo-200/40"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-200/30 to-blue-300/20 rounded-full blur-2xl transform translate-x-8 -translate-y-8"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-300/20 to-indigo-200/30 rounded-full blur-xl transform -translate-x-4 translate-y-4"></div>
                
                {/* 内容区域 */}
                <div className="relative h-full flex flex-col justify-center items-center p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-900 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">东北基地</h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    人参、鹿茸等滋补原料，寒地黑土的天然馈赠
                  </p>
                </div>
              </div>
              
              {/* 底部信息条 */}
              <div className="p-6 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-900 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">滋补精华</span>
                  </div>
                  <div className="text-sm text-gray-500">寒地黑土</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 底部统计信息 */}
          <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">3</div>
                <div className="text-sm text-gray-600">原料基地</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
                <div className="text-sm text-gray-600">植物品种</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">99.8%</div>
                <div className="text-sm text-gray-600">纯度标准</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">365天</div>
                <div className="text-sm text-gray-600">品质监控</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 冻干研究院产品矩阵 */}
      <section id="freeze-dry-institute" className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">冻干研究院</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              8种剂型全覆盖，冻干技术引领功效护肤新时代
            </p>
          </div>
          
          {/* 8种剂型等距排列 */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-16">
            {[
              { name: "冻干面膜", icon: "M4 7v10c0 2.21 3.79 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.79 4 8 4s8-1.79 8-4M4 7c0-2.21 3.79-4 8-4s8 1.79 8 4", color: "from-blue-900 to-cyan-500" },
              { name: "冻干精华", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z", color: "from-purple-500 to-pink-500" },
              { name: "冻干乳液", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", color: "from-emerald-500 to-blue-800" },
              { name: "冻干霜剂", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z", color: "from-orange-500 to-red-500" },
              { name: "冻干粉末", icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z", color: "from-amber-500 to-yellow-500" },
              { name: "冻干胶囊", icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z", color: "from-indigo-500 to-blue-900" },
              { name: "冻干贴片", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", color: "from-green-500 to-emerald-500" },
              { name: "冻干喷雾", icon: "M13 10V3L4 14h7v7l9-11h-7z", color: "from-violet-500 to-purple-500" }
            ].map((product, index) => (
              <div key={product.name} className="group relative">
                <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={product.icon} />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <div className="text-sm text-gray-500">剂型 {String(index + 1).padStart(2, '0')}</div>
                  </div>
                </div>
                
                {/* 连接线装饰 */}
                {index < 7 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-gray-200 to-transparent transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
          
          {/* 技术优势展示 */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">冻干技术优势</h3>
                <div className="space-y-4">
                  {[
                    { title: "活性保持", desc: "低温冻干工艺，最大程度保持活性成分", percentage: "95%" },
                    { title: "稳定性强", desc: "去除水分，延长产品保质期", percentage: "3年+" },
                    { title: "渗透性佳", desc: "分子结构优化，提升肌肤吸收", percentage: "80%" },
                    { title: "安全无添加", desc: "无需防腐剂，纯净配方", percentage: "0添加" }
                  ].map((advantage) => (
                    <div key={advantage.title} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <div className="font-semibold text-gray-900">{advantage.title}</div>
                        <div className="text-sm text-gray-600">{advantage.desc}</div>
                      </div>
                      <div className="text-lg font-bold text-blue-800">{advantage.percentage}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl border-2 border-white shadow-xl overflow-hidden">
                  {/* 冻干实验室场景SVG插画 */}
                  <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="labBg" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f0f9ff" />
                        <stop offset="100%" stopColor="#e0e7ff" />
                      </linearGradient>
                      <linearGradient id="equipmentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1e40af" />
                        <stop offset="100%" stopColor="#3730a3" />
                      </linearGradient>
                      <linearGradient id="freezeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0ea5e9" />
                        <stop offset="100%" stopColor="#0284c7" />
                      </linearGradient>
                      <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#059669" />
                        <stop offset="100%" stopColor="#047857" />
                      </linearGradient>
                    </defs>
                    
                    {/* 实验室背景 */}
                    <rect width="400" height="400" fill="url(#labBg)" />
                    
                    {/* 地面 */}
                    <rect x="0" y="320" width="400" height="80" fill="#e2e8f0" />
                    <rect x="0" y="320" width="400" height="4" fill="#cbd5e1" />
                    
                    {/* 冻干设备主体 */}
                    <rect x="80" y="180" width="120" height="140" rx="8" fill="url(#equipmentGrad)" />
                    <rect x="90" y="190" width="100" height="120" rx="4" fill="#1e3a8a" />
                    
                    {/* 设备控制面板 */}
                    <rect x="220" y="200" width="80" height="100" rx="6" fill="#374151" />
                    <rect x="230" y="210" width="60" height="40" rx="3" fill="url(#screenGrad)" />
                    
                    {/* 显示屏内容 */}
                    <text x="260" y="225" textAnchor="middle" fill="white" fontSize="8" fontFamily="monospace">-80°C</text>
                    <text x="260" y="235" textAnchor="middle" fill="#86efac" fontSize="6" fontFamily="monospace">ACTIVE</text>
                    <text x="260" y="245" textAnchor="middle" fill="#fbbf24" fontSize="6" fontFamily="monospace">24:15:30</text>
                    
                    {/* 控制按钮 */}
                    <circle cx="240" cy="270" r="6" fill="#ef4444" />
                    <circle cx="260" cy="270" r="6" fill="#22c55e" />
                    <circle cx="280" cy="270" r="6" fill="#3b82f6" />
                    
                    {/* 冻干室内部 */}
                    <rect x="95" y="195" width="90" height="110" rx="3" fill="url(#freezeGrad)" opacity="0.8" />
                    
                    {/* 样品托盘 */}
                    <rect x="105" y="220" width="70" height="4" fill="#64748b" />
                    <rect x="105" y="240" width="70" height="4" fill="#64748b" />
                    <rect x="105" y="260" width="70" height="4" fill="#64748b" />
                    <rect x="105" y="280" width="70" height="4" fill="#64748b" />
                    
                    {/* 样品瓶 */}
                    <rect x="110" y="215" width="8" height="12" rx="1" fill="#f8fafc" />
                    <rect x="125" y="215" width="8" height="12" rx="1" fill="#f8fafc" />
                    <rect x="140" y="215" width="8" height="12" rx="1" fill="#f8fafc" />
                    <rect x="155" y="215" width="8" height="12" rx="1" fill="#f8fafc" />
                    
                    <rect x="110" y="235" width="8" height="12" rx="1" fill="#f8fafc" />
                    <rect x="125" y="235" width="8" height="12" rx="1" fill="#f8fafc" />
                    <rect x="140" y="235" width="8" height="12" rx="1" fill="#f8fafc" />
                    <rect x="155" y="235" width="8" height="12" rx="1" fill="#f8fafc" />
                    
                    {/* 冷气效果 */}
                    <path d="M100 200 Q120 190 140 200 Q160 190 180 200" stroke="#bfdbfe" strokeWidth="2" fill="none" opacity="0.6" />
                    <path d="M100 210 Q130 200 160 210 Q180 200 190 210" stroke="#bfdbfe" strokeWidth="2" fill="none" opacity="0.4" />
                    <path d="M105 220 Q125 210 145 220 Q165 210 185 220" stroke="#bfdbfe" strokeWidth="1" fill="none" opacity="0.3" />
                    
                    {/* 管道系统 */}
                    <rect x="200" y="160" width="8" height="40" fill="#6b7280" />
                    <rect x="180" y="168" width="40" height="8" fill="#6b7280" />
                    <circle cx="204" cy="164" r="4" fill="#4b5563" />
                    
                    {/* 真空泵 */}
                    <rect x="320" y="240" width="60" height="40" rx="4" fill="#374151" />
                    <circle cx="350" cy="260" r="15" fill="#4b5563" />
                    <circle cx="350" cy="260" r="8" fill="#6b7280" />
                    
                    {/* 连接管道 */}
                    <rect x="300" y="256" width="20" height="8" fill="#6b7280" />
                    
                    {/* 温度传感器 */}
                    <circle cx="140" cy="180" r="3" fill="#ef4444" />
                    <line x1="140" y1="180" x2="140" y2="160" stroke="#ef4444" strokeWidth="2" />
                    <rect x="135" y="155" width="10" height="8" rx="2" fill="#dc2626" />
                    
                    {/* 压力表 */}
                    <circle cx="320" cy="180" r="20" fill="#f3f4f6" stroke="#374151" strokeWidth="2" />
                    <circle cx="320" cy="180" r="15" fill="white" />
                    <line x1="320" y1="180" x2="330" y2="170" stroke="#ef4444" strokeWidth="2" />
                    <text x="320" y="200" textAnchor="middle" fill="#374151" fontSize="8">Pa</text>
                    
                    {/* 数据线 */}
                    <path d="M140 160 Q180 140 220 160" stroke="#64748b" strokeWidth="2" fill="none" strokeDasharray="3,3" />
                    <path d="M320 160 Q280 140 240 160" stroke="#64748b" strokeWidth="2" fill="none" strokeDasharray="3,3" />
                    
                    {/* 实验室标识 */}
                    <rect x="20" y="80" width="120" height="40" rx="6" fill="white" opacity="0.9" />
                    <text x="80" y="95" textAnchor="middle" fill="#1e40af" fontSize="10" fontWeight="bold">冻干研究院</text>
                    <text x="80" y="108" textAnchor="middle" fill="#64748b" fontSize="8">Freeze-Drying Lab</text>
                    <text x="80" y="120" textAnchor="middle" fill="#64748b" fontSize="7">-80°C 超低温技术</text>
                    
                    {/* 装饰性分子结构 */}
                    <g opacity="0.3">
                      <circle cx="350" cy="100" r="3" fill="#3b82f6" />
                      <circle cx="365" cy="90" r="2" fill="#3b82f6" />
                      <circle cx="370" cy="110" r="2" fill="#3b82f6" />
                      <line x1="350" y1="100" x2="365" y2="90" stroke="#3b82f6" strokeWidth="1" />
                      <line x1="350" y1="100" x2="370" y2="110" stroke="#3b82f6" strokeWidth="1" />
                    </g>
                  </svg>
                </div>
                
                {/* 浮动数据卡 */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border">
                  <div className="text-xl font-bold text-indigo-600">-80°C</div>
                  <div className="text-xs text-gray-600">冻干温度</div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border">
                  <div className="text-xl font-bold text-blue-800">8种</div>
                  <div className="text-xs text-gray-600">剂型覆盖</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 资质荣誉证书墙 */}
      <section id="certifications" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">资质荣誉</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              权威认证，品质保障，行业标杆
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "GMPC认证", type: "生产质量", color: "from-blue-900 to-cyan-500" },
              { name: "ISO 9001", type: "质量管理", color: "from-emerald-500 to-blue-800" },
              { name: "ISO 14001", type: "环境管理", color: "from-green-500 to-emerald-500" },
              { name: "FDA认证", type: "国际标准", color: "from-purple-500 to-indigo-500" },
              { name: "GLP认证", type: "实验室规范", color: "from-orange-500 to-red-500" },
              { name: "GCP认证", type: "临床试验", color: "from-pink-500 to-rose-500" },
              { name: "CNAS认证", type: "检测能力", color: "from-indigo-500 to-purple-500" },
              { name: "高新技术企业", type: "创新认定", color: "from-amber-500 to-orange-500" }
            ].map((cert, index) => (
              <div key={cert.name} className="group relative">
                <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-center">
                    {/* 证书图标 */}
                    <div className={`w-16 h-20 bg-gradient-to-br ${cert.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 relative`}>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      {/* 装饰性光晕 */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full opacity-80"></div>
                    </div>
                    
                    <h3 className="text-sm font-bold text-gray-900 mb-1">{cert.name}</h3>
                    <p className="text-xs text-gray-500">{cert.type}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* 底部统计 */}
          <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">20+</div>
                <div className="text-sm text-gray-600">权威认证</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-sm text-gray-600">合规生产</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">5年</div>
                <div className="text-sm text-gray-600">持续认证</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">国际</div>
                <div className="text-sm text-gray-600">标准对接</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 新闻动态卡片 */}
      <section id="news" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">新闻动态</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              关注行业前沿，分享企业动态
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                category: "企业动态",
                title: "微肽集团与清华大学达成战略合作",
                excerpt: "双方将在冻干技术研发、人才培养等领域开展深度合作，共同推动功效护肤行业技术创新...",
                date: "2024-01-15",
                image: "from-blue-900 to-cyan-500"
              },
              {
                category: "技术创新",
                title: "突破性冻干技术获国家发明专利",
                excerpt: "我司自主研发的超低温冻干技术获得国家知识产权局授权，填补了行业技术空白...",
                date: "2024-01-10",
                image: "from-purple-500 to-indigo-500"
              },
              {
                category: "行业资讯",
                title: "功效护肤市场迎来新机遇",
                excerpt: "随着消费者对护肤品功效性要求不断提升，冻干技术在美妆行业的应用前景广阔...",
                date: "2024-01-08",
                image: "from-emerald-500 to-blue-800"
              }
            ].map((news, index) => (
              <article key={index} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* 新闻图片占位符 */}
                <div className={`aspect-[16/10] bg-gradient-to-br ${news.image} relative overflow-hidden`}>
                  {/* 根据新闻类型生成不同的SVG插画 */}
                  <svg className="w-full h-full" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {index === 0 && (
                      // 科技创新主题
                      <>
                        <rect width="320" height="200" fill="url(#techBg)" />
                        {/* 分子结构 */}
                        <circle cx="80" cy="60" r="8" fill="#ffffff" opacity="0.9" />
                        <circle cx="120" cy="80" r="6" fill="#ffffff" opacity="0.8" />
                        <circle cx="160" cy="50" r="7" fill="#ffffff" opacity="0.9" />
                        <circle cx="200" cy="70" r="5" fill="#ffffff" opacity="0.7" />
                        <line x1="80" y1="60" x2="120" y2="80" stroke="#ffffff" strokeWidth="2" opacity="0.6" />
                        <line x1="120" y1="80" x2="160" y2="50" stroke="#ffffff" strokeWidth="2" opacity="0.6" />
                        <line x1="160" y1="50" x2="200" y2="70" stroke="#ffffff" strokeWidth="2" opacity="0.6" />
                        
                        {/* 科技图标 */}
                        <rect x="240" y="120" width="60" height="40" rx="8" fill="#ffffff" opacity="0.2" />
                        <circle cx="260" cy="135" r="4" fill="#ffffff" opacity="0.8" />
                        <circle cx="280" cy="135" r="4" fill="#ffffff" opacity="0.8" />
                        <rect x="255" y="145" width="20" height="2" fill="#ffffff" opacity="0.6" />
                        
                        <defs>
                          <linearGradient id="techBg" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1e40af" />
                            <stop offset="100%" stopColor="#3b82f6" />
                          </linearGradient>
                        </defs>
                      </>
                    )}
                    
                    {index === 1 && (
                      // 市场趋势主题
                      <>
                        <rect width="320" height="200" fill="url(#marketBg)" />
                        {/* 上升趋势图 */}
                        <path d="M40 150 Q80 120 120 100 Q160 80 200 60 Q240 40 280 30" 
                              stroke="#ffffff" strokeWidth="3" fill="none" opacity="0.8" />
                        <circle cx="80" cy="120" r="4" fill="#ffffff" />
                        <circle cx="160" cy="80" r="4" fill="#ffffff" />
                        <circle cx="240" cy="40" r="4" fill="#ffffff" />
                        
                        {/* 数据柱状图 */}
                        <rect x="50" y="140" width="8" height="20" fill="#ffffff" opacity="0.6" />
                        <rect x="70" y="130" width="8" height="30" fill="#ffffff" opacity="0.7" />
                        <rect x="90" y="120" width="8" height="40" fill="#ffffff" opacity="0.8" />
                        <rect x="110" y="110" width="8" height="50" fill="#ffffff" opacity="0.9" />
                        
                        <defs>
                          <linearGradient id="marketBg" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#059669" />
                            <stop offset="100%" stopColor="#10b981" />
                          </linearGradient>
                        </defs>
                      </>
                    )}
                    
                    {index === 2 && (
                      // 行业资讯主题
                      <>
                        <rect width="320" height="200" fill="url(#industryBg)" />
                        {/* 护肤品容器 */}
                        <rect x="120" y="80" width="30" height="40" rx="4" fill="#ffffff" opacity="0.9" />
                        <rect x="125" y="75" width="20" height="8" rx="2" fill="#ffffff" opacity="0.7" />
                        <circle cx="135" cy="100" r="8" fill="#ffffff" opacity="0.3" />
                        
                        <rect x="170" y="90" width="25" height="35" rx="3" fill="#ffffff" opacity="0.8" />
                        <rect x="174" y="86" width="17" height="6" rx="2" fill="#ffffff" opacity="0.6" />
                        
                        {/* 装饰性元素 */}
                        <circle cx="80" cy="50" r="12" fill="#ffffff" opacity="0.2" />
                        <circle cx="240" cy="140" r="15" fill="#ffffff" opacity="0.15" />
                        <path d="M60 120 Q80 110 100 120 Q120 130 140 120" 
                              stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.4" />
                        
                        <defs>
                          <linearGradient id="industryBg" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#10b981" />
                            <stop offset="100%" stopColor="#1e40af" />
                          </linearGradient>
                        </defs>
                      </>
                    )}
                  </svg>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* 分类标签 */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-full">
                      {news.category}
                    </span>
                  </div>
                </div>
                
                {/* 新闻内容 */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors duration-300 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {news.date}
                    </div>
                    
                    <button className="text-blue-800 text-sm font-medium hover:text-blue-900 transition-colors duration-300 flex items-center">
                      阅读更多
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* 查看更多按钮 */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-800 to-indigo-600 text-white font-medium rounded-full hover:from-blue-900 hover:to-indigo-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              查看更多新闻
            </button>
          </div>
        </div>
      </section>

      {/* 招商加盟板块 */}
      <section id="investment" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
              </svg>
              招商加盟
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              携手微肽集团
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                共创美妆新未来
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              专业OEM/ODM服务，全链条支持，助力合作伙伴快速抢占功效护肤市场
            </p>
          </div>

          {/* 合作优势 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">技术领先</h3>
              <p className="text-blue-200 text-sm">冻干技术专利30+项，行业标准制定者</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">产能保障</h3>
              <p className="text-blue-200 text-sm">50+条自动化产线，月产能1000万支</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">品质认证</h3>
              <p className="text-blue-200 text-sm">GMPC/ISO 9001双重认证体系</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">全程服务</h3>
              <p className="text-blue-200 text-sm">从研发到上市，一站式解决方案</p>
            </div>
          </div>

          {/* 合作模式 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* OEM代工 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">OEM代工服务</h3>
              </div>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  最低起订量：1000支起
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  交付周期：15-30个工作日
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  包装设计：免费提供3套方案
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  质量保证：全程质检，不合格包退换
                </li>
              </ul>
            </div>

            {/* ODM定制 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">ODM定制开发</h3>
              </div>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  配方定制：根据需求量身打造
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  研发周期：45-90天完成
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  专利保护：独家配方，市场独占
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  技术支持：全程技术指导与培训
                </li>
              </ul>
            </div>
          </div>

          {/* 成功案例数据 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">合作成果</h3>
              <p className="text-blue-200">与200+品牌深度合作，共同成长</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-cyan-300 mb-2">200+</div>
                <div className="text-blue-200 text-sm">合作品牌</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-300 mb-2">5000+</div>
                <div className="text-blue-200 text-sm">成功产品</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-300 mb-2">98%</div>
                <div className="text-blue-200 text-sm">客户满意度</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-300 mb-2">15天</div>
                <div className="text-blue-200 text-sm">平均交付</div>
              </div>
            </div>
          </div>

          {/* CTA区域 */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">立即开启合作之旅</h3>
            <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
              专业团队7×24小时在线服务，1对1定制化方案，助您快速抢占市场先机
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-900 to-cyan-500 text-white font-bold rounded-full hover:from-blue-800 hover:to-cyan-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                立即咨询
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                下载资料
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 全球布局地图 */}
      <section id="global" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-900 rounded-full text-sm font-medium mb-4">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd"/>
              </svg>
              全球布局
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">国际化战略布局</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              立足中国，面向全球，构建国际化产业生态圈
            </p>
          </div>

          {/* 地图可视化区域 */}
          <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-16">
            {/* 世界地图SVG */}
            <div className="relative h-96 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl overflow-hidden">
              {/* 详细的世界地图SVG插画 */}
              <svg viewBox="0 0 1000 500" className="w-full h-full">
                <defs>
                  <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#dbeafe" />
                    <stop offset="100%" stopColor="#e0e7ff" />
                  </linearGradient>
                  <linearGradient id="landGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f1f5f9" />
                    <stop offset="100%" stopColor="#e2e8f0" />
                  </linearGradient>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0"/>
                    <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0"/>
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* 海洋背景 */}
                <rect width="1000" height="500" fill="url(#mapGradient)" />
                
                {/* 北美洲 */}
                <path d="M50 80 Q120 60 200 80 L250 70 Q300 80 350 90 L380 100 Q400 120 380 150 L360 180 Q340 200 320 220 L300 240 Q280 260 260 280 L240 300 Q200 320 160 300 L120 280 Q80 260 60 240 L40 220 Q20 200 30 180 L40 160 Q50 140 50 120 Z" 
                      fill="url(#landGradient)" stroke="#cbd5e1" strokeWidth="1" opacity="0.8" />
                
                {/* 南美洲 */}
                <path d="M200 280 Q220 300 240 320 L260 340 Q280 360 300 380 L320 400 Q340 420 360 440 L380 460 Q360 470 340 460 L320 450 Q300 440 280 430 L260 420 Q240 410 220 400 L200 390 Q180 380 170 360 L160 340 Q150 320 160 300 L170 280 Q180 270 200 280 Z" 
                      fill="url(#landGradient)" stroke="#cbd5e1" strokeWidth="1" opacity="0.8" />
                
                {/* 欧洲 */}
                <path d="M450 60 Q480 50 510 60 L540 70 Q570 80 600 90 L630 100 Q650 120 640 140 L630 160 Q620 180 600 190 L580 200 Q560 210 540 200 L520 190 Q500 180 480 170 L460 160 Q440 150 440 130 L440 110 Q440 90 450 60 Z" 
                      fill="url(#landGradient)" stroke="#cbd5e1" strokeWidth="1" opacity="0.8" />
                
                {/* 非洲 */}
                <path d="M480 200 Q520 190 560 200 L600 210 Q640 220 680 230 L720 240 Q740 260 730 280 L720 300 Q710 320 690 340 L670 360 Q650 380 630 400 L610 420 Q590 440 570 460 L550 480 Q530 470 510 460 L490 450 Q470 440 450 430 L430 420 Q410 410 400 390 L390 370 Q380 350 390 330 L400 310 Q410 290 430 270 L450 250 Q470 230 480 200 Z" 
                      fill="url(#landGradient)" stroke="#cbd5e1" strokeWidth="1" opacity="0.8" />
                
                {/* 亚洲 */}
                <path d="M600 80 Q650 70 700 80 L750 90 Q800 100 850 110 L900 120 Q920 140 910 160 L900 180 Q890 200 870 220 L850 240 Q830 260 810 280 L790 300 Q770 320 750 340 L730 360 Q710 380 690 360 L670 340 Q650 320 630 300 L610 280 Q590 260 580 240 L570 220 Q560 200 570 180 L580 160 Q590 140 600 120 L610 100 Q600 90 600 80 Z" 
                      fill="url(#landGradient)" stroke="#cbd5e1" strokeWidth="1" opacity="0.8" />
                
                {/* 澳洲 */}
                <path d="M750 380 Q780 370 810 380 L840 390 Q870 400 900 410 L920 420 Q930 440 920 460 L910 480 Q890 490 870 480 L850 470 Q830 460 810 450 L790 440 Q770 430 750 420 L730 410 Q720 400 730 390 L740 380 Q750 370 750 380 Z" 
                      fill="url(#landGradient)" stroke="#cbd5e1" strokeWidth="1" opacity="0.8" />
                
                {/* 中国区域高亮 */}
                <path d="M720 180 Q750 170 780 180 L810 190 Q840 200 860 220 L880 240 Q870 260 850 270 L830 280 Q810 290 790 280 L770 270 Q750 260 730 250 L710 240 Q700 230 710 210 L720 190 Q720 180 720 180 Z" 
                      fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" opacity="0.9" />
              </svg>

              {/* 布局点标记 */}
              {/* 中国总部 */}
              <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-lg animate-pulse flex items-center justify-center" style={{filter: 'url(#glow)'}}>
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white px-4 py-3 rounded-xl shadow-xl border text-sm font-medium whitespace-nowrap">
                    <div className="text-red-600 font-bold text-base">中国总部</div>
                    <div className="text-gray-600 text-xs">湖南·长沙</div>
                    <div className="text-gray-500 text-xs">3个生产基地</div>
                  </div>
                  {/* 辐射圈 */}
                  <div className="absolute inset-0 w-8 h-8 bg-red-500 rounded-full animate-ping opacity-20"></div>
                  <div className="absolute inset-0 w-12 h-12 -m-2 bg-red-500 rounded-full animate-ping opacity-10" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>

              {/* 亚太地区 */}
              <div className="absolute top-2/3 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-6 h-6 bg-blue-600 rounded-full border-3 border-white shadow-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white px-3 py-2 rounded-lg shadow-lg text-xs whitespace-nowrap">
                    <div className="text-blue-800 font-bold">亚太市场</div>
                    <div className="text-gray-600 text-xs">战略合作</div>
                  </div>
                </div>
              </div>

              {/* 欧洲市场 */}
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-6 h-6 bg-green-500 rounded-full border-3 border-white shadow-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white px-3 py-2 rounded-lg shadow-lg text-xs whitespace-nowrap">
                    <div className="text-green-600 font-bold">欧洲市场</div>
                    <div className="text-gray-600 text-xs">品牌输出</div>
                  </div>
                </div>
              </div>

              {/* 北美市场 */}
              <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-6 h-6 bg-purple-500 rounded-full border-3 border-white shadow-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white px-3 py-2 rounded-lg shadow-lg text-xs whitespace-nowrap">
                    <div className="text-purple-600 font-bold">北美市场</div>
                    <div className="text-gray-600 text-xs">技术合作</div>
                  </div>
                </div>
              </div>

              {/* 连接线动画 */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <path d="M 250 125 Q 400 100 667 250" stroke="url(#connectionGradient)" strokeWidth="3" fill="none" className="animate-pulse"/>
                <path d="M 500 167 Q 600 200 667 250" stroke="url(#connectionGradient)" strokeWidth="3" fill="none" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                <path d="M 750 333 Q 700 300 667 250" stroke="url(#connectionGradient)" strokeWidth="3" fill="none" className="animate-pulse" style={{animationDelay: '1s'}}/>
                
                {/* 数据流动效果 */}
                <circle r="3" fill="#3B82F6" opacity="0.8">
                  <animateMotion dur="4s" repeatCount="indefinite" path="M 250 125 Q 400 100 667 250"/>
                </circle>
                <circle r="3" fill="#10B981" opacity="0.8">
                  <animateMotion dur="4s" repeatCount="indefinite" begin="1s" path="M 500 167 Q 600 200 667 250"/>
                </circle>
                <circle r="3" fill="#8B5CF6" opacity="0.8">
                  <animateMotion dur="4s" repeatCount="indefinite" begin="2s" path="M 750 333 Q 700 300 667 250"/>
                </circle>
              </svg>
              
              {/* 全球数据统计浮窗 */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border">
                <div className="text-xs text-gray-500 mb-2">全球布局数据</div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">覆盖国家</span>
                    <span className="text-sm font-bold text-blue-600">15+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">合作伙伴</span>
                    <span className="text-sm font-bold text-green-600">50+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">销售网点</span>
                    <span className="text-sm font-bold text-purple-600">200+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 布局详情 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 中国总部 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                <h3 className="text-lg font-bold text-gray-900">中国总部</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  湖南长沙
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                  </svg>
                  3个生产基地
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  500+ 员工
                </div>
                <div className="text-xs text-gray-500 mt-3">
                  研发中心、生产基地、运营总部
                </div>
              </div>
            </div>

            {/* 亚太市场 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-blue-900 rounded-full mr-3"></div>
                <h3 className="text-lg font-bold text-gray-900">亚太市场</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  日本、韩国、东南亚
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  50+ 合作品牌
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  快速增长
                </div>
                <div className="text-xs text-gray-500 mt-3">
                  区域代理、品牌合作
                </div>
              </div>
            </div>

            {/* 欧洲市场 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <h3 className="text-lg font-bold text-gray-900">欧洲市场</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  德国、法国、意大利
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  CE认证完成
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  高端市场定位
                </div>
                <div className="text-xs text-gray-500 mt-3">
                  技术输出、品牌授权
                </div>
              </div>
            </div>

            {/* 北美市场 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                <h3 className="text-lg font-bold text-gray-900">北美市场</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  美国、加拿大
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  FDA注册进行中
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  战略规划中
                </div>
                <div className="text-xs text-gray-500 mt-3">
                  市场调研、渠道建设
                </div>
              </div>
            </div>
          </div>

          {/* 全球数据统计 */}
          <div className="mt-16 bg-gradient-to-r from-blue-800 to-indigo-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">全球业务数据</h3>
              <p className="text-blue-100">持续扩张的国际化版图</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-blue-100 text-sm">覆盖国家</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">200+</div>
                <div className="text-blue-100 text-sm">海外合作伙伴</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">30%</div>
                <div className="text-blue-100 text-sm">海外营收占比</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">5年</div>
                <div className="text-blue-100 text-sm">国际化历程</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 全站联系方式（页脚区） */}
      <footer id="contact" className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl bg-slate-900" />
              <span className="font-semibold">微肽集团</span>
            </div>
            <p className="text-sm text-slate-600 mt-4">功效性护肤 · 生物技术 · 冻干研究院 · GMPC 车间</p>
          </div>
          <div>
            <div className="font-medium">联系方式</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>电话：<a className="underline" href="tel:400-000-0000">400-000-0000</a></li>
              <li>商务邮箱：<a className="underline" href="mailto:biz@example.com">biz@example.com</a></li>
              <li>微信客服：<a className="underline" href="#">扫码二维码</a></li>
              <li>地址：湖南省××市××区××路××号</li>
              <li>接待时间：周一至周五 09:00-18:00</li>
            </ul>
          </div>
          <div>
            <div className="font-medium">站点</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li><a href="#solutions" className="underline">解决方案</a></li>
              <li><a href="#rd" className="underline">研发实力</a></li>
              <li><a href="#mfg" className="underline">生产实力</a></li>
              <li><a href="#ingredients" className="underline">原料基地</a></li>
              <li><a href="#lyo" className="underline">冻干研究院</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium">下载与资料</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li><a href="#whitepaper" className="underline">公司白皮书（PDF）</a></li>
              <li><a href="#" className="underline">资质证书打包（需留资）</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t py-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} 微肽集团 · 保留所有权利</div>
      </footer>

      {/* 移动端底部固定操作条 */}
      <div className="fixed md:hidden bottom-4 left-0 right-0 flex justify-center pointer-events-none">
        <div className="pointer-events-auto inline-flex bg-white border shadow/10 rounded-2xl overflow-hidden">
          <a href="tel:400-000-0000" className="px-4 py-3 text-sm border-r">一键拨号</a>
          <a href="#contact" className="px-4 py-3 text-sm">微信咨询</a>
        </div>
      </div>
    </div>
  );
}
