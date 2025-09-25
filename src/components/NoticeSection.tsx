import { FaArrowRight } from "react-icons/fa";

interface Notice {
  id: number;
  date: string;
  title: string;
  content: string;
}

interface NoticeItemProps extends Notice {}

const NoticeItem: React.FC<NoticeItemProps> = ({ date, title, content }) => (
  <div className="flex items-start p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
    <span className="text-[#7A9C4D] text-sm mr-4 mt-0.5">{date}</span>
    <div className="flex-1">
      <h3 className="font-medium text-[#333] font-sans">{title}</h3>
      <p className="text-sm text-[#666666] line-clamp-1">{content}</p>
    </div>
    <FaArrowRight className="text-gray-400 mt-1" />
  </div>
);

interface NoticeSectionProps {
  notices: Notice[];
}

const NoticeSection: React.FC<NoticeSectionProps> = ({ notices }) => {
  return (
    <div 
      className="relative py-8 rounded overflow-hidden" 
      style={{
        backgroundAttachment: "fixed",
        backgroundImage: "url('/images/notice-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
        backgroundColor: "rgba(0,0,0,0.3)",
      }}
    >
      <h2 className="text-center text-3xl font-bold text-white p-16 pt-2">通知公告</h2>

      <button className="absolute top-[20%] right-[10%] bg-[#96c045] text-white px-3 py-1 rounded text-sm">
        更多
      </button>

      <div className="bg-white shadow-md rounded overflow-hidden relative z-10 my-8 container mx-auto px-4 py-8">
        {notices.map((item) => (
          <NoticeItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default NoticeSection;
