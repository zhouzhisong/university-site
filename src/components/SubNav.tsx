import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

interface SubNavProps {
  subNav: { name: string; path: string }[];
  currentPath: string;
  mobileTitle?: string; // 移动端显示的标题
}

export default function SubNav({ subNav, currentPath, mobileTitle }: SubNavProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // 点击外部关闭菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-red-600 text-white py-4 relative"
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* 移动端标题：居中显示，仅小屏幕可见 */}
        {mobileTitle && (
          <h2 className="text-lg md:hidden font-semibold text-center">
            {mobileTitle}
          </h2>
        )}

        {/* 大屏横向导航 */}
        <div className="hidden md:flex gap-8">
          {subNav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition-all relative ${
                currentPath === item.path
                  ? "text-[#D7DF21] font-semibold"
                  : "text-white hover:text-[#D7DF21]"
              }`}
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#D7DF21] scale-x-0 transition-transform origin-left hover:scale-x-100"></span>
            </Link>
          ))}
        </div>

        {/* 移动端汉堡按钮 */}
        <div className="md:hidden relative ml-auto" ref={menuRef}>
          <button
            className="focus:outline-none"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "关闭菜单" : "打开菜单"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* 悬浮下拉菜单 */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 mt-2 w-40 bg-red-700 rounded-md shadow-lg z-50 overflow-hidden"
              >
                {subNav.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-2 transition-colors duration-200 ${
                      currentPath === item.path
                        ? "text-[#D7DF21] font-semibold bg-red-600"
                        : "text-white hover:text-[#D7DF21] hover:bg-red-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}