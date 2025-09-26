import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";

interface Notice {
  id: number;
  date: string;
  title: string;
  content: string;
}

interface NoticeItemProps {
  day: string;
  monthYear: string;
  title: string;
  content: string;
  index: number;
  isVisible: boolean;
}

const NoticeItem: React.FC<NoticeItemProps> = ({
  day,
  monthYear,
  title,
  content,
  index,
  isVisible,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      // 当元素可见时播放动画
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: index * 0.15, ease: "easeOut" },
      });
    } else {
      // 当元素离开视口时重置为初始状态
      controls.start({ opacity: 0, y: 40 });
    }
  }, [isVisible, controls, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      className="flex items-start p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors"
    >
      <div className="text-center m-4">
        <span className="block text-[#7A9C4D] text-3xl font-bold">{day}</span>
        <span className="block text-sm text-gray-500">{monthYear}</span>
      </div>
      <div className="flex-1 m-4">
        <h3 className="font-medium text-[#333] font-sans text-lg mb-4">{title}</h3>
        <p className="text-sm text-gray-500 line-clamp-1">{content}</p>
      </div>
      <FaArrowRight className="text-gray-400 mt-2" />
    </motion.div>
  );
};

interface NoticeSectionProps {
  notices: Notice[];
}

const NoticeSection: React.FC<NoticeSectionProps> = ({ notices }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer 监听可见性
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // 进入视口时播放动画
        } else {
          setIsVisible(false); // 离开视口时重置
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="relative py-6"
      style={{
        backgroundImage: "url('/images/notice-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
      ref={ref}
    >
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <div className="relative mb-6">
          <h2 className="text-center text-2xl font-bold text-white">通知公告</h2>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#96c045] text-white px-4 py-1 rounded text-sm">
            更多+
          </button>
        </div>

        {/* 列表 */}
        <div className="bg-white shadow-md rounded overflow-hidden p-4">
          {notices.map((item, index) => {
            const [year, month, day] = item.date.split("-");
            const monthYear = `${year}-${month}`;
            return (
              <NoticeItem
                key={item.id}
                day={day}
                monthYear={monthYear}
                title={item.title}
                content={item.content}
                index={index}
                isVisible={isVisible}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NoticeSection;
