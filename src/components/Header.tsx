import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNavIndex, setActiveNavIndex] = useState<number | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 导航项数据（含二级菜单）
  const navItems = [
    {
      title: "学校概括", path: "/about", children: [
        { title: "学校简介", path: "/about/intro" },
        { title: "校领导", path: "/about/leaders" },
        { title: "机构设置", path: "/about/structure" },
      ]
    },
    {
      title: "党建专题", path: "/party", children: [
        { title: "党建动态", path: "/party/news" },
        { title: "支部建设", path: "/party/branch" },
      ]
    },
    { title: "校务公开", path: "/public", children: [] },
    {
      title: "招生专栏", path: "/admissions", children: [
        { title: "招生政策", path: "/admissions/policy" },
        { title: "报名流程", path: "/admissions/process" },
      ]
    },
    { title: "学习资源", path: "/resources", children: [] },
    { title: "社区教育", path: "/community", children: [] },
    { title: "老年教育", path: "/elderly", children: [] },
    { title: "家庭教育", path: "/family", children: [] },
    { title: "数字校园", path: "/digital", children: [] },
    { title: "学分银行", path: "/credit", children: [] },
  ];

  // PC 端 TopBar 快捷入口
  const topLinks = [
    { label: "数字校园", path: "#" },
    { label: "图书馆", path: "#" },
    { label: "教务系统", path: "#" },
    { label: "学习平台入口", path: "#" },
  ];

  // 处理鼠标进入 - 立即显示子菜单
  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveNavIndex(index);
  };

  // 处理鼠标离开 - 延迟隐藏子菜单
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveNavIndex(null);
    }, 300);
  };

  return (
    <header ref={headerRef} className="w-full top-0 left-0 z-50">
      {/* 顶部快捷栏（仅PC端显示） */}
      <div className="hidden md:block bg-[#CD3135] text-white">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 py-2">
          {/* 艺术字图片 - 四级响应式大小 */}
          <div className="flex items-center mb-1 md:mb-0">
            <img
              src="/images/logo1.png"
              alt="学校标志"
              className="h-[1.5rem] sm:h-7 md:h-[1.5rem] w-auto"
            />
          </div>

          <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-5">
            {/* 快捷链接 - 小屏幕自动换行 */}
            <div className="flex flex-wrap gap-3 sm:gap-5">
              {topLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.path}
                  className="text-xs sm:text-sm md:text-base lg:text-lg hover:text-yellow-400 transition-colors whitespace-nowrap">
                  {item.label}
                </a>
              ))}
              <span className="text-gray-400 hidden sm:inline">|</span>
            </div>

            {/* 搜索框 - 四级响应式宽度 */}
            <div className="flex items-center bg-[#d58a8a] rounded-full px-2 sm:px-3 py-1.5 w-full sm:w-auto">
              <input
                type="text"
                placeholder="请输入关键词"
                className="bg-transparent outline-none px-2 sm:px-3 py-1 text-white text-xs sm:text-sm placeholder-gray-300 w-full sm:w-32 md:w-48 lg:w-64"
              />
              <button className="bg-[#96c045] hover:bg-green-600 p-1.5 rounded-full transition-colors">
                <FaSearch className="text-xs sm:text-sm text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 主导航栏 */}
      <div className={`transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          {/* Logo区域 - 四级响应式缩放 */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/images/logo2.png"
              alt="学校Logo"
              className="h-8 sm:h-9 md:h-10 w-auto"
            />
            <span className={`block sm:hidden text-red-700 text-base font-semibold ${isScrolled ? "text-red-700" : "text-white"}`}>
              <img
                src="/images/school-name-zh.png"
                alt="学校中文名"
                className="h-4 sm:h-5 md:h-5"
              />
            </span>
            <div className="hidden sm:block">
              <h1 className={`font-bold opacity-80 ${isScrolled ? "text-gray-900" : "text-white"}`}>
                <img
                  src="/images/school-name-zh.png"
                  alt="学校中文名"
                  className="h-[1.3rem] sm:h-[1.3rem] md:h-[1.3rem] mb-[8px]"  
                />
              </h1>
              <p className={`${isScrolled ? "text-gray-600" : "text-white/80"}`}>
                <img
                  src="/images/school-name-en.png"
                  alt="学校英文名"
                  className="h-2.5 sm:h-3 md:h-4"
                />
              </p>
            </div>
          </Link>

          {/* 桌面端导航（含二级菜单）- 按屏幕宽度动态调整 */}
          <nav className="hidden md:flex flex-wrap justify-end gap-x-1 sm:gap-x-3 md:gap-x-5 lg:gap-x-6">
            {navItems.map((item, idx) => (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`${isScrolled ? "text-red-700" : "text-red-700"} 
                    font-medium transition-colors py-2 px-1 inline-block 
                    text-xs sm:text-sm md:text-base whitespace-nowrap`}
                >
                  {item.title}
                </div>

                {/* 二级菜单 */}
                {item.children.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`absolute left-0 w-48 bg-red-600 shadow-lg p-2 z-50 
                      ${activeNavIndex === idx ? "block" : "hidden"}`}
                    style={{
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                      transformOrigin: "top center"
                    }}
                    onMouseEnter={() => handleMouseEnter(idx)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.children.map((child, cIdx) => (
                      <Link
                        key={cIdx}
                        to={child.path}
                        className="block px-3 py-2 text-white hover:text-yellow-300 transition-colors text-sm"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* 移动端菜单按钮 */}
          <button
            className={`md:hidden text-xl sm:text-2xl ${isScrolled ? "text-red-600" : "text-red-600"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "关闭菜单" : "打开菜单"}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* 背景蒙版 */}
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black z-40"
                onClick={() => setMobileMenuOpen(false)}
              />

              {/* 左侧滑出菜单 */}
              <motion.div
                key="menu"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 left-0 bottom-0 w-64 bg-[#CD3135] z-50 overflow-y-auto"
              >
                <div className="px-4 py-3 flex flex-col space-y-3 text-white">
                  {/* TopBar 快捷入口 */}
                  <div className="border-b border-red-400 pb-3">
                    <p className="text-white/80 text-sm mb-2">快捷入口</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {topLinks.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.path}
                          className="px-2 py-1 text-white hover:text-yellow-300 text-sm rounded hover:bg-red-600 transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                    <div className="flex items-center bg-red-500 rounded px-3 py-2 mt-2">
                      <input
                        type="text"
                        placeholder="请输入关键词"
                        className="bg-transparent outline-none px-2 py-1 text-white placeholder-white/70 w-full text-sm"
                      />
                      <FaSearch size={16} className="text-white" />
                    </div>
                  </div>

                  {/* 主导航菜单 */}
                  {navItems.map((item, idx) => {
                    const isExpanded = idx === expandedIndex;
                    const hasChildren = item.children.length > 0;
                    return (
                      <div key={idx} className="border-b border-red-400">
                        <button
                          onClick={() => {
                            if (hasChildren) {
                              setExpandedIndex(isExpanded ? null : idx);
                            } else {
                              setMobileMenuOpen(false);
                            }
                          }}
                          className="w-full text-left flex justify-between items-center py-2 text-base font-medium hover:text-yellow-300 transition-colors"
                        >
                          <span>{item.title}</span>
                          {hasChildren && (
                            <motion.span
                              initial={false}
                              animate={{ rotate: isExpanded ? 90 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="text-sm text-white/80"
                            >
                              ▶
                            </motion.span>
                          )}
                        </button>

                        {/* 二级菜单展开动画 */}
                        {hasChildren && (
                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="pl-4 space-y-1 overflow-hidden"
                              >
                                {item.children.map((child, cIdx) => (
                                  <Link
                                    key={cIdx}
                                    to={child.path}
                                    className="block py-1.5 text-sm text-white/90 hover:text-yellow-300 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {child.title}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>


      </div>
    </header>
  );
};

export default Header;
