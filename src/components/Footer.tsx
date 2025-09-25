import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaMapMarker, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white pt-16 pb-8" style={{
    // 替换为你的背景图路径（建议放在 public 目录下，用绝对路径）
    backgroundImage: "url('/images/footer-bg.jpg')",
    // 可选：背景图与背景色混合，提升文字可读性
    backgroundBlendMode: "multiply",
  }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo与简介 */}
          <div>
            <div className="flex items-center mb-6">
              <img
                src="/images/logo2.png"
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
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Youtube">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* 快速链接（路由） */}
          <div>
            <h3 className="text-lg font-bold mb-6">快速链接</h3>
            <ul className="space-y-3">
              {[
                { name: "学校概况", path: "/about/intro" },
                { name: "组织机构", path: "/org" },
                { name: "师资队伍", path: "/teachers" },
                { name: "人才培养", path: "/education" },
                { name: "科学研究", path: "/research" },
                { name: "招生就业", path: "/admissions" },
              ].map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 资源服务 */}
          <div>
            <h3 className="text-lg font-bold mb-6">资源服务</h3>
            <ul className="space-y-3">
              {[
                { name: "图书馆", path: "/library" },
                { name: "校园网", path: "/network" },
                { name: "信息门户", path: "/portal" },
                { name: "就业信息网", path: "/jobs" },
                { name: "采购招标", path: "/bidding" },
                { name: "教育基金会", path: "/foundation" },
              ].map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-lg font-bold mb-6">联系方式</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarker size={18} className="text-gray-400 mt-1 mr-3" />
                <span className="text-gray-400">贵阳市南明区冶金路18号（油榨街贵钢对面）</span>
              </li>
              <li className="flex items-center">
                <FaPhone size={18} className="text-gray-400 mr-3" />
                <span className="text-gray-400">0851-85517757（办公室）</span>
                <span className="text-gray-400">0851-85512620（招办）</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope size={18} className="text-gray-400 mr-3" />
                <span className="text-gray-400">info@must.edu.cn</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="pt-8  text-center  text-white-500 text-sm">
          <p>贵阳开放大学 版权所有 | 贵ICP备(shou.org.cn)05052049号-13</p>
          <p className="mt-2">贵阳市互联网违法与违规举报中心</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;