import { useLoaderData } from "react-router-dom";
import Banner from "../../../../component/Header/Bannar/Bannar";
import Phons from "../../../../component/Phons/Phones";


const Home = () => {
    const phones = useLoaderData()
 
    return (
        <div>
          <Banner></Banner>
          <Phons phones={phones}></Phons>
        </div>
    );
};

export default Home;