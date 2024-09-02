import Car from "./Car";
import Apple from "./Apple";

function Garage() {
    const isDoorOpenned = true;
    // const brand = 'Ferrai';
    // const color = 'Blue';

    const carInfo = {
        brand: 'Ferrari',
        color: 'Blue',
    }

    // Here the list in react
    const carList = [
        { brand: 'BMW', color: 'Red' },
        { brand: 'Ford', color: 'Green' },
        { brand: 'Tesla', color: 'Black' },

    ]

    const numberList = [
        1, 2, 3, 4, 5, 6
    ]

    const appleInfo = {
        type: 'Fuji',
        color: 'Red',
    }
    const showCarInfo = carInfo.brand !== undefined && carInfo.color !== undefined;
    return (
        <div>
            <h1>Who Lives inside my Garage ?</h1>
            {/* ans car */}
            {/* Conditional rendering check validation */}
            {/* showCarInfo we can use ? this &&  */}
            {showCarInfo &&
                < Car carInfo={carInfo} />}
            <Apple appleInfo={appleInfo} />

            {/* Here we use the list in React
            if we use list we can definitely set the unique key
            */}
            <ul>
                {carList.map((carInfo) => <li key={carInfo.brand}><Car carInfo={carInfo} /></li>)}
            </ul>

            <ul>
                {
                    numberList.map((e,index) => <p key={index}>{e}</p>)
                }
            </ul>

        </div>
    )

}

export default Garage;