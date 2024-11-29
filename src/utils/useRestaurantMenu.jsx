import { useState, useEffect } from "react"
import { MENU_API } from "./constants"

const useRestaurantMenu = (resId) => {
    const [menuData, setMenuData] = useState(null)

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
    const unorderedData = await fetch(MENU_API + resId)
    const jsonData = await unorderedData.json()
    // const clearData = jsonData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards    
    setMenuData(jsonData.data.cards)
    } 
    return menuData
}

export default useRestaurantMenu