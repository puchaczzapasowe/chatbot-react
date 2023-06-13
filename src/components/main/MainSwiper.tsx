import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import image1 from '@/assets/mousemain0.jpg';
import image2 from '@/assets/mousemain1.jpg';
import image3 from '@/assets/mousemain3.jpg';
import image4 from '@/assets/mousemain4.jpg';
import image5 from '@/assets/mousemain5.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
interface MainSwiperSlideProps {
  image: ImportMeta;
  text: string;
}

const MainSwiperSlide = ({ image, text }: MainSwiperSlideProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={` relative aspect-video bg-cover text-4xl w-full md:w-1/2  flex-shrink-0 capitalize stroke-1 text-white rounded-xl shadow-lg `}>
      <span className='absolute bottom-0 left-0 w-full flex items-center px-4 bg-slate-600 bg-opacity-40 min-h-[30%] '>
        {text}
      </span>
    </div>
  );
};

import 'swiper/css';
const MainSwiper = () => {
  return (
    <div className='overflow-hidden w-full lg:w-4/5 m-auto   '>
      <div className='flex  flex-shrink-0 border-2 border-black '>
        <MainSwiperSlide image={image1} text='your mouse' />
        <MainSwiperSlide image={image2} text='your mouse' />
        <MainSwiperSlide image={image3} text='your mouse' />
        <MainSwiperSlide image={image4} text='your mouse' />
        <MainSwiperSlide image={image5} text='your mouse' />
      </div>
    </div>
  );
};

export default MainSwiper;
