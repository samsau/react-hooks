import { useEffect, useRef } from "react"

export default function UseRefDemo(){
    
    const ctr = useRef(0);
    const divRef = useRef();
    const inputRef = useRef();

    useEffect(()=>{
        let inputCurRef = inputRef.current.focus;
        console.log("inputCurRef: ",inputCurRef);
    })

    useEffect(()=>{
        let divCurRef = divRef.current;
        console.log("divCurrent: ", divCurRef);
    })

    function handleClick(){
        ctr.current++;
        console.log("handleClick: ",ctr.current)
    }
    return(
        <>
        <div>
        <div className="heading">
                use ref hook
            </div>
            <button onClick={handleClick}>Click me</button>
            <div ref={divRef}>hello world</div>
            <input ref={inputRef} type="text" placeholder="Enter Something" />
        </div>
        </>
    )
}