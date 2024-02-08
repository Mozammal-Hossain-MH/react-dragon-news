import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/Right side nav/RightSideNav";


const NewsDetails = () => {
    const news = useLoaderData();
    const params = useParams();

    const loggedNews = news.find(aNews => aNews._id === params.newsId);
    console.log(loggedNews)

    const {image_url, title, details } = loggedNews
    
    return (
        <div>
            <Header></Header>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3 mx-3">
                    <h1 className="text-xl font-bold">Dragon News</h1>
                    <div className="border p-5 mt-10">
                        <img src={image_url} alt="" />
                        <h1 className="font-bold text-xl my-5">{title}</h1>
                        <p style={{maxWidth: '640px'}}><small>{details}</small></p>
                    </div>
                </div>
                <RightSideNav></RightSideNav>
            </div>
        </div>
    );
};

export default NewsDetails;