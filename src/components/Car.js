// function Car(props) {

//     // using destructure we can get the property
//     const { carInfo } = props;
//     const { brand, color } = carInfo; // PROPS

//     const text = `Hi , Iam a ${color} ${brand} Car`;
//     return (
//         <h2>{text}</h2>
//     )
// }
/**
 * This is way we used to change the color 
 * using class state
 */
import React from "react";

class Car extends React.Component {
    constructor() {
        super();
        this.state = { color: 'Red' }
    }
    render() {

        return (
            <>
                <h1>My car color is {this.state.color}</h1>
                <button onClick={() => { this.setState({ color: "Blue" }) }} ></button >
            </>
        )
    }
}
export default Car;