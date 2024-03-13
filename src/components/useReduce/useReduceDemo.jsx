import { useReducer } from "react";

const initialState = {
    count: 0,
    showCountFlag: true
}

function reducer(state, action) {
    console.log("reducer "+action.type);
    switch(action.type){
        case 'increment': 
            return {...state,
                count:  state.count +1
            };
        case 'decrement': 
            return {...state,
                count:  state.count -1,
            };
        case 'reset': 
        return {...state,
            count:  0,
        };
        case 'show': 
        return {...state,
            showCountFlag: !state.showCountFlag
        };
            default:
        return state;
    }
}

export default function UseReduceDemo() {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log("state "+state);

    return (
        <>
            <div className="heading">
                Use Reducer Hook
            </div>
            <div>{
                state.showCountFlag ? <h1>count is {state.count}</h1> : null
            }</div>
            <div style={{display: "flex", gap: "10px", justifyContent: "center"}}>
                <button onClick={()=> dispatch({type: 'increment'})}>Increment counter</button>
                <button onClick={()=> dispatch({type: 'decrement'})}>Decrement counter</button>
                <button onClick={()=> dispatch({type: 'reset'})}>Reset counter</button>
                <button onClick={()=> dispatch({type: 'show'})}>
                {
                !state.showCountFlag ? `Show counter` : `Hide counter`
            }</button>
            </div>
        </>
    )
}