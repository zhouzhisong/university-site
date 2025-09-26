import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Menu, X, ChevronRight, ChevronLeft, 
  Clock, Eye, ArrowRight, Phone, Mail, MapPin,
  Facebook, Twitter, Instagram, Youtube
} from 'react-icons/all-files';

// 主应用组件
const App = () => {
  // 状态管理
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  
  // 轮播图数据
  const sliderImages = [
    {
      url: 'https://picsum.photos/id/1031/1920/600',
      title: '创新教育 引领未来',
      subtitle: '培养适应新时代发展的高素质人才'
    },
    {
      url: 'https://picsum.photos/id/1033/1920/600',
      title: '学术研究 突破边界',
      subtitle: '多项科研成果荣获国家级奖项'
    },
    {
      url: 'https://picsum.photos/id/1035/1920/600',
      title: '国际交流 拓展视野',
      subtitle: '与全球50+知名高校建立合作关系'
    }
  ];
  
  // 新闻数据
  const newsItems = [
    {
      id: 1,
      title: '我校荣获2023年度国家级教学成果一等奖',
      date: '2023-10-15',
      views: 2456,
      image: 'https://picsum.photos/id/20/400/250'
    },
    {
      id: 2,
      title: '2023级新生开学典礼隆重举行',
      date: '2023-09-01',
      views: 3120,
      image: 'https://picsum.photos/id/21/400/250'
    },
    {
      id: 3,
      title: '我校与国外知名高校签署合作备忘录',
      date: '2023-08-20',
      views: 1890,
      image: 'https://picsum.photos/id/22/400/250'
    }
  ];
  
  // 公告数据
  const announcements = [
    { id: 1, title: '关于开展2023年秋季学期选课工作的通知', date: '2023-10-10' },
    { id: 2, title: '2023年国庆节放假安排通知', date: '2023-09-25' },
    { id: 3, title: '关于举办"人工智能与未来教育"学术论坛的通知', date: '2023-09-18' },
    { id: 4, title: '2023年国家奖助学金评选工作启动', date: '2023-09-10' }
  ];
  
  // 特色板块数据
  const features = [
    {
      title: '一流学科',
      description: '拥有12个国家级重点学科，5个双一流建设学科',
      icon: '📚'
    },
    {
      title: '科研平台',
      description: '15个省部级以上科研平台，年度科研经费超5亿元',
      icon: '🔬'
    },
    {
      title: '国际交流',
      description: '与全球100+高校建立合作，每年交换学生超1000人',
      icon: '✈️'
    },
    {
      title: '校园生活',
      description: '完善的生活设施，丰富的社团活动，多彩的校园文化',
      icon: '🏘️'
    }
  ];
  
  // 监听滚动事件，用于导航栏样式变化
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // 轮播图自动播放
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [sliderImages.length]);
  
  // 轮播控制函数
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* 导航栏 */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo区域 */}
          <div className="flex items-center">
            <img 
              src="https://picsum.photos/id/237/60/60" 
              alt="学校Logo" 
              className="h-12 w-auto mr-3"
            />
            <div>
              <h1 className={`text-2xl font-bold ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
                贵阳开放大学
              </h1>
              <p className={`text-sm ${isScrolled ? 'text-gray-600' : 'text-white/80'}`}>
                Modern University of Science and Technology
              </p>
            </div>
          </div>
          
          {/* 桌面端导航 */}
          <nav className="hidden md:flex items-center space-x-8">
            {['首页', '学校概况', '教学科研', '招生就业', '校园生活', '国际交流', '联系我们'].map((item, index) => (
              <a 
                key={index}
                href={`#${item}`}
                className={`font-medium hover:text-blue-600 transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item}
              </a>
            ))}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition-colors">
              信息门户
            </button>
          </nav>
          
          {/* 移动端菜单按钮 */}
          <button 
            className="md:hidden text-2xl"
            style={{ color: isScrolled ? '#1e3a8a' : 'white' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* 移动端导航菜单 */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white shadow-lg absolute w-full"
            >
              <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
                {['首页', '学校概况', '教学科研', '招生就业', '校园生活', '国际交流', '联系我们'].map((item, index) => (
                  <a 
                    key={index}
                    href={`#${item}`}
                    className="text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition-colors w-full">
                  信息门户
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* 轮播图区域 */}
        <section className="relative h-[600px] overflow-hidden">
          {sliderImages.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={slide.url} 
                alt={slide.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
                <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-[clamp(1rem,2vw,1.5rem)] max-w-3xl mb-8">
                  {slide.subtitle}
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-all transform hover:scale-105">
                  了解更多
                </button>
              </div>
            </div>
          ))}
          
          {/* 轮播控制按钮 */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* 轮播指示器 */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                }`}
                aria-label={`切换到第${index + 1}张幻灯片`}
              />
            ))}
          </div>
        </section>
        
        {/* 新闻资讯板块 */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">新闻资讯</h2>
                <div className="w-20 h-1 bg-blue-600"></div>
              </div>
              <a href="#" className="hidden md:flex items-center text-blue-600 hover:text-blue-800 font-medium">
                查看全部 <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsItems.map((item) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (item.id - 1) * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                      <a href="#">{item.title}</a>
                    </h3>
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Eye size={14} className="mr-1" />
                        <span>{item.views}</span>
                      </div>
                    </div>
                    <a href="#" className="inline-block text-blue-600 hover:text-blue-800 font-medium">
                      阅读全文
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                查看全部 <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </section>
        
        {/* 公告和特色板块 */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* 公告板块 */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6 h-full">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">最新公告</h2>
                    <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">更多</a>
                  </div>
                  
                  <div className="space-y-4">
                    {announcements.map((announcement) => (
                      <div key={announcement.id} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                        <a href="#" className="text-gray-700 hover:text-blue-600 line-clamp-2 transition-colors">
                          {announcement.title}
                        </a>
                        <p className="text-sm text-gray-500 mt-2">{announcement.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* 特色板块 */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">学校特色</h2>
                  <div className="w-20 h-1 bg-blue-600"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100 hover:shadow-md transition-shadow"
                    >
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-bold mb-3 text-blue-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* 统计数据板块 */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '120+', label: '本科专业' },
                { value: '35,000+', label: '在校学生' },
                { value: '2,500+', label: '教职工' },
                { value: '50+', label: '国际合作院校' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-blue-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* 联系我们板块 */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">联系我们</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                如有任何问题或建议，欢迎通过以下方式与我们联系，我们将尽快回复您
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">电话咨询</h3>
                <p className="text-gray-600 mb-4">工作日 8:00-18:00</p>
                <a href="tel:+8610123456789" className="text-blue-600 hover:text-blue-800 font-medium">
                  010-12345678
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">电子邮件</h3>
                <p className="text-gray-600 mb-4">24小时内回复</p>
                <a href="mailto:info@must.edu.cn" className="text-blue-600 hover:text-blue-800 font-medium">
                  info@must.edu.cn
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">学校地址</h3>
                <p className="text-gray-600 mb-4">北京市海淀区科技园区</p>
                <p className="text-blue-600 font-medium">
                  邮政编码: 100085
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* 页脚 */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <img 
                  src="https://picsum.photos/id/237/60/60" 
                  alt="学校Logo" 
                  className="h-10 w-auto mr-3"
                />
                <h3 className="text-xl font-bold">贵阳开放大学</h3>
              </div>
              <p className="text-gray-400 mb-6">
                贵阳开放大学是一所以工为主，理工结合，经、管、文、法、艺等多学科协调发展的重点大学。
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Youtube">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">快速链接</h3>
              <ul className="space-y-3">
                {['学校概况', '组织机构', '师资队伍', '人才培养', '科学研究', '招生就业'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">资源服务</h3>
              <ul className="space-y-3">
                {['图书馆', '校园网', '信息门户', '就业信息网', '采购招标', '教育基金会'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">联系方式</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin size={18} className="text-gray-400 mt-1 mr-3" />
                  <span className="text-gray-400">北京市海淀区科技园区88号</span>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="text-gray-400 mr-3" />
                  <span className="text-gray-400">010-12345678</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="text-gray-400 mr-3" />
                  <span className="text-gray-400">info@must.edu.cn</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© 2023 贵阳开放大学 版权所有 | 京ICP备12345678号-1</p>
            <p className="mt-2">最佳浏览体验：建议使用Chrome、Firefox、Edge等现代浏览器，分辨率1920×1080</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
    