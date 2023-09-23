import PhonsCard from "./PhonsCard";


const Phones= ({phones}) => {
    console.log(phones)

    return (
        <div className="text-3xl text-center py-10">
            <h1> All catagori phons</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
           {
            phones?.map( phone => <PhonsCard key={phone.id} phone={phone} ></PhonsCard>)
           }
           </div>
        </div>
    );
};

export default Phones;