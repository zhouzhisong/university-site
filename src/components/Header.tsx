import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [activeNavIndex, setActiveNavIndex] = useState<number | null>(null);
  const headerRef = useRef(null);
  const timeoutRef = useRef<number | null>(null);


  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 导航项数据（含二级菜单）
  const navItems = [
    {
      title: "学校概括",
      path: "/about",
      children: [
        { title: "学校简介", path: "/about/intro" },
        { title: "校领导", path: "/about/leaders" },
        { title: "机构设置", path: "/about/structure" },
      ]
    },
    {
      title: "党建专题",
      path: "/party",
      children: [
        { title: "党建动态", path: "/party/news" },
        { title: "支部建设", path: "/party/branch" },
      ]
    },
    { title: "校务公开", path: "/public", children: [] },
    {
      title: "招生专栏",
      path: "/admissions",
      children: [
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
  const handleMouseEnter = (index:number) => {
    // 清除可能存在的延迟隐藏定时器
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveNavIndex(index);
  };

  // 处理鼠标离开 - 延迟隐藏子菜单
  const handleMouseLeave = () => {
    // 设置延迟，防止鼠标从一级菜单移动到二级菜单时误隐藏
    timeoutRef.current = setTimeout(() => {
      setActiveNavIndex(null);
    }, 300);
  };

  return (
    <header ref={headerRef} className="w-full  top-0 left-0 z-50">
      {/* 顶部快捷栏（仅PC端显示） */}
      <div className="hidden md:block bg-[#CD3135] text-white text-sm">
        <div className="max-w-8xl mx-auto flex justify-around items-center px-4 py-4 ">
          <div className="font-bold tracking-wide opacity-80">
            <img src="/images/logo1.png" alt="" />
          </div>

          <div className="flex items-center space-x-4">
            {topLinks.map((item, idx) => (
              <a key={idx} href={item.path} className="hover:text-yellow-400 transition-colors">
                {item.label}
              </a>
            ))}
            <span className="text-gray-400">|</span>

            <div className="flex items-center bg-[#d58a8a] rounded-full px-2">
              <input
                type="text"
                placeholder="请输入关键词"
                className="bg-transparent outline-none px-2 py-1 text-white placeholder-gray-300 w-28 md:w-40 text-xs"
              />
              <button className="bg-[#96c045] hover:bg-green-600 p-1 rounded-full transition-colors">
                <FaSearch size={12} className="text-white" />
              </button>
            </div>
            {/* <div className="flex items-center space-x-2">
              <FaGlobe className="text-gray-200" />
              <a href="#" className="hover:text-yellow-400 transition-colors">English</a>
            </div> */}
          </div>
        </div>
      </div>

      {/* 主导航栏 */}
      <div className={`transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/images/logo2.png" alt="学校Logo" className="h-12 w-auto" />
            <div>
              <h1 className={`text-2xl font-bold tracking-wide opacity-80 font-bold ${isScrolled ? "text-gray-900" : "text-white"}`}>
                <img src="/images/school-name-zh.png" alt="" />
              </h1>
              <p className={`text-sm ${isScrolled ? "text-gray-600" : "text-white/80"}`}>
                <img src="/images/school-name-en.png" alt="" />
              </p>
            </div>
          </Link>

          {/* 桌面端导航（含二级菜单） */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item, idx) => (
              <div
                key={idx}
                className="relative mr-6"
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`${isScrolled ? "text-red-700" : "text-red-700"} 
                    font-medium transition-colors py-2 inline-block`}
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
                    className={`absolute left-0 w-48 bg-red-600 shadow-lg rounded-md p-2 z-50 
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
            className={`md:hidden text-2xl ${isScrolled ? "text-red-600" : "text-red-600"
              }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* 移动端菜单 */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#CD3135] shadow-lg"  // 改成红色
            >
              <div className="px-4 py-4 flex flex-col space-y-4 text-white">
                {/* TopBar 内容 */}
                <div className="border-b border-red-400 pb-3">
                  <p className="text-white/80 text-xs mb-2">快捷入口</p>
                  <div className="flex flex-wrap gap-2 md:gap-4 mb-2">
                    {topLinks.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.path}
                        className="px-2 py-2 text-white hover:text-yellow-300 text-sm 
                           rounded hover:bg-red-600 transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                  {/* 搜索框保持一致，背景稍调 */}
                  <div className="flex items-center bg-red-500 rounded px-2 mt-2">
                    <input
                      type="text"
                      placeholder="请输入关键词"
                      className="bg-transparent outline-none px-2 py-1 text-white placeholder-white/70 w-full text-sm"
                    />
                    <FaSearch className="text-white" />
                  </div>
                </div>

                {/* 主导航菜单 */}
                {navItems.map((item, idx) => (
                  <div key={idx} className="border-b border-red-400">
                    <Link
                      to={item.path}
                      className="text-white hover:text-yellow-300 py-2 block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                    {/* 移动端二级菜单 */}
                    {item.children.length > 0 && (
                      <div className="pl-4 py-2 space-y-1">
                        {item.children.map((child, cIdx) => (
                          <Link
                            key={cIdx}
                            to={child.path}
                            className="text-white/90 hover:text-yellow-300 text-sm block py-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
};

export default Header;
