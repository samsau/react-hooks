/* this example shows different ways to implement useState hook and function calling in React. */
import "./style.css"
import { useState } from "react";
const initalState = {
    name: "",
    city: "",
    country: ""
}
export default function UseStateDemo () {
    const  [formData, setFormData] = useState(initalState);
    // function handleNameChange(event) {
    //     setFormData({
    //         ...formData,
    //         name: event.target.value
    //     })
    // }

    function handleCityChange(event) {
        setFormData({
            ...formData,
            city: event.target.value
        })
    }
    console.log(formData);
    return (
        <>
            <div className="heading">another example to use the useState hook</div>
            {/* <input onChange={handleNameChange} type="text" name="name" placeholder="Enter Name" /> */}
            <input onChange={(event) => {
                setFormData({
                    ...formData,
                    name: event.target.value
                })
            }} type="text" name="name" placeholder="Enter Name" />
            <select onChange={handleCityChange} name="city">
                <option value={""} id="">
                    select city
                </option>
                <option value={"delhi"} id="delhi">
                    delhi
                </option>
                <option value={"gurgaon"} id="gurgaon">
                    gurgaon
                </option>
                <option value={"noida"} id="noida">
                    noida
                </option>
            </select>
            <select onChange={(event)=> {
                setFormData({
                    ...formData,
                    [event.target.name] : event.target.value /* here `event.target.name` refers to `city`  */
                })
            }} name="country">
                <option value={""} id="">
                    select country
                </option>
                <option value={"India"} id="India">
                India
                </option>
                <option value={"Pakistan"} id="Pakistan">
                Pakistan
                </option>
                <option value={"Bangladesh"} id="Bangladesh">
                Bangladesh
                </option>
            </select>
            <div>
                Name is {formData.name === "" ? "_______" : formData.name} and lives in {formData.city ? formData.city : "________"}, {formData.country ? formData.country : "________"}
            </div>
        </>
    )
}