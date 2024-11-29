/** Project Planning:-
    * Header
        * Logo
        * title
    * Body
        * Search bar
        * Crusines
        * Restaurants
    * Footer
        * Copyrights
        * Links
        * Addresses 
 */

import React, {lazy, Suspense, useEffect, useState} from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Contact from "./components/Contact"
import About from "./components/About"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import UserContext from "./utils/UserContext"
// import Grocery from "./components/Grocery"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Cart from "./components/Cart"

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
    const [userName, setUserName] = useState()
    useEffect(() => {
        const data = {
            name: "tiger"
        }
        setUserName(data.name)
    }
        ,[])

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{logInUser: userName, setUserName}}>
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <div className="flex-grow">
                        <Outlet />
                    </div>
                    <Footer />
                    </div>
            </UserContext.Provider>
        </Provider>
)}

const routerApp = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}>
                    <Grocery/>
                </Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            },
            {
                path: "/cart",
                element: <Cart/>
            }
                ],
        errorElement: <Error/>
    }
]) 

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={routerApp}/>)