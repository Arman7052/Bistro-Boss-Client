import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaShoppingCart, FaWallet, FaShoppingBag } from 'react-icons/fa';
import { LuCalendarCheck2 } from 'react-icons/lu';
import { MdRateReview } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { SlEnvolope } from 'react-icons/Sl';


const DashBoard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side lg:bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-3 w-auto lg:w-80 text-black font-serif italic uppercase">
                    {/* <!-- Sidebar content here --> */}

                    <li className="hover:text-indigo-500 ">
                        <NavLink className='bg-transparent' to='/dashboard/userhome'><FaHome></FaHome>User Home</NavLink>
                    </li>

                    <li className="hover:text-indigo-500 ">
                        <NavLink className='bg-transparent' to='/dashboard/reservation' ><FaCalendarAlt></FaCalendarAlt>Reservation</NavLink>
                    </li>

                    <li className="hover:text-indigo-500 ">
                        <NavLink className='bg-transparent' to='/dashboard/paymentHistory'><FaWallet></FaWallet> Payment History</NavLink>
                    </li>

                    <li className="hover:text-indigo-500 ">
                        <NavLink className='bg-transparent' to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart</NavLink>
                    </li>

                    <li className="hover:text-indigo-500 ">
                        <NavLink className='bg-transparent' to='/dashboard/addReview'><MdRateReview></MdRateReview>Add Review</NavLink>
                    </li>

                    <li className="hover:text-indigo-500 ">
                        <NavLink className='bg-transparent' to='/dashboard/myBooking' ><LuCalendarCheck2></LuCalendarCheck2>My Booking</NavLink>
                    </li>

                    <hr className=" border-gray-300" />

                    <li className="hover:text-indigo-500">
                        <NavLink className='bg-transparent' to='/'><FaHome></FaHome>Home</NavLink>
                    </li>

                    <li className="hover:text-indigo-500">
                        <NavLink className='bg-transparent' to='/ourmenu'><FiMenu></FiMenu>MENU</NavLink>
                    </li>

                    <li className="hover:text-indigo-500">
                        <NavLink className='bg-transparent' to='/order/salad'><FaShoppingBag></FaShoppingBag>SHOP</NavLink>
                    </li>

                    <li className="hover:text-indigo-500">
                        <NavLink className='bg-transparent' to='/contactus'><SlEnvolope></SlEnvolope> CONTACT</NavLink>
                    </li>
                </ul>



            </div>
        </div>
    );
};

export default DashBoard;