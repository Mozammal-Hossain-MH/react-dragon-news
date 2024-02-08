import { FaGithub, FaGoogle } from "react-icons/fa";


const GoogleGithubLogin = () => {
    return (
        <div>
            <button className="btn btn-outline w-full btn-sm text-black mt-6 mb-2 hover:text-blue-600">
                <FaGoogle></FaGoogle>
                Google
            </button>
            <button className="btn btn-outline w-full btn-sm text-black">
                <FaGithub></FaGithub>
                Github
            </button>
        </div>
    );
};

export default GoogleGithubLogin;