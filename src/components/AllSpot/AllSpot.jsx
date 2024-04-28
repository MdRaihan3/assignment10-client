import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useLoaderData } from "react-router-dom";

const AllSpot = () => {
    const loadedSpots = useLoaderData();
    const [spots, setSpots] = useState(loadedSpots)
    console.log(spots)
    const handleSort = () => {
        const avgCostSpot = loadedSpots.sort((a, b) => (b.average_cost - a.average_cost))
        const sortedSpot = avgCostSpot.filter(cs => cs.average_cost > 0)
        setSpots(sortedSpot)
    }
    return (
        <div>
            <details className="dropdown mt-8 mb-4">
                <summary className="m-1 btn px-4 pt-1 pb-2 bg-[#23BE0A] text-white font-semibold">Sort By <RiArrowDropDownLine className="text-4xl"></RiArrowDropDownLine></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box border-2 w-52">
                    <li className=" bg-green-300 rounded" onClick={handleSort}><a>Average Cost</a></li>
               </ul>
            </details>
            
            <div className=" grid grid-cols-2 gap-2">
                {
                    spots.map(spot => <div key={spot._id}>
                        <div className=" col-span-1 grid grid-cols-2 p-4 border-2 rounded-xl mb-3 gap-4">
                            <div className=" col-span-1">
                                <img className=" rounded-lg" src={spot?.image} alt="" />
                            </div>
                            <div className=" space-y-2 text-lg">
                                <h1 className=" text-xl font-bold">
                                    {spot?.tourists_spot_name}</h1>
                                <hr />
                                <p><span className=" font-bold">Average Cost : </span>
                                    {spot?.average_cost}$</p>
                                <p><span className=" font-bold">Total Visitor Per Year : </span>
                                    {spot?.totalVisitorsPerYear}</p>
                                <p><span className=" font-bold">Seasonality : </span>
                                    {spot?.seasonality}</p>
                                <p><span className=" font-bold">Travel Time : </span>
                                    {spot?.travel_time}</p>
                                <Link to={`/viewDetails/${spot._id}`}>
                                    <button className=" btn btn-secondary">View Details</button>
                                </Link>

                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllSpot;