import { useEffect, useState } from "react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";


const ChefRecommends = () => {
    const [offered, setOffered] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const offeredItems = data.filter(item => item.category === 'offered');

                setOffered(offeredItems);
            })
    }, [])

    const buttonColors = ['yellow-600', 'blue-500'];

    return (
        <section className=" my-10">
            <SectionTitle
                subheading={'Should Try'}
                heading={'CHEF RECOMMENDS'}
            ></SectionTitle>

            <div className="grid grid-col-1 lg:grid-cols-4 my-10 gap-4">
                {
                    offered.map(offer => <div
                        key={offer._id}

                    >

                        <div className="card w-auto h-96 rounded-none bg-transparent shadow-xl">
                            <figure><img className="w-full h-full" src={offer.image} alt="Shoes" /></figure>
                            <div className="card-body ">
                                <h2 className="card-title">{offer.name}</h2>
                                <p>{offer.recipe.length > 50 ? offer.recipe.substring(0, 40) + '...' : offer.recipe}</p>

                                <div className="card-actions">
                                    <button className="btn btn-ghost uppercase text-yellow-600">add to cart</button>
                                </div>
                            </div>
                        </div>


                    </div>)
                }
            </div>
        </section>
    );
};

export default ChefRecommends;