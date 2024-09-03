import userEvent from "@testing-library/user-event";
import { useState } from "react";

function FavoriteColor() {
    // let color = 'Blue'

    // color refers here the state value
    // we can set the color blue set in setcolor variable set color is called function
    const [color, setColor] = useState('Blue')
    return(
    <>
        <h1>My Fav Color is {color}</h1>
        <button onClick={() => { setColor('Red') }}>Change color</button>
    </>
    )

}

export default FavoriteColor;