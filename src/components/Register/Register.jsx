import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../providers/AuthProviders';
import swal from 'sweetalert';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const [showPass, setShowPass] = useState(false);

    const navigate = useNavigate();
    // const location = useLocation();
    const from = '/';

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        const { name, photo, email, password } = data
        if (password.length < 6) {
            toast('Password should have at least 6 characters', {
                autoClose: 1000,
            })
            return;
        }
        else if (!/^(?=.*[A-Z]).+$/.test(password)) {
            toast('Password must have an uppercase', {
                autoClose: 1500,
            })
            return;
        }
        else if (!/^(?=.*[a-z]).+$/.test(password)) {
            toast('Password must have an lowercase', {
                autoClose: 1500,
            })
            return;
        }

        createUser(email, password)
            .then(result => {
                updateUserProfile(name, photo)
                    .then(()=>{
                        navigate(from)
                        console.log('profile updated')
                    })
                    .catch(error =>{
                        swal('Check your email and password again')
                        console.error(error)
                    });
                    swal('Check your email and password again')
                toast('Successfully registered', {
                    autoClose: 1000,
                });
                
                console.log(result.user)
            })
            .catch(error => {
               swal('Check your email and password again')
                console.error(error)
            })
    }
    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold animate__animated animate__backInDown">Register now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        {/* forrrrrmmmmmmm */}
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" name="name" {...register("name", { required: true })} />
                                {errors.name && <span className=" text-red-700">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name="email"
                                    {...register("email", { required: true })} />
                                {errors.email &&
                                    <span className=" text-red-700">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" placeholder="Photo Url" className="input input-bordered" name="photo"
                                    {...register("photo")} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="flex">
                                    <input type={showPass ? "text" : "password"} placeholder="password" className="input input-bordered w-full" name="password"
                                        {...register("password", { required: true })} />
                                    <span className="mt-4 -ml-7" onClick={() => setShowPass(!showPass)}>
                                        {
                                            showPass ? <IoEyeOffOutline></IoEyeOffOutline> : <IoEyeOutline></IoEyeOutline>
                                        }
                                    </span>
                                </div>

                                {errors.password &&
                                    <span className=" text-red-700">This field is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <ToastContainer></ToastContainer>
                    </div>
                    <p className=" text-center text-lg mt-4">Already have an account? <Link className=' text-lg text-blue-600 font-bold' to='/login'>Login</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Register;