import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Slider = () => {
    const data = useLoaderData();
    // console.log(data);

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className="max-w-7xl mx-auto lg:py-10 py-5 text-center" data-aos="fade-up">
            <h2 className="lg:text-5xl text-3xl font-bold md:py-8 py-5">BRAND NEW</h2>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    data?.map(item => <>
                        <SwiperSlide><img className='object-cover w-full h-full' src={item?.image} alt="Car" /></SwiperSlide>
                    </>)
                }
            </Swiper>
        </div >
    );
};

export default Slider;