import { useEffect, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

interface Slide {
  url: string;
  title: string;
  subtitle?: string;
}

interface CarouselProps {
  sliderImages: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ sliderImages }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 自动播放
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  // 手动切换
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);

  return (
    <section className="relative h-[600px] overflow-hidden">
      {sliderImages.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.url}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4 leading-tight">
              {slide.title}
            </h2>
            <p className="text-[clamp(1rem,2vw,1.5rem)] max-w-3xl mb-8">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* 控制按钮 */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
        aria-label="上一张"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
        aria-label="下一张"
      >
        <FaChevronRight size={24} />
      </button>

      {/* 指示器 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`切换到第${index + 1}张幻灯片`}
          />
        ))}
      </div>
    </section>
  );
};


export default Carousel;
