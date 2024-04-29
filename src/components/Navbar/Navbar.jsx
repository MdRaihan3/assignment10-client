import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import './Navbar.css'

const Navbar = () => {
    const { user, logOut, checked, setChecked } = useContext(AuthContext)
    const location = useLocation()

    const handleCheck = () => {
        setChecked(!checked)
    }

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const themeToggle = <>
        <div className="form-control w-52">
            <label className="cursor-pointer label">
                <input type="checkbox" className="toggle toggle-primary"
                    checked={checked} onChange={handleCheck} />
            </label>
        </div>
    </>

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allTouristSpot'>All Tourist Spot</NavLink></li>
        <li><NavLink to='/addSpot'>Add Tourist Spot</NavLink></li>
        {
            user ? <><li><NavLink to='/myList'>My List</NavLink></li></> :
                <> <li><NavLink to='/login'>Login</NavLink></li>
                    <li><NavLink to='/register'>Register</NavLink></li> </>
        }

    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl gap-0">
                        <span className=" text-teal-600">R</span>Tourist</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        location.pathname === '/' && themeToggle
                    }


                    {
                        user &&
                        <div className=" hov-img">
                            <div className=" hov-content border-2 -ml-16">
                                <h1 className=" font-bold">{user && user?.displayName}</h1>

                                <br />
                                {
                                    user && <button onClick={handleSignOut} className="btn">LogOut</button>
                                }
                            </div>
                            <div className=" border-2 rounded-full h-10 w-10">
                                {user && <img src={user?.photoURL} />}
                            </div>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;