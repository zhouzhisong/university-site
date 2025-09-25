import{ useState, useRef, useEffect } from "react";
import { motion, useAnimation, } from "framer-motion";

interface NewsItem {
  id: string | number;
  title: string;
  content: string;
  date: string;
  image: string;
}

interface NewsData {
  "新闻时讯": NewsItem[];
  "社区教育": NewsItem[];
  "家庭教育": NewsItem[];
  "老年教育": NewsItem[];
}

interface NewsComponentProps {
  newsData: NewsData;
}

const NewsComponent:React.FC<NewsComponentProps> = ({newsData}) => {
const [activeTab, setActiveTab] = useState<keyof NewsData>("社区教育");
  const tabs = ["社区教育", "家庭教育", "老年教育"];
  
  // 动画控制
  const containerRef = useRef(null);
  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  // 检测组件是否进入视口
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // 触发动画
          leftControls.start("visible");
          rightControls.start("visible");
        }
      },
      { threshold: 0.1 } // 当组件10%进入视口时触发
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [leftControls, rightControls, isVisible]);

  // 左侧模块动画变体
  const leftVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" as const } }
  };

  // 右侧模块动画变体
  const rightVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" as const } }
  };

  return (
    <div 
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto px-4 py-8 "
    >
      {/* 左侧：新闻时讯（从左侧滑入） */}
      <motion.div
        variants={leftVariants}
        initial="hidden"
        animate={leftControls}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-red-600">新闻时讯</h2>
          <button className="bg-[#96c045] text-white px-4 py-1 rounded">更多</button>
        </div>
        {newsData["新闻时讯"].map((item, index) => {
          if (index === 0) {
            return (
              <div key={item.id} className="bg-gray-50 p-4 rounded mb-4 shadow-sm">
                <div className="flex flex-col md:flex-row gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full md:w-1/3 h-auto object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{item.content}</p>
                    <span className="text-[#96c045] text-sm flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div key={item.id} className="pb-3 mb-3 border-b border-gray-100">
                <p className="text-[#96c045] text-sm mb-1">{item.date}</p>
                <h3 className="text-gray-800 hover:text-red-600 transition-colors">
                  {item.title}
                </h3>
              </div>
            );
          }
        })}
      </motion.div>

      {/* 右侧：教育分类（从右侧滑入） */}
      <motion.div
        variants={rightVariants}
        initial="hidden"
        animate={rightControls}
      >
        <div className="flex flex-wrap items-center mb-4">
          {tabs.map((tab:any) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xl font-semibold mr-6 pb-2 border-b-2 ${
                activeTab === tab
                  ? "text-red-600 border-red-600"
                  : "text-gray-500 border-transparent hover:border-gray-300 transition-colors"
              }`}
            >
              {tab}
            </button>
          ))}
          <button className="ml-auto bg-[#96c045] text-white px-4 py-1 rounded">
            更多
          </button>
        </div>

        {newsData[activeTab].map((item, index) => {
          if (index === 0) {
            return (
              <div key={item.id} className="bg-gray-50 p-4 rounded mb-4 shadow-sm">
                <div className="flex flex-col md:flex-row gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full md:w-1/3 h-auto object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{item.content}</p>
                    <span className="text-[#96c045] text-sm flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div key={item.id} className="pb-3 mb-3 border-b border-gray-100">
                <p className="text-[#96c045] text-sm mb-1">{item.date}</p>
                <h3 className="text-gray-800 hover:text-red-600 transition-colors">
                  {item.title}
                </h3>
              </div>
            );
          }
        })}
      </motion.div>
    </div>
  );
};

export default NewsComponent;
