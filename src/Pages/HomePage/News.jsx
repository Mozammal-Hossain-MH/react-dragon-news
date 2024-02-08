import PropTypes from 'prop-types';
import { IoBookmarkSharp, IoStarSharp } from "react-icons/io5";
import { AiOutlineShareAlt } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

const News = ({ aNews }) => {

    const { author, title, image_url, details, rating, total_view, _id } = aNews;

    return (
        <div className='border rounded-md mb-10 mx-2'>
            <div className='flex justify-between items-center bg-gray-200 p-3'>
                <div className='flex items-center'>
                    <img className='w-10 rounded-full' src={author.img} alt="" />
                    <div className='ml-3'>
                        <h3 className='leading-3 font-bold'>{author.name}</h3>
                        <p className='text-slate-700'><small>{author.published_date}</small></p>
                    </div>
                </div>
                <div className='flex items-center justify-end'>
                    <IoBookmarkSharp></IoBookmarkSharp>
                    <AiOutlineShareAlt className='ml-1'></AiOutlineShareAlt>
                </div>
            </div>
            <h1 className='p-3 font-bold'>{title}</h1>
            <img className='block mx-auto my-4 p-3' src={image_url} alt="" />
            {
                details.length > 200 ?
                    <p className='p-3 mb-5'><small>{details.slice(0, 200)} <Link 
                    to={`/news/${_id}`}
                    className='text-slate-600 link link-hover'>See more...</Link></small></p>
                    : <p className='p-3 mb-5'><small>{details}</small></p>
            }

            <div className='p-3 flex justify-between items-center border'>
                <div className='flex items-center'>
                    <IoStarSharp className='text-yellow-400'></IoStarSharp>
                    <IoStarSharp className='text-yellow-400'></IoStarSharp>
                    <IoStarSharp className='text-yellow-400'></IoStarSharp>
                    <IoStarSharp className='text-yellow-400'></IoStarSharp>
                    <IoStarSharp className='text-yellow-400'></IoStarSharp>
                    <p className='ml-2'><small>{rating.number}</small></p>
                </div>
                <div className='flex items-center'>
                    <FaEye></FaEye>
                    <p className='ml-3'><small>{total_view}</small></p>
                </div>
            </div>
        </div>
    );
};

export default News;


News.propTypes = {
    aNews: PropTypes.node
}