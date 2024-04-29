import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CountrySection = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://tourist-server-eosin.vercel.app/countries')
            .then(res => res.json())
            .then(data => {
                
                setCountries(data)
            })
    }, [])
    return (
        <div>
            <h1 className=" text-2xl font-bold text-center text-blue-500">Countries</h1>
            <div className=" md:grid grid-cols-3 gap-6">
                {
                    countries.map(c => <div key={c._id}>
                        <Link to={`/countrySpot/${c?.country_Name}`}>
                            <div className=" col-span-1 border p-2 rounded-xl">
                                <div className=" bg-slate-200 p-2 rounded-lg ">
                                    <img className=" w-full h-52 rounded-lg" src={c.image} alt="" />
                                </div>
                                <div className=" text-lg my-2">
                                    <span className=" font-bold">Country : </span>
                                    {c.country_Name}
                                </div>
                                <p>
                                    {c.description.slice(0, 120)}...
                                </p>
                            </div>
                        </Link>

                    </div>)
                }
            </div>
        </div>
    );
};

export default CountrySection;