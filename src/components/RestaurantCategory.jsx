import { useState } from "react"
import ItemList from "./ItemList"

const RestaurantCategory = ({menuItems, showItems, setShowIndex}) => {
    const handleClick = () => {
        setShowIndex()
    }

    return (
    <div>
        {/* Header */}
        {menuItems?.card?.card?.itemCards?.length && (
        <div className="bg-gray-100 w-6/12 mx-auto my-4 p-2 shadow-lg rounded-s">
            <div className=" flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">
                {menuItems?.card?.card?.title} ({menuItems?.card?.card?.itemCards?.length})
                </span>
                <span className="">⬇️</span>
            </div>
            <div>
                {showItems && <ItemList items={menuItems}/>}                
            </div>
        </div>
        )}
    </div>
)}

export default RestaurantCategory