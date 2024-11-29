import React  from "react"

class UserClass extends React.Component{
    constructor(props){
            super(props);
            this.state = {
                count: 0,
                count2: 2
            }
        }

    // componentDidMount(){
    //     this.timer = setInterval(() => {
    //         console.log("Mount !")
    //     }, 1000)
    //     console.log("DidMount !")
    // }

    // componentDidUpdate() {
    //     console.log("ComponentDidUpdate !")
    // }

    // componentWillUnmount() {
    //     clearInterval(this.timer)
    //     console.log("Unmounted !")
    // }

    render(){
        const {count, count2} = this.state

        return (
            <div className="border border-black m-4">
                <h2>Count: {count} 
                    <button onClick={() => {
                        this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 2
                                    })
                    }}>Increase</button>
                </h2>
                <h2>Count2: {count2}</h2>
            <h2>Name: {this.props.name}</h2>
            <h3>Location: {this.props.location}</h3>
            <h4>Contact: {this.props.contact}</h4>

        </div>
        );
    }
}

export default UserClass