import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";




const Category = () => {
    return (
        <section className=" py-10 ">
            <SectionTitle
            subheading= {"From 10 am to 12 pm"}
            heading= {"Online Order"}
            >

            </SectionTitle>


            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper text-center "
            >
                <SwiperSlide><img src={slide1} className=" rounded-md" alt="" />
                 <h2 className=" lg:text-4xl pb-2 uppercase -mt-12 font-serif shadow-2xl text-white">Salad</h2> </SwiperSlide>
                <SwiperSlide><img src={slide2} className=" rounded-md" alt="" />
                 <h2 className=" lg:text-4xl pb-2 uppercase -mt-12 font-serif shadow-2xl text-white">pizza</h2> </SwiperSlide>
                <SwiperSlide><img src={slide3} className=" rounded-md" alt="" />
                 <h2 className=" lg:text-4xl pb-2 uppercase -mt-12 font-serif shadow-2xl text-white">soups</h2> </SwiperSlide>
                <SwiperSlide><img src={slide4} className=" rounded-md" alt="" />
                 <h2 className=" lg:text-4xl pb-2 uppercase -mt-12 font-serif shadow-2xl text-white">Desserts</h2> </SwiperSlide>
                <SwiperSlide><img src={slide5} className=" rounded-md" alt="" />
                 <h2 className=" lg:text-4xl pb-2 uppercase -mt-12 font-serif shadow-2xl text-white">Salad</h2> </SwiperSlide>
                
            </Swiper>
        </section>
    );
};

export default Category;