import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css/bundle';

// Dynamically import TypeWriterEffect with no SSR to reduce initial bundle size
const TypeWriterEffect = dynamic(() => import('react-typewriter-effect'), { ssr: false });

// Define the type for the TypeWriterEffect props
interface TypeWriterEffectProps {
  textStyle?: React.CSSProperties;
  startDelay?: number;
  cursorColor?: string;
  text: string;
  typeSpeed?: number;
}

// Create a wrapper component with proper typing
const TypeWriterWrapper: React.FC<TypeWriterEffectProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <TypeWriterEffect {...props} />;
};

const slides = [
  {
    image: '/images/madagascar-rainforest.jpg',
    title: 'Discover Madagascar',
    text: 'Experience the unique biodiversity of Madagascar',
    alt: 'Lush Madagascar rainforest'
  },
  {
    image: '/images/madagascar-beach.jpg',
    title: 'Breathtaking Landscapes',
    text: 'From lush rainforests to pristine beaches',
    alt: 'Beautiful Madagascar beach'
  },
  {
    image: '/images/madagascar-culture.jpg',
    title: 'Rich Culture',
    text: 'Immerse yourself in Malagasy traditions',
    alt: 'Traditional Malagasy ceremony'
  }
];

const MadagascarSlider: React.FC = () => {
  return (
    <section aria-label="Madagascar highlights slider" className="relative w-full h-[600px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.alt}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <TypeWriterWrapper
                  textStyle={{ fontSize: '1.5rem' }}
                  startDelay={100}
                  cursorColor="white"
                  text={slide.text}
                  typeSpeed={70}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MadagascarSlider;