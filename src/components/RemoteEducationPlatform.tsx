interface Card {
  id: number; // 或 number
  icon: string;
  title: string;
  description: string;
}

interface RemoteEducationPlatformProps {
  cards: Card[];
}

const RemoteEducationPlatform: React.FC<RemoteEducationPlatformProps> = ({ cards }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">远程教育公共服务平台</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className="group border border-[#be3e5f] p-8 flex flex-col items-center justify-center text-center 
                      transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg
                      hover:bg-[#96c045] hover:border-transparent min-h-[380px]"
          >
            <img 
              src={card.icon}  
              className="w-20 h-20 mb-6 transition-all duration-300 
                        group-hover:filter group-hover:brightness-0 group-hover:invert" 
              alt={`${card.title}图标`}
            />
            
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-white transition-colors duration-300">
              {card.title}
            </h2>
            
            <p className="text-base text-gray-600 group-hover:text-white transition-colors duration-300 leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RemoteEducationPlatform;
