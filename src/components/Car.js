import Garage from "./Garage";

// create a new function 
function Car(props) {
    const { carInfo } = props;
    const text = `Hi i like ${carInfo.color} ${carInfo.brand} Car`;
    return (
        //  Create a new component
        <div>
            <h2>{text}</h2>
        </div>
    );
}

export default Car;