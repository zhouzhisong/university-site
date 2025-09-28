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
    bgColor: "bg-[#DDAAB9]/90",
    content: `学习让城市更美好
当生命需要激情的时候，学习是我们终身追求；
相约成功，打造自信，感动岁月情也深意也厚……
当生活拥抱辉煌的时候，学习是我们唯一理由；
把握今天，携手未来，改变世界天更长地更久……`,
    buttonText: "进入 →",
  },
  {
    id: "badge",
    title: "校徽",
    bgColor: "bg-[#84DDB1]/90",
    imageUrl: logo2,
  },
  {
    id: "motto",
    title: "校训",
    bgColor: "bg-[#E0AEA2]/90",
    content: `严谨治学，追求真理；立德树人，培育英才。
校训不仅是学校精神的体现，
也是激励师生不断前行的座右铭，鞭策着一代又一代人勇攀高峰。`,
    buttonText: "了解更多 →",
  },
  {
    id: "video",
    title: "贵开宣传片",
    bgColor: "bg-[#E9D797]/90",
    videoUrl:
      "http://www.gytvou.cn/uploadfile/media/326/899/2023/04/11/a_1681208059_36859447.mp4",
  },
];

export default function CultureSection() {
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
      <div className="container max-w-8xl mx-auto py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] font-semibold text-red-600 text-left mt-8 mb-8 sm:mb-10 tracking-wide">
          文化贵开
        </h2>

        {/* 第一排：校歌、校徽、校训 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-10 mb-8">
          {cards
            .filter((card) => card.id !== "video")
            .map((card) => {
              const isCenterContent = card.id === "badge";
              return (
                <div
                  key={card.id}
                  className={`
                    ${card.bgColor} text-white p-5 sm:p-6 md:p-8 
                    shadow-md cursor-pointer 
                    transition-all duration-300 hover:scale-[1.03] hover:shadow-xl 
                    flex flex-col relative
                  `}
                >
                  <h3 className="text-[1.25rem] sm:text-[1.4rem] md:text-[1.5rem] lg:text-[1.75rem] font-semibold mb-4">
                    {card.title}
                  </h3>

                  {isCenterContent && card.imageUrl && (
                    <div className="flex-1 flex justify-center items-center">
                      <img
                        src={card.imageUrl}
                        alt={card.title}
                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain transition-transform duration-500 hover:rotate-6"
                      />
                    </div>
                  )}

                  {!isCenterContent && (
                    <>
                      {card.content && (
                        <p className="leading-relaxed text-[0.85rem] sm:text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] whitespace-pre-line mt-2 sm:mt-3 md:mt-4">
                          {card.content}
                        </p>
                      )}
                      {card.buttonText && (
                        <button className="mt-3 sm:mt-4 px-3 py-1.5 sm:px-4 sm:py-2 border border-white rounded hover:bg-white hover:text-gray-700 transition-colors text-[0.85rem] sm:text-[0.9rem]">
                          {card.buttonText}
                        </button>
                      )}
                    </>
                  )}
                </div>
              );
            })}
        </div>

        {/* 第二排：贵开宣传片 - 默认显示第一帧 */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:gap-8 lg:gap-10">
          {cards
            .filter((card) => card.id === "video")
            .map((card) => (
              <div
                key={card.id}
                className={`
                  ${card.bgColor} text-white p-5 sm:p-6 md:p-8 
                  shadow-md 
                  transition-all duration-300 hover:scale-[1.03] hover:shadow-xl 
                  flex flex-col relative
                `}
              >
                <h3 className="text-[1.25rem] sm:text-[1.4rem] md:text-[1.5rem] lg:text-[1.75rem] font-semibold mb-4">
                  {card.title}
                </h3>
                
                {/* 视频容器：默认显示第一帧 */}
                <div className="flex-1 w-full relative">
                  <div className="aspect-video w-full relative">
                    {card.videoUrl && (
                      <video
                        src={card.videoUrl}
                        controls
                        playsInline
                        preload="metadata"  // 仅加载元数据（包含第一帧）
                        controlsList="nodownload noremoteplayback nofullscreen"
                        className="absolute inset-0 w-full h-full object-contain"
                        // 移除poster属性或留空，让浏览器自动显示第一帧
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
