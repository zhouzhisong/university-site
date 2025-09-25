import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Intro = () => {
  // 页面进入动画
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      <main className="pt-24 pb-16">
        <motion.div
          initial="initial"
          animate="animate"
          variants={pageVariants}
          className="container mx-auto px-6"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">学校概况</h1>

          {/* 学校简介 */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">学校简介</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  贵阳开放大学创办于1958年，前身为贵阳广播电视大学，2022年正式更名为贵阳开放大学。
                  学校是贵州省属公办普通高等学校，以培养适应区域经济社会发展需要的高素质应用技术人才为目标，
                  形成了以工学为主，理、管、文、艺、教等多学科协调发展的学科体系。
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  学校现有全日制在校学生35000余人，教职工2500余人，其中高级职称教师800余人，
                  拥有国家级教学团队2个、省级教学团队8个，国家级精品课程5门，省级精品课程20门。
                </p>
              </div>
              <div>
                <img
                  src="https://picsum.photos/id/1043/600/400"
                  alt="学校校门"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>

          {/* 办学特色 */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">办学特色</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "产教融合",
                  desc: "与100+企业建立合作，共建实训基地50余个，实现教学与产业无缝对接",
                  icon: "🏭",
                },
                {
                  title: "校企合作",
                  desc: "联合企业开发课程30余门，聘请企业导师100余人，定向培养专业人才",
                  icon: "🤝",
                },
                {
                  title: "国际视野",
                  desc: "与50+国外高校建立合作关系，每年选派1000余名学生赴海外交流学习",
                  icon: "🌍",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-6 rounded-lg border border-blue-100 hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-blue-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Intro;