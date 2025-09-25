import { useState } from "react";
import logo2 from "/images/logo2.png";
interface CardData {
  id: string;
  title: string;
  bgColor: string;
  content?: string;
  buttonText?: string;
  imageUrl?: string;
  videoUrl?: string;
  span?: string;
}

const cards: CardData[] = [
  {
    id: "song",
    title: "校歌",
    bgColor: "bg-[#DDAAB9]/80",
    content: `学习让城市更美好
当生命需要激情的时候，学习是我们终身追求；
相约成功，打造自信，感动岁月情也深意也厚……
当生活拥抱辉煌的时候，学习是我们唯一理由；
把握今天，携手未来，改变世界天更长地更久……`,
    buttonText: "进入 →",
    span: "lg:row-span-2", // 占两行
  },
  {
    id: "badge",
    title: "校徽",
    bgColor: "bg-[#84DDB1]/80",
    imageUrl: logo2,
  },
  {
    id: "video",
    title: "贵开宣传片",
    bgColor: "bg-[#E9D797]/80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "motto",
    title: "校训",
    bgColor: "bg-[#E0AEA2]/80",
    content: `严谨治学，追求真理；立德树人，培育英才。
校训不仅是学校精神的体现，
也是激励师生不断前行的座右铭，鞭策着一代又一代人勇攀高峰。`,
    buttonText: "了解更多 →",
    span: "lg:col-span-2", // 横跨两列（放在 badge 和 video 下方）
  },
];

export default function CultureSection() {
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleVideoOpen = (url: string) => {
    setVideoUrl(url);
    setShowVideo(true);
  };

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-start"
      style={{
        backgroundImage: `
          linear-gradient(to bottom right, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0)), 
          url('/images/culture-bg.jpg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container max-w-8xl m-auto py-8">
        {/* 标题 */}
        <h2 className="text-2xl font-bold text-red-600 text-left mt-12 mb-8">
          文化贵开
        </h2>

        {/* 卡片区域 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(200px,auto)] gap-6 mb-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`
                ${card.bgColor} text-white p-6 shadow-md cursor-pointer 
                transition-all duration-300 hover:scale-105 hover:shadow-xl 
                flex flex-col ${card.span || ""}
              `}
              onClick={() => card.videoUrl && handleVideoOpen(card.videoUrl)}
            >
              <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>

              {card.imageUrl && (
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-32 h-32 object-contain mx-auto transition-transform duration-500 hover:rotate-12"
                />
              )}

              {card.videoUrl && (
                <div className="w-16 h-16 flex items-center justify-center border-4 border-white rounded-full transition-transform duration-300 hover:scale-110 mx-auto">
                  <span className="text-3xl">▶</span>
                </div>
              )}

              {card.content && (
                <p className="leading-relaxed text-base whitespace-pre-line">
                  {card.content}
                </p>
              )}

              {card.buttonText && (
                <button className="mt-4 px-3 py-1 border border-white rounded hover:bg-white hover:text-gray-700 transition-colors">
                  {card.buttonText}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* 视频弹窗 */}
        {showVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="relative w-full max-w-4xl bg-black rounded-md shadow-lg overflow-hidden">
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors z-10"
                aria-label="关闭视频"
              >
                ✕
              </button>
              <iframe
                className="w-full aspect-video"
                src={videoUrl}
                title="贵开宣传片"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
