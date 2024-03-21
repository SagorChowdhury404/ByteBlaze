import Hero from "./Hero";
import wave from '../../src/assets/wave.svg'
const Home = () => {
    return (

        <div className="flex relative ">
            <Hero></Hero>
            <img className="absolute bottom-0 mx-auto w-full" src={wave} alt="" />
        </div>


    );
};

export default Home;