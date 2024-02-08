import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import QZone1 from '../../../assets/qZone1.png';
import QZone2 from '../../../assets/qZone2.png';
import QZone3 from '../../../assets/qZone3.png';
import GoogleGithubLogin from "../GoogleGithubLogin/GoogleGithubLogin";

const RightSideNav = () => {
    return (
        <div>
            
            <div className="p-4 mb-6">
                <h2 className="text-xl font-bold mb-4">Login with</h2>
                <GoogleGithubLogin></GoogleGithubLogin>
            </div>

            <div className="p-4 mb-6">
                <h2 className="text-xl font-bold mb-4">Find Us On</h2>
                <a className="flex items-center p-4 border rounded-t-lg" href="">
                    <FaFacebook className="mr-3 text-blue-700"></FaFacebook>
                    Facebook
                </a>
                <a className="flex items-center p-4 border" href="">
                    <FaTwitter className="mr-3 text-blue-400"></FaTwitter>
                    Twitter
                </a>
                <a className="flex items-center p-4 border rounded-b-lg" href="">
                    <FaInstagram className="mr-3 text-red-700"></FaInstagram>
                    Instagram
                </a>
            </div>

            <div className="p-4 mb-6 bg-gray-200">
                <h2 className="text-xl font-bold mb-4">Q Zone</h2>
                <div className="mb-2">
                    <img className="w-full" src={QZone1} alt="" />
                </div>
                <div className="mb-2">
                    <img className="w-full" src={QZone2} alt="" />
                </div>
                <div className="mb-2">
                    <img className="w-full" src={QZone3} alt="" />
                </div>
            </div>

        </div>
    );
};

export default RightSideNav;