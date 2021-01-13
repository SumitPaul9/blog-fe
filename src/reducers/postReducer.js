import { GET_POST, CREATE_POST, UPDATE_POST, DELETE_POST, TOGGLE_POST_LOADING, GET_POSTS, TOGGLE_POSTS_LOADING, RESET_POST } from '../actions/types'

const initialState = {
    post:{},
    posts:[]
}

const postReducer = (state = initialState, action) => {
        switch(action.type){
            case GET_POSTS:
                return {
                ...state,
                posts:[...action.payload]
            }

            case GET_POST:
                return {
                    ...state,
                    post: action.payload
                }

                // case UPDATE_POST:
                //     return {
                //         ...state,
                //         post: action.payload
                //     }
            default:
                return state;
        }
    } 

export default postReducer