import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList"
import { useDispatch, useSelector } from "react-redux"

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                {cartItems.length === 0 ?
                 <p>Card is empty. Add items !</p> :
                 <button className="bg-red-600 text-white rounded p-2 m-2" onClick={handleClearCart}>Clear Cart</button>} 
                 <div className="bg-gray-100">
                    <ItemList items={cartItems}/>
                 </div>
            </div>
        </div>
    );
};

export default Cart
