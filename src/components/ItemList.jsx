import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    {/** here || items for cart */}
    const menuNames = items?.card?.card?.itemCards || items  

    const dispatch = useDispatch()
    const handleAddItem = (ite) => {
        dispatch(addItem(ite))
    }

    return ( <>
        {menuNames?.map((item) => 
            (<div key={item.card.info.id} className="w-9/12 m-auto border-gray-300 border-b-2 flex justify-between">
                <div className="pt-10 text-left">
                    <p className="py-2">
                        {item.card.info.name} - ₹{" "}
                        {item.card.info.finalPrice / 100 ||
                            item.card.info.defaultPrice / 100 ||
                            item.card.info.price / 100}
                    </p>
                    <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 my-10 relative">
                    <img
                        className="min-w-32 h-32 object-cover rounded"
                        src={CDN_URL + "/" + item.card.info.imageId}
                        alt={item.card.info.name || "Menu Item"}
                    />
                    <div className="absolute top-28 left-10">
                        <button className="p-2 bg-white text-green-600 font-bold shadow-lg rounded" onClick={() => handleAddItem(item)}>ADD</button>
                    </div>
                </div>
            </div>))}
        </>)}

export default ItemList;
