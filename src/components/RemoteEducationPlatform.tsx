import React from "react";

interface Card {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface RemoteEducationPlatformProps {
  cards: Card[];
}

const RemoteEducationPlatform: React.FC<RemoteEducationPlatformProps> = ({ cards }) => {
  return (
    <section className="bg-white py-10 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <h2
          className="
            text-[2rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] 
            font-semibold text-center mb-10 text-[#3c3c3c] tracking-[2px] 
            leading-snug
          "
        >
          远程教育公共服务平台
        </h2>

        {/* 卡片区域 */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
            gap-5 sm:gap-6 md:gap-8 lg:gap-10
          "
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="
                group border border-[#be3e5f] bg-white py-6 px-4 sm:px-5 
                flex flex-col items-center justify-center text-center 
                transition-all duration-300 hover:-translate-y-1 hover:shadow-lg 
                hover:bg-[#96c045] hover:border-transparent 
                min-h-[200px] sm:min-h-[210px] md:min-h-[220px] lg:min-h-[240px]
              "
            >
              {/* 图标 */}
              <img
                src={card.icon}
                alt={`${card.title}图标`}
                className="
                  w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 
                  mb-5 sm:mb-6 
                  transition-all duration-300 
                  group-hover:filter group-hover:brightness-0 group-hover:invert
                "
              />

              {/* 标题 */}
              <h4
                className="
                  text-[1.25rem] sm:text-[1.35rem] md:text-[1.45rem] lg:text-[1.575rem] 
                  font-bold mb-2 text-[#1e325d] 
                  group-hover:text-white transition-colors duration-300
                "
              >
                {card.title}
              </h4>

              {/* 描述 */}
              <p
                className="
                  text-[0.75rem] sm:text-[0.8rem] md:text-[0.875rem] lg:text-[0.9rem]
                  text-[#1e325d] group-hover:text-white 
                  transition-colors duration-300 leading-relaxed 
                  max-w-[90%]
                "
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RemoteEducationPlatform;
