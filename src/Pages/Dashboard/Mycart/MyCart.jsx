import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from 'react-icons/fa'
import Swal from "sweetalert2";


const MyCart = () => {
    const [cart, refetch] = useCart();
    console.log(cart);
    const total = cart.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

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
                <button className=" btn btn-xs bg-[#D1A054] text-white text-end">Pay</button>
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
                        {cart.map((item, index) => <tr
                            key={item._id}
                        >
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt={item.image} />
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td className=" text-end">{item.price}</td>
                            <th>
                                <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-xs text-red-700"> <FaTrashAlt></FaTrashAlt> </button>
                            </th>
                        </tr>)}


                    </tbody>
                </table>
            </div>


        </>
    );
};

export default MyCart;