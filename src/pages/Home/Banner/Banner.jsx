import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Banner = () => {
    const images = [
        {
            original: "https://img.freepik.com/free-photo/happy-boy-reading-book-close-apple_1098-2667.jpg?t=st=1700822872~exp=1700823472~hmac=ef3f1e68c16a172057d55839369f4ddb6aba85862ec2e439b8e2d403012e4990",
            thumbnail: "https://img.freepik.com/free-photo/happy-boy-reading-book-close-apple_1098-2667.jpg?t=st=1700822872~exp=1700823472~hmac=ef3f1e68c16a172057d55839369f4ddb6aba85862ec2e439b8e2d403012e4990",
        },
        {
            original: "https://img.freepik.com/free-photo/clever-schoolgirl-with-laptop-class_1098-2620.jpg",
            thumbnail: "https://img.freepik.com/free-photo/clever-schoolgirl-with-laptop-class_1098-2620.jpg",
        },
        {
            original: "https://img.freepik.com/free-photo/concentrated-young-geometry-teacher-wearing-glasses-standing-front-chalkboard-classroom-reading-book_141793-120219.jpg?w=1060&t=st=1700822311~exp=1700822911~hmac=f2105b430e96486ae1e91bce567bceb2f499c6207b7bef90e50094bc336fc897",
            thumbnail: "https://img.freepik.com/free-photo/concentrated-young-geometry-teacher-wearing-glasses-standing-front-chalkboard-classroom-reading-book_141793-120219.jpg?w=1060&t=st=1700822311~exp=1700822911~hmac=f2105b430e96486ae1e91bce567bceb2f499c6207b7bef90e50094bc336fc897",
        },
        {
            original: "https://img.freepik.com/premium-photo/young-asian-teacher-man-teaching-video-conference-with-student_208349-895.jpg?w=996",
            thumbnail: "https://img.freepik.com/premium-photo/young-asian-teacher-man-teaching-video-conference-with-student_208349-895.jpg?w=996",
        },
        {
            original: "https://img.freepik.com/premium-photo/young-asian-teacher-man-teaching-video-conference-with-student_208349-957.jpg",
            thumbnail: "https://img.freepik.com/premium-photo/young-asian-teacher-man-teaching-video-conference-with-student_208349-957.jpg",
        }
    ];

    return (
        <div>
            <ImageGallery items={images} />
        </div>
    );
};

export default Banner;