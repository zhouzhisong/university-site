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

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);

  return (
    <section className="relative w-full overflow-hidden">
      {sliderImages.map((slide, index) => (
        <div
          key={index}
          className={`transition-opacity duration-1000 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 absolute inset-0"}`}
        >
          {/* 图片容器 */}
          <div className="w-full relative" style={{ paddingTop: "40%" /* 16:9 比例占位，移动端可调整 */ }}>
            <img
              src={slide.url}
              alt={slide.title}
              className="absolute top-0 left-0 w-full h-full object-fill sm:object-cover"
            />
          </div>

          {/* 遮罩 */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* 文本内容 */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6">
            <h2 className="text-white font-bold mb-3 sm:mb-4 text-[clamp(1.5rem,4vw,3.5rem)] leading-snug sm:leading-tight">
              {slide.title}
            </h2>
            {slide.subtitle && (
              <p className="text-white text-[clamp(0.9rem,2vw,1.5rem)] max-w-[90%] sm:max-w-2xl mb-6 sm:mb-8">
                {slide.subtitle}
              </p>
            )}
          </div>
        </div>
      ))}

      {/* 左右按钮 */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors"
      >
        <FaChevronLeft className="w-4 sm:w-5 h-4 sm:h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors"
      >
        <FaChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
      </button>

      {/* 指示器 */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-6 sm:w-8 h-2 sm:h-3"
                : "bg-white/50 w-2 sm:w-3 h-2 sm:h-3"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
