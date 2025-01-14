import { useState, useReducer } from "react";

var initialState = { likes: 0, dislikes: 0 };
function reducer(state, action) {
    switch (action.type) {
        case 'like': {
            return { likes: state.likes + 1,dislikes: state.dislikes }
        }
        case 'dislike': {
            return { dislikes: state.dislikes + 1, likes: state.likes }
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
            <div className="d-flex">
                {/* <button className="btn btn-success mx-2" onClick={handleLike} >Like</button> */}
               [{state.likes}] <button className="btn btn-success mx-2" onClick={() => { dispatch({ type: 'like' }) }} >Like</button>
               [{state.dislikes}]<button className="btn btn-danger" onClick={handleDisLike}>DisLike</button>
            </div>
        </div>
    )

}
