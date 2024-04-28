import { Link, useLoaderData } from "react-router-dom";

const CountrySpot = () => {
    const spots = useLoaderData()
   
    return (
        <div>
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

export default CountrySpot;