import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Admissions = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">招生专栏</h1>

          {/* 招生类型选项卡 */}
          <div className="mb-10 border-b border-gray-200">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
              <li className="mr-2">
                <a
                  href="#"
                  className="inline-block p-4 border-b-2 border-blue-600 text-blue-600 rounded-t-lg"
                >
                  本科招生
                </a>
              </li>
              <li className="mr-2">
                <a
                  href="#"
                  className="inline-block p-4 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 rounded-t-lg"
                >
                  研究生招生
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block p-4 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 rounded-t-lg"
                >
                  成人教育
                </a>
              </li>
            </ul>
          </div>

          {/* 本科招生信息 */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">2024年本科招生计划</h2>
            <p className="text-gray-700 mb-6">
              2024年我校本科计划招生5000人，涵盖80个本科专业，其中新增"人工智能"、"大数据管理与应用"、"新能源科学与工程"3个专业。
              招生范围覆盖全国31个省（自治区、直辖市），具体分省分专业计划以各省教育考试院公布为准。
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-3">报考须知</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>普通类考生需参加全国普通高等学校招生统一考试，达到所在省（区、市）划定的录取控制分数线</li>
              <li>艺术类考生需参加我校组织的专业校考或各省统考，成绩合格者方可报考</li>
              <li>综合素质评价优良，身心健康，符合国家规定的体检标准</li>
            </ul>

            <a
              href="#"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              查看完整招生章程
            </a>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Admissions;