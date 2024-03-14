import { useEffect, useState } from "react"

export default function UseMemoDemo() {

    const [product, setProduct] = useState([]);

    async function fetchAllProducts() {
        try {
            console.log("in try");
            let response = await fetch("https://dummyjson.com/products");
            let result = await response.json();
            console.log(result);
            setProduct(result);
        } catch (error) {
            console.log(error);
        }
    } 

    useEffect(()=> {
        fetchAllProducts();
    }, [])

    return (
        <>
            <div className='heading'>Use Memo Hook</div>

        </>
    )
}