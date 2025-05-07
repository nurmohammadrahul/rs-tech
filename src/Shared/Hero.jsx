import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import slider1 from '../assets/rs-tech-asset/slider-1.jpg';
import slider2 from '../assets/rs-tech-asset/slider-2.jpg';
import slider3 from '../assets/rs-tech-asset/slider-3.jpg';

const Hero = () => {
    return (
        <Swiper
            spaceBetween={30}
            effect="fade"
            navigation={true}
            pagination={{ clickable: true }}
            loop={true}
            modules={[EffectFade, Navigation, Pagination]}
            className="min-h-screen w-full"
        >
            <SwiperSlide>
                <img
                    src={slider1}
                    alt="Slider 1"
                    className="w-full h-screen object-cover"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src={slider2}
                    alt="Slider 2"
                    className="w-full h-screen object-cover"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src={slider3}
                    alt="Slider 3"
                    className="w-full h-screen object-cover"
                />
            </SwiperSlide>
        </Swiper>
    );
};

export default Hero;
