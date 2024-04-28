import Banner from "./Banner/Banner";
import CountrySection from "./CountrySection/CountrySection";
import TouristSection from "./TouristSection/TouristSection";

const Home = () => {
    return (
        <div>
            <div className=" my-5">
                <Banner></Banner>
            </div>
            <div>
                <div className=" mt-12 mb-10">
                    <TouristSection></TouristSection>
                </div>
                <div className=" my-10">
                    <CountrySection></CountrySection>
                </div>

            </div>
        </div>
    );
};

export default Home;