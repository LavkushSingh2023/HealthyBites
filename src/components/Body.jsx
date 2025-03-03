import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { DATA_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [searchRes, setSearchRes] = useState("")

    const {logInUser, setUserName} = useContext(UserContext)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try{
            const data = await fetch(DATA_API);
            const jsonData = await data.json();
            const restaurants = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setRestaurants(restaurants);
        }catch(error){
            console.error("Fetch failed: ", error)
        }
    };

 const handleSearch = () => {
                        const searchData = restaurants.filter((res) => 
                            res.info.name.toLowerCase().includes(searchRes.toLowerCase())
                                )
                            setRestaurants(searchData)
                    }

const onlineStatus = useOnlineStatus()
if(onlineStatus === false){
    return <h1>You are offline !, please check your internet connection.</h1>
}

return restaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="flex m-2">
                <button className="bg-blue-400 rounded m-4 p-1 border border-black shadow-lg"
                    onClick={() => {
                        const filterRes = restaurants.filter((res) => 
                            res.info.avgRating > 4
                        );
                        setRestaurants(filterRes);
                    }}
                >Top Rated Restaurant</button>
                 <div className="m-4">                    
                    <input className="rounded border border-black p-1 text-center" placeholder="Search Restaurants" type="text" value={searchRes} 
                    onChange={(e) => {
                        setSearchRes(e.target.value)
                    }}/>
                    <button className="bg-green-400 rounded p-1 border border-black" 
                    onClick={handleSearch}>
                        Search</button>
                </div>
                <div className="ml-auto mt-2">
                    <label>UserName:</label>
                    <input className="border border-blue-300 m-2 text-center" type="text"
                     value={logInUser}
                     onChange={(e) => 
                     setUserName(e.target.value)
                    }/>
                </div>
            </div>

            <div className="flex justify-center p-2 flex-wrap">
                {restaurants.map((restau) => (
                    <RestaurantCard key={restau.info.id} resData={restau} />
                ))}
            </div>
        </div>
    );
};

export default Body;
