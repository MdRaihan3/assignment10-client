
import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProviders';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext)
    const [showPass, setShowPass] = useState(false);
    const location = useLocation();
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                Swal('Successfully logged in');
                navigate(location?.state ? location.state : '/')
                console.log(result.user)
            })
            .catch(error => {
                Swal('Check your email and password again')
                console.error(error)
            })
    }

    const handleGoogleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        googleSignIn(googleProvider)
            .then(result => {
                toast('Successfully logged in', {
                    autoClose: 1000,
                })
                navigate(location?.state ? location.state : '/')
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }
    const handleGithubSignIn = () => {
        const githubProvider = new GithubAuthProvider();
        githubSignIn(githubProvider)
            .then(result => {
                toast('Successfully logged in', {
                    autoClose: 1000,
                })
                navigate(location?.state ? location.state : '/')
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold animate__animated animate__backInDown">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        {/* forrrrrrrrrrrrrrrrrrrrrrrrrm */}
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className=" flex">
                                    <input type={showPass ? "text" : "password"} placeholder="password" className="input input-bordered" name="password" required />
                                    <span className="mt-4 -ml-7" onClick={() => setShowPass(!showPass)}>
                                        {
                                            showPass ? <IoEyeOffOutline></IoEyeOffOutline> : <IoEyeOutline></IoEyeOutline>
                                        }
                                    </span>
                                    
                                </div>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                    </div>
                    <p className=" text-center text-lg mt-4">Do not have an account? <Link className=' text-lg text-blue-600 font-bold' to='/register'>Register</Link></p>
                    <div className=" divider">Also login with</div>
                    <div className=" flex gap-6">
                    <div><button onClick={handleGoogleSignIn} className="btn btn-primary btn-sm btn-outline"><FaGoogle></FaGoogle> Google</button> <ToastContainer></ToastContainer></div>
                    <div><button onClick={handleGithubSignIn} className="btn btn-primary btn-sm btn-outline"><FaGithub className=" text-black"></FaGithub> Github</button> <ToastContainer></ToastContainer></div>
                    </div>
                    
                </div>

            </div>

        </div>
    );
};

export default Login;