import React, { useState } from "react";

interface CarouselProps {

  children: React.ReactNode;

}

const Carousel: React.FC<CarouselProps> = ({ children }) => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = React.Children.count(children);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    );
  };


  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };


  return (
    <div className="relative">
      <div style={{ transform: `translateX(-${currentSlide * 100}%)` }} className="flex transition-transform duration-300 ease-in-out">

        {React.Children.map(children, (child, index) => (
          <div key={index} className="w-full">
            {child}
          </div>
        ))}
      </div>

      <button onClick={handlePrevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-l-md">
        Prev
      </button>

      <button onClick={handleNextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-r-md">
        Next
      </button>

    </div>
  );
};
export default Carousel;