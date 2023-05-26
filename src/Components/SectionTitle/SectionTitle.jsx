

const SectionTitle = ({heading , subheading}) => {
    return (
        <div className=" text-center py-5 font-serif italic max-w-sm  mx-auto">
            <p className=" text-xs py-2 text-yellow-600">---{subheading}---</p>
            <h1 className=" uppercase text-2xl py-2 text-black border-y-4 border-slate-300 ">{heading}</h1>
        </div>
    );
};

export default SectionTitle;