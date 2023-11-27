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
            original: "https://img.freepik.com/free-photo/businesspeople-celebrating-success_1098-1996.jpg",
            thumbnail: "https://img.freepik.com/free-photo/businesspeople-celebrating-success_1098-1996.jpg",
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
        <ImageGallery
            items={images}
            renderItem={(item) => (
                <div>
                    <img
                        src={item.original}
                        alt={item.originalAlt}
                        style={{
                            width: '100%',
                            height: '91vh',
                            objectFit: 'cover',
                            objectPosition: 'top'
                        }}
                    />
                </div>
            )}
        />
    );
};

export default Banner;