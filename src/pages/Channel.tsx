import React, { useEffect, useState } from "react";
import { motion, easeOut } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import SubNav from "../components/SubNav";
import SubFooter from "../components/SubFooter";

const fetchSchoolIntroData = async () => {
  return {
    banner: {
      title: "学校概况",
      breadcrumbs: [
        { text: "首页", url: "/" },
        { text: "学校概况", url: "/intro" },
        { text: "学校简介", url: "" },
      ],
      backgroundImage: "https://picsum.photos/id/1031/1920/600",
    },
    subNav: [
      { name: "学校简介", path: "/intro/profile" },
      { name: "历史沿革", path: "/intro/history" },
      { name: "现任领导", path: "/intro/leaders" },
      { name: "组织结构", path: "/intro/structure" },
      { name: "视觉识别系统", path: "/intro/visual" },
      { name: "宗旨校训", path: "/intro/motto" },
    ],
    titleSection: {
      mainTitle: "学校简介",
      meta: [
        { label: "发布时间", value: "2025-07-09" },
        { label: "浏览次数", value: "171768" },
        { label: "文章来源", value: "党政办" },
      ],
    },
    content: [
      "贵阳开放大学是由上海市人民政府举办，教育部批准成立，上海市教育委员会管理的“功能性、平台型”新型成人高等学校，是上海构建服务全民终身学习教育体系的重要枢纽和建设学习型社会的重要平台。",
      "学校前身为上海电视大学，创办于1960年。学校以现代信息技术为支撑，面向成人开展本科和专科学历教育。目前共开设51个专业，注册在读学生10万余名。实施系统办学，依托政府、行业和社会资源在全市设有41所分校、教学点，为学生提供全面的学习支持服务。自学校开办以来共计培养各类本、专科毕业生超68万人。",
      "学校奉行“开放、优质、灵活、便捷”的办学理念，践行“为了一切学习者，一切为了学习者”的办学宗旨，秉承“有教无类，乐学致远”的校训，服务泛在可及的终身教育体系构建，服务学习型城市建设，服务上海城市战略。",
    ],
    footer: {
      contacts: [
        { icon: "map-marker", text: "联系地址：贵阳市南明区冶金路18号（油榨街贵钢对面）" },
        { icon: "phone", text: "联系电话：(021)25653114" },
      ],
    },
  };
};

// 动画配置
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, ease: easeOut },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function SchoolIntroduction() {
  const [data, setData] = useState<any>(null);
  const location = useLocation();

  useEffect(() => {
    fetchSchoolIntroData().then(setData);
  }, []);

  if (!data) return null;

  const { banner, subNav, titleSection, content, footer } = data;

  return (
    <div className="flex flex-col min-h-[calc(100vh-120px)] bg-white">
      <div
        className="w-full h-64 sm:h-80 bg-cover bg-center relative"
        style={{ backgroundImage: `url('${banner.backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="hidden sm:block relative container mx-auto px-4 py-40 text-white">
          <h2 className=" text-3xl sm:text-4xl font-bold">
            {banner.title}
          </h2>
          <div className="flex items-center text-white/80 mt-2 text-sm">
            {banner.breadcrumbs.map((crumb: any, idx: number) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span className="mx-2">/</span>}
                {crumb.url ? (
                  <Link to={crumb.url} className="hover:text-white transition-colors">
                    {crumb.text}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.text}</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* 二级导航 */}
      <SubNav
        subNav={subNav}
        currentPath={location.pathname}
        mobileTitle={banner.title}
      />
      {/* 正文部分 */}
      <main className="flex-grow container mx-auto px-4 py-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {titleSection.mainTitle}
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-gray-500 text-sm">
              {titleSection.meta.map((meta: any, idx: number) => (
                <span key={idx}>
                  {meta.label}：{meta.value}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="prose prose-lg text-gray-700 leading-relaxed">
            {content.map((p: string, idx: number) => (
              <p key={idx}>{p}</p>
            ))}
          </motion.div>
        </motion.div>
      </main>

      <SubFooter contacts={footer.contacts} />
    </div>
  );
}
