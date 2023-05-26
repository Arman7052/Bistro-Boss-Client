import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popularItems = menu.filter(item => item.category ==='popular');
   
    return (
        <section className=" my-10 p-5">
            <SectionTitle
            subheading={"Check it out"}
            heading={'FROM OUR MENU'}
            ></SectionTitle>
            
            <div className=" grid grid-col-1 lg:grid-cols-2 my-10 gap-10">
                {
                    popularItems.map(item =>  <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <div className=" text-center">
            <Link to='/ourmenu' className="btn uppercase text-yellow-600 btn-link ">View full menu</Link>
            </div>
        </section>
    );
};

export default PopularMenu;