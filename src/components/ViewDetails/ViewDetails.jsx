import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const spot = useLoaderData()
    console.log(spot)
    return (
        <div>
            <div className=" grid grid-cols-2 gap-4 border-2">
                <div className=" col-span-1 px-6 py-2">
                    <img className=" rounded-lg" src={spot?.image} alt="" />
                </div>
                <div className=" space-y-2 text-lg">
                    <h1 className=" text-2xl font-bold">
                        {spot?.tourists_spot_name}</h1>
                    <hr />
                    <p><span className=" font-bold">Country: </span>
                        {spot?.country_Name}</p>
                    <p><span className=" font-bold">Location: </span>
                        {spot?.location}</p>
                    <p><span className=" font-bold">Average Cost : </span>
                        {spot?.average_cost}$</p>
                    <p><span className=" font-bold">Total Visitor Per Year : </span>
                        {spot?.totalVisitorsPerYear}</p>
                    <p><span className=" font-bold">Seasonality : </span>
                        {spot?.seasonality}</p>
                    <p><span className=" font-bold">Travel Time : </span>
                        {spot?.travel_time}</p>
                    <p> {spot?.description.slice(0,100)}</p>
                        
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;