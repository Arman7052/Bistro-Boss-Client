import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
   
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-restaurant-resources/main/reviews.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setReviews(data)
            })
    }, [])
    return (
        <section className=" py-16 lg:m-5 lg:p-5">
            <SectionTitle
                subheading={'What Our Client Say'}
                heading={'Testimonials'}
            >

            </SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-10">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className=" mx-20 flex flex-col items-center gap-4">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p>{review.details}</p>
                            <h3 className="text-yellow-500 font-bold font-serif italic my-4">{review.name}</h3>

                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;