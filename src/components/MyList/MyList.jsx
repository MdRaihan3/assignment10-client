import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {
    const { user } = useContext(AuthContext)
    const [loadedUsers, setLoadedUsers] = useState([])
    const location = useLocation()
    console.log(location)
    useEffect(() => {
        fetch(`http://localhost:5000/userSpotList/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setLoadedUsers(data)
                console.log(data)
            })
    }, [user?.email])
    console.log(loadedUsers)


    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/delete/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Tourist Spot has been deleted.',
                                'success'
                            )
                            const remaining = loadedUsers.filter(user => user._id != id)
                            setLoadedUsers(remaining)
                        }
                    })

            }
        })
    }
    return (
        <div>
            <div className="overflow-x-auto border p-4">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Tourist Spot Name</th>
                            <th>Country</th>
                            <th>Seasonality</th>
                            <th>Average Cost</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loadedUsers.map(u => <tr key={u._id}>
                                <td>{u?.tourists_spot_name}</td>
                                <td>{u?.country_Name}</td>
                                <td>{u?.seasonality}</td>
                                <td>{u?.average_cost}$</td>

                                <td><Link to={`/updateSpot/${u?._id}`}><button className=" btn">Update</button></Link></td>

                                <td><button onClick={()=> handleDelete(u._id)} className=" btn">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;