import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaMapMarker, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const [quickLinksOpen, setQuickLinksOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const quickLinks = [
    { name: "学校概况", path: "/about/intro" },
    { name: "组织机构", path: "/org" },
    { name: "师资队伍", path: "/teachers" },
    { name: "人才培养", path: "/education" },
    { name: "科学研究", path: "/research" },
    { name: "招生就业", path: "/admissions" },
  ];

  const resourcesLinks = [
    { name: "图书馆", path: "/library" },
    { name: "校园网", path: "/network" },
    { name: "信息门户", path: "/portal" },
    { name: "就业信息网", path: "/jobs" },
    { name: "采购招标", path: "/bidding" },
    { name: "教育基金会", path: "/foundation" },
  ];

  const contactInfo = [
    { icon: <FaMapMarker size={16} />, text: "贵阳市南明区冶金路18号（油榨街贵钢对面）" },
    { icon: <FaPhone size={16} />, text: "0851-85517757（办公室） 0851-85512620（招办）" },
    { icon: <FaEnvelope size={16} />, text: "info@must.edu.cn" },
  ];

  return (
    <footer
      className="text-white pt-12 pb-6"
      style={{
        backgroundImage: "url('/images/footer-bg.jpg')",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* 网格布局 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 text-sm sm:text-base">
          {/* Logo + 简介 */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/images/logo2.png" alt="学校Logo" className="h-10 w-auto mr-3" />
              {/* <h3 className="text-lg sm:text-xl font-bold">贵阳开放大学</h3> */}
              <img src="/images/school-name-zh.png" alt=""  className="h-10 w-auto h-[1.3rem]" />
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6">
              贵阳开放大学是一所以工为主，理工结合，经、管、文、法、艺等多学科协调发展的重点大学。
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook"><FaFacebook size={16} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter"><FaTwitter size={16} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram"><FaInstagram size={16} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Youtube"><FaYoutube size={16} /></a>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3
              className="text-lg font-bold mb-3 sm:hidden cursor-pointer flex justify-between items-center"
              onClick={() => setQuickLinksOpen(!quickLinksOpen)}
            >
              快速链接 <span>{quickLinksOpen ? "▲" : "▼"}</span>
            </h3>
            <h3 className="text-lg font-bold mb-3 hidden sm:block">快速链接</h3>
            <ul className={`${quickLinksOpen ? "block" : "hidden"} sm:block space-y-2`}>
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 资源服务 */}
          <div>
            <h3
              className="text-lg font-bold mb-3 sm:hidden cursor-pointer flex justify-between items-center"
              onClick={() => setResourcesOpen(!resourcesOpen)}
            >
              资源服务 <span>{resourcesOpen ? "▲" : "▼"}</span>
            </h3>
            <h3 className="text-lg font-bold mb-3 hidden sm:block">资源服务</h3>
            <ul className={`${resourcesOpen ? "block" : "hidden"} sm:block space-y-2`}>
              {resourcesLinks.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3
              className="text-lg font-bold mb-3 sm:hidden cursor-pointer flex justify-between items-center"
              onClick={() => setContactOpen(!contactOpen)}
            >
              联系方式 <span>{contactOpen ? "▲" : "▼"}</span>
            </h3>
            <h3 className="text-lg font-bold mb-3 hidden sm:block">联系方式</h3>
            <ul className={`${contactOpen ? "block" : "hidden"} sm:block space-y-2`}>
              {contactInfo.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">{item.icon}</span>
                  <span className="text-gray-400">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="pt-6 text-center text-white/70 text-xs sm:text-sm">
          <p>贵阳开放大学 版权所有 | 贵ICP备(shou.org.cn)05052049号-13</p>
          <p className="mt-1">贵阳市互联网违法与违规举报中心</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
