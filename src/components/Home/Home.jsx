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
                <div className=" text-center mt-12">
                    <h1 className="  text-2xl font-bold text-blue-500">Expert guidance to help you with your travel</h1>
                    <hr />
                    <div className=' md:grid grid-cols-3 my-3 gap-8'>
                        <div className=' border-2 rounded p-4 bg-slate-50'>
                            <p className='my-3 font-bold'>Things to Know</p>
                            <p>Plan the perfect trip to Bali with this advice on health, safety and etiquette...</p>
                        </div>
                        <div className=' border-2 rounded p-4 bg-slate-50'>
                            <p className='my-3 font-bold'>Transportation</p>
                            <p>Bali is relatively small, but it can take a long time to travel around. Here are the best ways to get around on the “island of the gods.</p>
                        </div>
                        <div className=' border-2 rounded p-4 bg-slate-50'>
                            <p className='my-3 font-bold'>Traveling with Kids</p>
                            <p>A growing number of travelers are booking family holidays on the island of Bali. Here are the best things to do there with kids.</p>
                        </div>
                    </div>
                </div>
                <div className=" mt-12">
                    <h1 className="  text-2xl font-bold text-blue-500 text-center">Choose and Plan</h1>
                    <hr />
                    <div className=" md:grid grid-cols-2 bg-slate-100 rounded gap-7">
                        <div className=" col-span-1  p-4 border space-y-2">
                            <h3 className=" text-lg font-bold">Choose your destination</h3>
                            <hr />
                            <p>Your adventure starts now. Your local expert will act as your right hand throughout your journey. We work exclusively with expert and certified local partners................
                            </p>
                            <ul className=" list-disc ml-5">
                                <li>Choose your desired destination.</li>
                                <li>It is simple and fast and will help your local expert pinpoint exactly what you are looking for..............</li>
                            </ul>
                        </div>
                        <div className=" col-span-1  p-4 border space-y-2">
                            <h3 className=" text-lg font-bold">Plan your travel</h3>
                            <hr />
                            <p>All our trips are built from the ground up with thoughtful personalization and attention to detail. Discuss options and alternatives until your trip is tweaked to perfection.
                            </p>
                            <ul className=" list-disc ml-5">
                                <li>Set a meeting with your expert..</li>
                                <li>Talk through options and alternatives until your trip is tweaked to perfection.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;