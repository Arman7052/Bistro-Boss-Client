import { Link } from "react-router-dom";


const Navbar = () => {
    const navOptions = <>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/contactus'>CONTACT</Link></li>
        <li><Link to='/dashboard'>DASHBOARD</Link></li>
        <li><Link to='/ourmenu'>OUR MENU</Link></li>
        <li><Link to='/ourshop'>OUR SHOP</Link></li>
    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-60 bg-red-800 text-white max-w-screen-xl mx-auto">
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
                <div className="navbar-center hidden lg:flex lg:navbar-end">
                    <ul className="menu menu-horizontal gap-3">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-ghost">Get started</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;