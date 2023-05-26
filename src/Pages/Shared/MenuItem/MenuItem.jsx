
const MenuItem = ({item}) => {
    const {image, name, price, recipe } =item;
    return (
        <div className=" flex p-2 gap-2">
            <img className="w-[70px] rounded-tr-full rounded-br-full rounded-bl-full" src={image} alt="" />
            <div className=" text-gray-800">
                <h3 className=" uppercase">{name}-----------</h3>
                <p>{recipe}</p>
            </div>
                <p className=" text-yellow-600 ">${price}</p>
        </div>
    );
};

export default MenuItem;