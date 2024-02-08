import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { NewsContext } from "../../Providers/AuthProvider";


const Register = () => {
    const { createUser } = useContext(NewsContext);
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const handleRegister = e => {
        e.preventDefault()
        setSuccess('');
        setError('');

        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photoURL = form.get('photoURL');
        const email = form.get('email');
        const password = form.get('password');
        const confirmPassword = form.get('confirmPassword');

        if (password.length < 6) {
            setError('Password should be at least 6 characters')
            return;
        }
        else if (password !== confirmPassword) {
            setError('Password and Confirm Password Should be same');
            return;
        }
        else if (!/^(?=.*[A-Z])(?=.*\d).+$/.test(password)) {
            setError('Password should atleast have one uppercase and one number');
            return;
        }

        console.log(name, photoURL, email, password, confirmPassword);

        // create user 
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset()
                setSuccess('User Created Successfully');
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name="name" placeholder="full name" className="input input-bordered text-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered text-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photoURL" placeholder="photo URL" className="input input-bordered text-white" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered text-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name="confirmPassword" placeholder="confirm password" className="input input-bordered text-white" required />
                            </div>
                            <div className="form-control">
                                <label className="cursor-pointer label flex justify-start">
                                    <input type="checkbox" className="checkbox" required />
                                    <span className="label-text ml-2">I accept the terms and conditions</span>
                                </label>
                                <p className="text-green-500"><small>{success}</small></p>
                                <p className="text-red-500"><small>{error}</small></p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <div className="mb-10 mx-8">
                            <p className="text-center text-slate-400"><small>Already Have An Account? <Link className="link link-hover" to={'/login'}>Login</Link></small></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;