import { useEffect, useState } from "react"
import "./style.css"
export default function UseEffectDemo() {
    const [count, setCount] = useState(0);
    const [showText, setShowText] = useState(false);
    const [products, setProducts] = useState([]);
    async function fetchAllProducts(){
        try {
            let response = await fetch("https://dummyjson.com/products");
            let result = await response.json(); 
            // eslint-disable-next-line no-unused-expressions
            result && result.products ? setProducts(result.products) : [];
            console.log(result.products)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        console.log("useEffect 1");
    },[]);

    useEffect(() => {
        if(count >= 10)
            fetchAllProducts();
    },[count]);

    useEffect(() => {

        if(count >= 5) setShowText(true);

    },[count])

    return (
        <>
        <div className="heading">hello useEffect</div>
        <div>
            count is : {count}
            {
                showText ? <div>hello world</div> : null
            }
        </div>
        <button onClick={() => setCount(count+1)}>increment count</button>
        <ul>
            {
                products && products.length > 0 ? products.map((item) => 
                    <li key={item.id} >{item.title}</li>
                ) :
                null
            }
        </ul>
        </>
    )
}