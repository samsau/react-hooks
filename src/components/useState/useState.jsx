import { useState } from "react"
const initialState = true;
export default function UseState() {
    // let initialState = false;
    const [toggle, setToggle] = useState(initialState);
    console.log(initialState);
    function handleToggle() {
        setToggle(!toggle)
    }

    return(
        <div>
            <div>
                Hello use State
            </div>
            <div>
                {
                    toggle === true ? <div>toggle is true</div> : <div>toggle is false</div>
                }
                <button onClick={handleToggle}>change toggle</button>
            </div>
        </div>
    )
}