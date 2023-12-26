import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Banner = () => {
    const images = [
        {
            original: "https://img.freepik.com/premium-psd/hard-cover-book-mockup-scene_358694-4842.jpg",
            thumbnail: "https://img.freepik.com/premium-psd/hard-cover-book-mockup-scene_358694-4842.jpg",
        },
        {
            original: "https://img.freepik.com/free-psd/hard-cover-book-mockup-scene_358694-4813.jpg?t=st=1703597127~exp=1703597727~hmac=33af8cc9603598a8ac53bdff4e299eeb65fa09e264a3beb7f19da3b556213616",
            thumbnail: "https://img.freepik.com/free-psd/hard-cover-book-mockup-scene_358694-4813.jpg?t=st=1703597127~exp=1703597727~hmac=33af8cc9603598a8ac53bdff4e299eeb65fa09e264a3beb7f19da3b556213616",
        },
        {
            original: "https://img.freepik.com/free-psd/hard-cover-book-mockup-scene_358694-4809.jpg?w=996&t=st=1703613965~exp=1703614565~hmac=e7dc6a98b7535369698bdf1c8ee54f1e8883b06871989fb3ce755be17414176a",
            thumbnail: "https://img.freepik.com/free-psd/hard-cover-book-mockup-scene_358694-4809.jpg?w=996&t=st=1703613965~exp=1703614565~hmac=e7dc6a98b7535369698bdf1c8ee54f1e8883b06871989fb3ce755be17414176a",
        },
        {
            original: "https://img.freepik.com/free-psd/hard-cover-book-mockup-scene_358694-4817.jpg?w=996&t=st=1703614280~exp=1703614880~hmac=9eec54ffff74794722c364e95b08afbcb0084200846ccef935be5ef6bc2cb63a",
            thumbnail: "https://img.freepik.com/free-psd/hard-cover-book-mockup-scene_358694-4817.jpg?w=996&t=st=1703614280~exp=1703614880~hmac=9eec54ffff74794722c364e95b08afbcb0084200846ccef935be5ef6bc2cb63a",
        },
        {
            original: "https://img.freepik.com/free-psd/hard-cover-book-mockup-scene_358694-4835.jpg?t=st=1703597127~exp=1703597727~hmac=23514edf14b8c783fee0044e07f1159334ad5e62383709c210d9604ec1ee7ff9",
            thumbnail: "https://img.freepik.com/free-psd/hard-cover-book-mockup-scene_358694-4835.jpg?t=st=1703597127~exp=1703597727~hmac=23514edf14b8c783fee0044e07f1159334ad5e62383709c210d9604ec1ee7ff9",
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
                            // objectPosition: 'top'
                        }}
                    />
                </div>
            )}
        />
    );
};

export default Banner;