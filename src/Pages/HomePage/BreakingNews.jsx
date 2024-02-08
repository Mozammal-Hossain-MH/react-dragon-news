import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex bg-gray-100 p-3 my-5">
            <button className="btn btn-error btn-sm rounded-none">Latest</button>
            <Marquee>
                Researchers at a leading medical institute have announced a breakthrough in the treatment of the common cold. Through a series of experiments, they have identified a promising antiviral compound that could significantly reduce the severity and duration of cold symptoms. This discovery offers hope for millions worldwide who suffer from cold-related illnesses each year. Clinical trials are slated to begin within the next few months, marking a critical step towards potentially ending the misery of the common cold. Stay tuned for further updates on this developing story.
            </Marquee>
        </div>
    );
};

export default BreakingNews;