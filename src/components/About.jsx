import User from "./User"
import UserClass from "./UserClass"

const About = () =>
    <div className="p-16 ">
        <h1>About Us Page</h1>
        <User name={"Akshay"} location={"Dehradun"} contact={"@lavkush"}/> <br></br>
        <UserClass name={"Akshar"} location={"Dehras"} contact={"@lav"}/>
    </div>

export default About

