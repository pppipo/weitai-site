import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* 顶部导航 */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                微肽集团
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">首页</a>
                <a href="#about" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">关于我们</a>
                <a href="#solutions" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">解决方案</a>
                <a href="#research" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">研发实力</a>
                <a href="#production" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">生产实力</a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">联系我们</a>
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
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* 主标题 */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block text-gray-900 mb-4">功效性护肤</span>
              <span className="block bg-gradient-to-r from-blue-600 via-teal-500 to-blue-700 bg-clip-text text-transparent">
                超级工厂
              </span>
            </h1>
            
            {/* 副标题 */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              融合东方美学与现代生物科技<br />
              <span className="text-blue-600 font-medium">冻干技术 × 功效护肤 × 定制服务</span>
            </p>
            
            {/* CTA 按钮组 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                了解解决方案
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
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
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">OEM/ODM 定制服务</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                从配方研发到规模化生产，提供一站式定制化服务。覆盖护肤、彩妆、个护等全品类产品开发。
              </p>
              <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                了解更多 
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* 医美术后修护 */}
            <div className="group bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl hover:border-teal-200 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
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
                {/* LOGO占位符 */}
                <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {partner.type === 'university' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      )}
                      {partner.type === 'research' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      )}
                      {partner.type === 'lab' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                      )}
                      {(partner.type === 'testing' || partner.type === 'clinical') && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      )}
                    </svg>
                  </div>
                </div>
                {/* 机构名称 */}
                <h3 className="text-sm font-medium text-gray-900 text-center group-hover:text-blue-600 transition-colors">
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
            {/* 左侧：生产设施图片占位符 */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-teal-100 rounded-3xl border-2 border-white shadow-xl overflow-hidden">
                {/* 模拟工厂内部场景 */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-white/60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                      </svg>
                    </div>
                    <p className="text-gray-600 font-medium">GMPC洁净车间实景</p>
                  </div>
                </div>
                
                {/* 装饰性元素 */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-6 left-6 w-12 h-12 bg-teal-200/30 rounded-full blur-lg"></div>
              </div>
              
              {/* 浮动信息卡 */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border">
                <div className="text-2xl font-bold text-blue-600">10万级</div>
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
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
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
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
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
                    <span key={cert} className="px-4 py-2 bg-gradient-to-r from-blue-50 to-teal-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">
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
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
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
              { name: "冻干面膜", icon: "M4 7v10c0 2.21 3.79 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.79 4 8 4s8-1.79 8-4M4 7c0-2.21 3.79-4 8-4s8 1.79 8 4", color: "from-blue-500 to-cyan-500" },
              { name: "冻干精华", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z", color: "from-purple-500 to-pink-500" },
              { name: "冻干乳液", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", color: "from-emerald-500 to-teal-500" },
              { name: "冻干霜剂", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z", color: "from-orange-500 to-red-500" },
              { name: "冻干粉末", icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z", color: "from-amber-500 to-yellow-500" },
              { name: "冻干胶囊", icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z", color: "from-indigo-500 to-blue-500" },
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
                      <div className="text-lg font-bold text-blue-600">{advantage.percentage}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl border-2 border-white shadow-xl overflow-hidden">
                  {/* 冻干技术示意图 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-indigo-50/60"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                        </svg>
                      </div>
                      <p className="text-gray-700 font-medium">冻干技术核心</p>
                      <p className="text-sm text-gray-500 mt-2">-80°C 超低温冻干</p>
                    </div>
                  </div>
                  
                  {/* 装饰性元素 */}
                  <div className="absolute top-6 right-6 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
                  <div className="absolute bottom-8 left-8 w-12 h-12 bg-indigo-200/30 rounded-full blur-lg"></div>
                </div>
                
                {/* 浮动数据卡 */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border">
                  <div className="text-xl font-bold text-indigo-600">-80°C</div>
                  <div className="text-xs text-gray-600">冻干温度</div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border">
                  <div className="text-xl font-bold text-blue-600">8种</div>
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
              { name: "GMPC认证", type: "生产质量", color: "from-blue-500 to-cyan-500" },
              { name: "ISO 9001", type: "质量管理", color: "from-emerald-500 to-teal-500" },
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
                image: "from-blue-500 to-cyan-500"
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
                image: "from-emerald-500 to-teal-500"
              }
            ].map((news, index) => (
              <article key={index} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* 新闻图片占位符 */}
                <div className={`aspect-[16/10] bg-gradient-to-br ${news.image} relative overflow-hidden`}>
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
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
                    
                    <button className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors duration-300 flex items-center">
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
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              查看更多新闻
            </button>
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
