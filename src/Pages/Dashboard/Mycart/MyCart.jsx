import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from 'react-icons/fa'


const MyCart = () => {
    const [cart] = useCart();
    console.log(cart);
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    return (
        <>
            <Helmet>
                <title> Bistro Boss | My Cart</title>

            </Helmet>

            <SectionTitle
                subheading={'My Cart'}
                heading={'WANNA ADD MORE?'}
            ></SectionTitle>
            <div className=" text-semibold text-black flex flex-row space-x-7 py-5">
                <h1> Total items : {cart.length}</h1>
                <h1> Total Price : $ {total}</h1>
                <button className=" btn btn-sm bg-[#D1A054] text-white text-end">Pay</button>
            </div>
            <div className="overflow-x-auto ">
                <table className=" table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {cart.map((row, index) => <tr
                        key={row._id}
                        >
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={row.image} alt={row.image} />
                                        </div>
                                    </div>
                                    
                                </div>
                            </td>
                            <td>
                                {row.name}
                            </td>
                            <td className=" text-end">{row.price}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs text-red-700"> <FaTrashAlt></FaTrashAlt> </button>
                            </th>
                        </tr> )}
                        

                    </tbody>
                </table>
            </div>


        </>
    );
};

export default MyCart;