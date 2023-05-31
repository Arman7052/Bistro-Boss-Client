import { Link, Outlet } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { LuCalendarCheck2 } from 'react-icons/lu';
import { MdRateReview } from 'react-icons/md';


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
                <ul className="menu p-4 w-80 text-black font-serif italic uppercase">
                    {/* <!-- Sidebar content here --> */}
                    <li className="hover:text-white p-1"><Link><FaHome></FaHome>User Home</Link></li>
                    <li className="hover:text-white p-1"><Link><FaCalendarAlt></FaCalendarAlt>Reservation</Link></li>

                    <li className="hover:text-white p-1"><Link><FaWallet></FaWallet> Payment History</Link></li>
                    <li className="hover:text-white p-1"><Link><FaShoppingCart></FaShoppingCart>My Cart</Link></li>

                    <li className="hover:text-white p-1"><Link><MdRateReview></MdRateReview>Add Review</Link></li>
                    <li className="hover:text-white p-1"><Link><LuCalendarCheck2></LuCalendarCheck2>My Booking</Link></li>
                     <hr className=" font-extrabold border-gray-300" />
                   
                </ul>



            </div>
        </div>
    );
};

export default DashBoard;