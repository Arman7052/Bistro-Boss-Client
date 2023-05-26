import moment from "moment/moment";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import featuredimg from "../../../../assets/home/featured.jpg"

const Featured = () => {
    return (
        <section className=" py-10 ">
            <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: `url(${featuredimg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-3xl ">
                        <SectionTitle
                            subheading={'Check it out'}
                            heading={'FROM OUR MENU'}
                            
                        ></SectionTitle>

                        <div className=" lg:flex  gap-4 justify-evenly space-x-7 my-2">
                            <div><img src={featuredimg} alt="" /></div>
                            <div>
                                <h4 className=" font-mono text-start text-xl text-white">{moment().format("MMM DD YYYY")}</h4>

                                <p className="m-5 text-start text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-ghost">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;