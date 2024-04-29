import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const AddTouristSpot = () => {

    const {user} = useContext(AuthContext)

    const handleAddTouristSpot = e =>{
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_Name = form.country_Name.value;
        const location = form.location.value;
        const description = form.description.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const email = form.email.value;
        const userName = form.name.value;

        const newSpot = {image, tourists_spot_name, country_Name, location, description, average_cost, seasonality, travel_time, totalVisitorsPerYear, email, userName}
        console.log(newSpot)
        // send to the server
        fetch('http://localhost:5000/addSpot', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'New Spot Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className=" md:mx-20 border p-5 bg-[#CBF6FF]">
            <form onSubmit={handleAddTouristSpot}>
                <h1 className=" text-center text-xl font-bold">Add Tourist Spot.........</h1>
                <hr />
                {/* image and spot name */}
                <div className=" md:flex gap-4 mb-3 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input name="image" type="text" placeholder="image" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Tourists Spot Name</span>
                        </label>
                        <input name="tourists_spot_name" type="text" placeholder="Tourists Spot Name" className="input input-bordered" required />
                    </div>
                </div>
                {/*  country name and location */}
                <div className=" md:flex gap-4 mb-3 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Country Name</span>
                        </label>
                        <input name="country_Name" type="text" placeholder="Country Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input name="location" type="text" placeholder="Location" className="input input-bordered" required />
                    </div>
                </div>
                {/* description and average cost */}
                <div className=" md:flex gap-4 mb-3 ">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input name="description" type="text" placeholder="Description" className="input input-bordered" required />
                    </div>
                </div>
                {/* average cost and seasonality */}
                <div className=" md:flex gap-4 mb-3 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Average Cost</span>
                        </label>
                        <input name="average_cost" type="text" placeholder="Average Cost" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seasonality</span>
                        </label>
                        <input name="seasonality" type="text" placeholder="Seasonality" className="input input-bordered" required />
                    </div>
                </div>
                {/* travel time and total visitor */}
                <div className=" md:flex gap-4 mb-3 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Travel Time</span>
                        </label>
                        <input name="travel_time" type="text" placeholder="Travel Time" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Total visitor Per Year</span>
                        </label>
                        <input name="totalVisitorsPerYear" type="text" placeholder="Total visitor Per Year" className="input input-bordered" required />
                    </div>
                </div>
                {/* email and name */}
                <div className=" md:flex gap-4 mb-3 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input  name="email" type="email" 
                        defaultValue={user?.email}
                        placeholder="Email" className="input input-bordered"  />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                        defaultValue={user?.displayName}
                        name="name" type="text" placeholder="Name" className="input input-bordered"  />
                    </div>
                </div>

                {/* button */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddTouristSpot;