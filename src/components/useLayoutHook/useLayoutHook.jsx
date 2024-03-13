import { useEffect, useLayoutEffect, useRef } from "react"

export default function UseLayoutHook(){
    const divRef = useRef();
    const inputRef = useRef();
    useEffect(()=>{
        console.log("use effect called");
        setTimeout(()=>{
            inputRef.current.value = "saurabh"
        }, 3000)
    },[])

    useLayoutEffect(()=>{
        console.log("use layout called");
    },[])

    useLayoutEffect(()=>{
        let divCurRef = divRef.current;
        console.log("div element: ", divCurRef);
        divCurRef.style.opacity = 0;
        setTimeout(()=>{
            divCurRef.style.opacity = 1;
            divCurRef.style.color = "red";
        }, 1000)
    });

    // useLayoutEffect(()=> {
    //     let inputCurRef = inputRef.current;
    //     inputCurRef.current.value = "saurabh";
    //     // setTimeout(()=>{
    //     // }, 3000)
    // });
    
    return (
        <>
            <div className="heading">Use Layout hook</div>
            <div ref={divRef}>hello world</div>
            <input ref={inputRef} type="text" value={"hello"} placeholder="enter something" />
        </>
    )
}