import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { SlBadge } from 'react-icons/sl';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Slider = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // Fetch reviews from 'reviews.json' and set them in state
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <div className='my-20 text-slate-800 bg-slate-300 pb-10'>
            {/* SectionTitle component with heading and subHeading props */}
            <SectionTitle
                heading={"Reviews"}
                subHeading={"At a Glance"}
            ></SectionTitle>

            {/* Swiper component with various settings and styles */}
            <Swiper
                style={{
                    '--swiper-navigation-color': '#475',
                    '--swiper-pagination-color': '#578',
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                {/* SwiperSlides containing review data */}
                {reviews?.map(review => (
                    <SwiperSlide key={review?._id}>
                        <div className="md:mx-24 md:mb-24 mx-12 mb-12 text-center">
                            {/* Title with SlBadge icon */}
                            <div className="title flex justify-center mb-4" data-swiper-parallax="-300">
                                <SlBadge className='text-7xl font-bold text-indigo-400' />
                            </div>
                            {/* Subtitle with review name */}
                            <div className="subtitle" data-swiper-parallax="-200">
                                <h2 className='font-bold text-2xl pb-5'>{review?.name}</h2>
                            </div>
                            {/* Text with review details */}
                            <div className="text" data-swiper-parallax="-100">
                                <p>
                                    {review?.details}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
