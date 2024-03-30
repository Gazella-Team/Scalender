import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CaseEffect = ({ images }:{images:any}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='flex items-center justify-end' style={{ width: '100%', height: '100%' }}>
      {images.map((image:any, index:number) => (
        <motion.img
          key={index}
          src={image}
          className='rounded-xl'
          alt={`Slide ${index}`}
          style={{
            position: 'absolute',
            width: '500px',
            height: '400px',
            objectFit: 'cover',
            opacity: index === currentImageIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
          animate={{ scale: index === currentImageIndex ? 1.09 : 1 }}
          transition={{ duration: 0.3}}
        />
      ))}
    </div>
  );
};

export default CaseEffect;
