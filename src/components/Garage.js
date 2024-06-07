
import Car from "./Car";
// Create another func for ans

/**
 * 
 * @returns Here we use props 
 * props means properites that mean 
 * you can pass the data string or integer
 */
function Garage() {
    const brand = 'BMW';
    const color = 'Blue';
    // Instead of creating a seprate variable we can create as a obj
    const carInfo = { brand: brand, color: color };
    return (
        // We can insert the component only the parent tag
        <div>
            <h1>Who lives inside my Garage?</h1>
            <Car carInfo={carInfo} />
        </div>
    )
}

export default Garage;