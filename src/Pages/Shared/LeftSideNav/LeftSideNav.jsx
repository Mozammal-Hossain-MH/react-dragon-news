import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="sticky top-0">
            <h2 className="text-xl font-bold mb-4">All Categories </h2>
            {
                categories.map(category => <NavLink
                    key={category.id}
                    className={'md:block pl-3 md:pl-10 py-3 hover:bg-gray-100'}
                    to={`/category/${category.id}`}
                >{category.name}</NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;