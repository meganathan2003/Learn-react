/**
 * Here the file how to use mutiple 
 * state in hooks
 */

import { useState } from "react"

function Scooter() {

    const [color, setColor] = useState('Red')
    const [brand, setBrand] = useState('Yahama')
    const [model, setModel] = useState('R15')
    const [year, setYear] = useState('2020')

    return (
        <>
            <h1>My Scooter</h1>
            <p>Color : {color}</p>
            <p>Brand : {brand}</p>
            <p>Model : {model}</p>
            <p>Year : {year}</p>

        </>
    )

}

export { Scooter };