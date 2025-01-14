import { useState, useReducer } from "react";

var initialState = { count: 0 };
function reducer(state, action) {
    switch (action.type) {
        case 'like': {
            return { count: state.count + 1 }
        }
        case 'dislike': {
            return { count: state.count - 1 }
        }
    }

}
export default function UseReducerComponent() {
    const [state, dispatch] = useReducer(reducer, initialState);
    // function handleLike() {
    //     dispatch
    //         ({
    //             type: 'like'
    //         })
    // }
    function handleDisLike() {
        dispatch
            ({
                type: 'dislike'
            })
    }

    return (
        <div>
            <h3>Likes Count - {state.count}</h3><br />
            <div className="d-flex">
                 {/* <button className="btn btn-success mx-2" onClick={handleLike} >Like</button> */}
                 <button className="btn btn-success mx-2" onClick={()=>{dispatch({type:'like'})}} >Like</button>
                <button className="btn btn-danger" onClick={handleDisLike}>DisLike</button>
            </div>
        </div>
    )

}
