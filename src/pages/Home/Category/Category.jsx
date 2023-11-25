import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./style.css"
import SectionTitle from "../../../components/SectionTitle/SectionTitle"

const Category = () => {

    const carousel = (slider) => {
        const z = 300
        function rotate() {
            const deg = 360 * slider.track.details.progress
            slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
        }
        slider.on("created", () => {
            const deg = 360 / slider.slides.length
            slider.slides.forEach((element, idx) => {
                element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
            })
            rotate()
        })
        slider.on("detailsChanged", rotate)
    }

    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            selector: ".carousel__cell",
            renderMode: "custom",
            mode: "free-snap",
        },
        [carousel]
    )

    return (<>
        <SectionTitle
            heading={'Our Awesome Services'}
            subHeading={'Trusted by over 45,000 companies and millions of learners around the world'}
        ></SectionTitle>
        <div className="wrapper my-5 block">
            <div className="scene">
                <div className="carousel keen-slider" ref={sliderRef}>
                    <div className="carousel__cell number-slide1 px-8">
                        <div className="text-center space-y-3">
                            <div className="avatar">
                                <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://img.freepik.com/premium-photo/successful-positive-bearded-man-looking-camera-with-toothy-smile-indoor-studio-shot-isolated-blue-background_533057-1741.jpg" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-semibold text-[#141414]">Full Stack Web Development Bootcamp</h3>
                            <h3 className="text-2xl font-semibold text-[#413232]">Enrollment: 5000+</h3>
                            <div className="rating rating-lg">
                                <input type="radio" name="rating-9" className="rating-hidden" />
                                <input type="radio" name="rating-9" className="mask bg-[#eff147] mask-star-2" />
                                <input type="radio" name="rating-9" className="mask bg-[#eff147] mask-star-2" />
                                <input type="radio" name="rating-9" className="mask bg-[#eff147] mask-star-2" />
                                <input type="radio" name="rating-9" className="mask bg-[#eff147] mask-star-2" />
                                <input type="radio" name="rating-9" className="mask bg-[#eff147] mask-star-2" />
                            </div>
                            <p className="font-normal">Become a proficient full-stack web developer by mastering both front-end and back-end technologies.</p>
                        </div>
                    </div>
                    <div className="carousel__cell number-slide1 px-8">
                        <div className="text-center space-y-3">
                            <div className="avatar">
                                <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://img.freepik.com/free-photo/middle-aged-cheerful-dark-skinned-male-with-shining-smile_273609-28538.jpg?w=996&t=st=1700846698~exp=1700847298~hmac=c8ce90668cd58bed5c44b22f3dd7beca14c6a2bb5e49902121e7af667c4a6946" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-semibold text-[#141414]">Data Science and Machine Learning Masterclass</h3>
                            <h3 className="text-2xl font-semibold text-[#413232]">Enrollment: 4000+</h3>
                            <div className="rating rating-lg">
                                <input type="radio" name="rating-9" className="rating-hidden" />
                                <input type="radio" name="rating-9" className="mask bg-[#eff147] mask-star-2" />
                                <input type="radio" name="rating-9" className="mask bg-[#eff147] mask-star-2" />
                                <input type="radio" name="rating-9" className="mask bg-[#eff147] mask-star-2" />
                                <input type="radio" name="rating-9" className="mask bg-[#eff147] mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                            </div>
                            <p className="font-normal">Dive into the fascinating realms of data science and machine learning.</p>
                        </div>
                    </div>
                    <div className="carousel__cell number-slide1 px-8">
                        <div className="text-center space-y-3">
                            <div className="avatar">
                                <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://img.freepik.com/premium-photo/close-up-portrait-satisfied_1258-14014.jpg" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-semibold text-[#141414]"> Digital Marketing Strategies</h3>
                            <h3 className="text-2xl font-semibold text-[#413232]">Enrollment: 4500+</h3>
                            <div className="rating rating-lg">
                                <input type="radio" name="rating-9" className="rating-hidden" />
                                <input type="radio" name="rating-9" className="mask bg-[#eff147] mask-star-2" />
                                <input type="radio" name="rating-9" className="mask bg-[#eff147] mask-star-2" />
                                <input type="radio" name="rating-9" className="mask bg-[#eff147] mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                            </div>
                            <p className="font-normal">Unlock the secrets of effective digital marketing strategies.</p>
                        </div>
                    </div>
                    <div className="carousel__cell number-slide1 px-8">
                        <div className="text-center space-y-3">
                            <div className="avatar">
                                <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=996" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-semibold text-[#141414]">Mindfulness Meditation for Stress Reduction</h3>
                            <h3 className="text-2xl font-semibold text-[#413232]">Enrollment: 6000+</h3>
                            <div className="rating rating-lg">
                                <input type="radio" name="rating-9" className="rating-hidden" />
                                <input type="radio" name="rating-9" className="mask bg-[#eff147] mask-star-2" />
                                <input type="radio" name="rating-9" className="mask bg-[#eff147] mask-star-2" />
                                <input type="radio" name="rating-9" className="mask bg-[#eff147] mask-star-2" />
                                <input type="radio" name="rating-9" className="mask bg-[#eff147] mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                            </div>
                            <p className="font-normal">Take a journey towards tranquility and well-being with mindfulness meditation.</p>
                        </div>
                    </div>
                    <div className="carousel__cell number-slide1 px-8">
                        <div className="text-center space-y-3">
                            <div className="avatar">
                                <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=740&t=st=1700838882~exp=1700839482~hmac=afd862722c78d9470de37d8da95848143f8c99269c9eade2db407c0f308e107d" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-semibold text-[#141414]">Photography: Capturing Moments with Impact</h3>
                            <h3 className="text-2xl font-semibold text-[#413232]">Enrollment: 7000+</h3>
                            <div className="rating rating-lg">
                                <input type="radio" name="rating-9" className="rating-hidden" />
                                <input type="radio" name="rating-9" className="mask bg-[#eff147] mask-star-2" />
                                <input type="radio" name="rating-9" className="mask bg-[#eff147] mask-star-2" />
                                <input type="radio" name="rating-9" className="mask bg-[#eff147] mask-star-2" />
                                <input type="radio" name="rating-9" className="mask bg-[#eff147] mask-star-2" />
                                <input type="radio" name="rating-9" className="mask bg-[#eff147] mask-star-2" />
                            </div>
                            <p className="font-normal">Elevate your photography skills and learn to capture moments with lasting impact.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )

}
export default Category;
