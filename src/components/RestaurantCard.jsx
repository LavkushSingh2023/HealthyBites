import {CDN_URL} from "../utils/constants"
import { Link } from "react-router-dom"

const RestaurantCard = ({resData}) => (
    <Link key={resData.info.id} to={"/restaurants/" + resData.info.id}>
        <div className="m-4 p-1 rounded-lg border bg-gray-100 hover:bg-gray-300 max-w-52" style={{backgroundColor: ""}}>
        <img className="rounded-2xl" alt="res-logo" src={CDN_URL + "/" + resData.info.cloudinaryImageId}></img>
        <h3>{resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(", ")}</h4>
        <h4>{resData.info.avgRating} stars</h4>
        <h4>{resData.info.costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
    </Link>
)

export default RestaurantCard