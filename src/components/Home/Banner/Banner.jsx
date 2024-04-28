import { EffectFlip, Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/effect-flip';
import 'swiper/swiper-bundle.css';
import { useTypewriter } from 'react-simple-typewriter';
import Rectangle from '../../../utility/Lootie.json'
import Lottie from "lottie-react";
import './Banner.css'

const Banner = () => {
    const [text] = useTypewriter({
        words: ['Hello', 'Welcome to RTourist'],
        loop: 1
    })

    const content = <>
        <div className=" md:mt-20 text-3xl font-bold gap-0 inline-block">
            <div className=' w-16 h-16'>
                <Lottie animationData={Rectangle} />
            </div>
            <div>
                {text}
            </div>
        </div>
        <p className=" py-4">Whether you are interested in traveling to a new city, going on a cruise, <br /> or cooking a new dish — we are committed to inspiring you to <br /> experience travel in a whole new way. </p>
    </>
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            effect={'flip'}
            grabCursor={true}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            modules={[EffectFlip, Pagination, Navigation, Scrollbar, A11y]}
        >
            <SwiperSlide id="ban1" className=" w-full text-white text-center ">
                {content}
            </SwiperSlide>
            <SwiperSlide id="ban2" className=" w-full text-white text-center ">
                {content}
            </SwiperSlide>
            <SwiperSlide id="ban3" className=" w-full text-white text-center ">
                {content}
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;