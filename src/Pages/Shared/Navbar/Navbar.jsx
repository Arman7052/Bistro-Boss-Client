import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";


const Navbar = () => {
    const [showUsername, setShowUsername] = useState(false);

    const handleMouseEnter = () => {
        setShowUsername(true);
    };

    const handleMouseLeave = () => {
        setShowUsername(false);
    };

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();


    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    const navOptions = <>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/contactus'>CONTACT</Link></li>
        <li><Link to='/dashboard'>DASHBOARD</Link></li>
        <li><Link to='/ourmenu'>MENU</Link></li>
        <li><Link to='/order/salad'>SHOP</Link></li>
        <li>
            <Link to='/dashboard/mycart' className="flex p-1">

                <FaShoppingCart></FaShoppingCart>
                <sup><div className="badge bg-transparent border-none text-yellow-600 -ml-2 -mt-2">{cart?.length || 0}</div></sup>

            </Link>
        </li>
        <li>
            {user && (
                <Link
                    to="/"
                    className="relative inline-block"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        src={user.photoURL}
                        alt="User Profile"
                        className="h-8 w-8 rounded-full"
                    />
                    {showUsername && (
                        <span className="absolute bg-transparent text-yellow-500 text-justify text-xs whitespace-nowrap p-3 ">
                            {user.displayName}
                        </span>
                    )}
                </Link>
            )}
        </li>
    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-60 bg-gray-800 text-white max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link className=" italic font-serif text-sm  lg:text-xl p-2 ms-2">Bistro Boss <br /> Restaurant </Link>
                </div>
                <div className="navbar-center hidden text-yellow-200 lg:flex lg:navbar-end">
                    <ul className=" flex gap-2">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        <Link onClick={handleLogout} to='/' className="btn btn-ghost">Logout</Link> :
                        <Link to='/login' className="btn btn-ghost">Login</Link>

                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;