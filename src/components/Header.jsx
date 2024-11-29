import { useContext, useState } from "react"
import {LOGO_URL} from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContex from "../utils/UserContext"
import { useSelector } from "react-redux"

const Header = () => {
    const [btnName, setBtnName] = useState("Login")

    const onlineStatus = useOnlineStatus()

    const data = useContext(UserContex)

    const cartItems = useSelector((store) => store.cart.items)

    return (
    <div className="flex justify-between items-center shadow-lg bg-green-100 border">
        <div className="logo-container">
            <img className="w-56" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
            <ul className="flex font-bold">
                <li className="p-3">Online Status: {onlineStatus === true ? "✅" : '🔴'}</li>
                <li className="p-3">
                    <Link to="/">Home</Link>
                </li>
                <li className="p-3">
                    <Link to="/about">About Us</Link>
                </li>
                <li className="p-3">
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li className="p-3">
                    <Link to="/grocery">Grocery</Link>
                </li>
                <li className="p-3">
                    <Link to="/cart">Cart- ({cartItems.length} items)</Link>
                </li>
                <li className="p-3">
                    <button className="bg-gray-200 p-2"
                        onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                        }}>
                    {btnName}</button>
                 </li>
                 <li className="p-3">{data.logInUser}</li>
            </ul>
        </div>
    </div>
)}

export default Header