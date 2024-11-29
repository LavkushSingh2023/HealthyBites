import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState([]);
  const [showIndex, setShowIndex] = useState(0)

  const { resId } = useParams();
  const menuData = useRestaurantMenu(resId);

  useEffect(() => {
    const menuItems = menuData?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    if (menuItems) {
      setMenu(menuItems);
    } 
  }, [menuData]); // Depend on `menuData`

  if (menuData === null) {
    return <Shimmer />;
  }
  
  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl m-6">
        {menuData?.[2]?.card?.card?.info?.name}
      </h1>
      <p className="font-bold text-xl">
        {menuData?.[2]?.card?.card?.info?.cuisines?.join(", ")} -{" "}
        {menuData?.[2]?.card?.card?.info?.costForTwoMessage}
      </p>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>
            <RestaurantCategory menuItems={item}
             showItems={index === showIndex}
             setShowIndex={() => setShowIndex(showIndex === index ? null : index)}/>                    {/**Logical */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
