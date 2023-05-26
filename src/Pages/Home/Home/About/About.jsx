import cardImg from '../../../../assets/home/chef-service.jpg'

const About = () => {
    return (
        <div className=' my-10'>
            <div className="hero lg:h-96" style={{ backgroundImage: `url(${cardImg})` }}>
                <div className=" "></div>
                <div className="hero-content w-2/3 my-5 lg:w-3/4 text-center bg-white">
                    <div className="">
                        <h1 className=" lg:text-4xl font-serif font-thin">Bistro Boss</h1>
                        <p className=" text-xs lg:text-base">Bistro Boss is a charming restaurant that offers a delightful dining experience. With its elegant ambiance and delectable cuisine, it captures the essence of culinary excellence. From exquisite flavors to impeccable service, Bistro Boss is the ultimate destination for a memorable meal.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;