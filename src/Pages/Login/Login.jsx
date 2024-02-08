
import Navbar from "../Shared/Navbar/Navbar";
import GoogleGithubLogin from "../Shared/GoogleGithubLogin/GoogleGithubLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { NewsContext } from "../../Providers/AuthProvider";


const Login = () => {
    const { loginUser } = useContext(NewsContext);
    const navigate = useNavigate();
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const location = useLocation();
    console.log(location)

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');

        console.log(email, password);
        // firebase login
        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('Login successfully');
                navigate(location?.state ? location.state : '/');
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
                        <h1 className="text-5xl font-bold">Login your Account!</h1>
                        <p className="py-6 text-slate-700">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered text-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered text-white" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <p className="text-green-500"><small>{success}</small></p>
                                <p className="text-red-500"><small>{error}</small></p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="mb-10 mx-8">
                            <p className="text-center text-slate-400"><small>{"Don't"} Have An Account? <Link className="link link-hover" to={'/register'}>Register</Link></small></p>
                            <GoogleGithubLogin></GoogleGithubLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;