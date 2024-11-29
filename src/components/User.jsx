import { useEffect } from "react"

const User = (prop) => {

    // useEffect(() => {
    // const timer = setInterval(() => {
    //         console.log("Mount !")
    //     }, 1000)

    //     console.log("after Mount")

    //     return () => {
    //         clearInterval(timer)
    //     }
    // }, [])

    // console.log("Render")

    return (
        <div className="border border-black">
            <h2>Name: {prop.name}</h2>
            <h3>Location: {prop.location}</h3>
            <h4>Contact: {prop.contact}</h4>
        </div>
    )
}

export default User