import React, { useState, useEffect } from 'react';

type ImageSliderProps = {
  images: string[];
};

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex overflow-hidden w-[40%] mx-auto h-96">
      {images.map((image, index) => (
        <div
          key={index}
          className={`flex-shrink-0 w-1/2 h-full bg-cover bg-no-repeat`}
          style={{
            backgroundImage: `url(${image})`,
            transform: `translateX(${(index - currentIndex) * 100}%)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        ></div>
      ))}
    </div>
  );
};

export default ImageSlider;
