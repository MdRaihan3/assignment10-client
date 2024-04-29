import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TouristSection = () => {
    const [spots, setSpots] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allSpot')
            .then(res => res.json())
            .then(data => setSpots(data))
    }, [])
    return (
        <div>
             <h1 className=" font-bold text-xl text-center text-blue-500">Tourist Spot</h1>
            <div className=" md:grid grid-cols-2 p-3 gap-3"> 
                {
                    spots.slice(0, 6).map(spot => <div key={spot._id}>
                        <div className=" col-span-1 md:grid grid-cols-2 p-4 border-2 rounded-xl mb-3 gap-4">
                            <div className=" col-span-1">
                                <img className=" rounded-lg" src={spot?.image} alt="" />
                            </div>
                            <div className=" space-y-2 text-lg">
                                <h1 className=" text-xl font-bold">
                                    {spot?.tourists_spot_name}</h1>
                                <hr />
                                <p><span className=" font-bold">Total Visitor Per Year : </span>
                                    {spot?.totalVisitorsPerYear}</p>
                                <p><span className=" font-bold">Seasonality : </span>
                                    {spot?.seasonality}</p>
                                <p><span className=" font-bold">Travel Time :..... </span>
                                    {spot?.travel_time}</p>

                                <Link to={`/viewDetails/${spot._id}`}>
                                    <button className=" btn btn-secondary">View Details.....</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TouristSection;