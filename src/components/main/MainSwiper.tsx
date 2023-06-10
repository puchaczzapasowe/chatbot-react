import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import image1 from '@/assets/mousemain0.jpg';
import image2 from '@/assets/mousemain1.jpg';
import image3 from '@/assets/mousemain3.jpg';
import image4 from '@/assets/mousemain4.jpg';
import image5 from '@/assets/mousemain5.jpg';
interface MainSwiperSlideProps {
  image: ImportMeta;
  text: string;
}

const MainSwiperSlide = ({ image, text }: MainSwiperSlideProps) => {
  return (
    <SwiperSlide>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={`relative w-full aspect-video bg-cover text-4xl max-w-[600px] capitalize stroke-1 text-white rounded-xl shadow-lg `}>
        <span className='absolute bottom-0 left-0 w-full flex items-center px-4 bg-slate-600 bg-opacity-40 min-h-[30%] '>
          {text}
        </span>
      </div>
    </SwiperSlide>
  );
};

import 'swiper/css';
const MainSwiper = () => {
  return (
    <Swiper
      className='bg-slate-600 border-slate-900 flex flex-nowrap s  '
      loop
      navigation
      slidesPerView={'auto'}
      modules={[Navigation, Pagination, Scrollbar]}
      pagination={{ clickable: true }}>
      <MainSwiperSlide image={image1} text='your mouse' />
      <MainSwiperSlide image={image2} text='your mouse' />
      <MainSwiperSlide image={image3} text='your mouse' />
      <MainSwiperSlide image={image4} text='your mouse' />
      <MainSwiperSlide image={image5} text='your mouse' />
    </Swiper>
  );
};

export default MainSwiper;
