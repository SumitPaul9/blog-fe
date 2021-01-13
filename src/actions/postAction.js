import { CREATE_POST,  
            UPDATE_POST, 
                DELETE_POST, 
                    TOGGLE_POST_LOADING, 
                        GET_POST, 
                            GET_POSTS, } from '../actions/types';

import { getPosts, updatePost, deletePost, createPost, getPostByID } from '../services/post.service'

export const createPostAction = ( title, body, author)=> async dispatch =>{
   try {
      const res = await createPost( title, body, author);
      console.log(res);
      dispatch({
          type: CREATE_POST,
          payload: res.data
      })
   } catch (error) {

   }
}

export const getPostByIDAction = (id) => async dispatch => {
    try {
        const res = await getPostByID(id);
        dispatch({
            type: GET_POST,
            payload: res.data
        })
    } catch (error) {
        console.log(error);
    }
}
export const getPostsAction = () => async dispatch =>{
    try {
        const res = await getPosts();
        
        dispatch({
            type: GET_POSTS,
            payload: res.data
        })
    } catch (error) {
        console.log(error);
        

    }
    
}

export const updatePostAction = (id, post, history ) => async dispatch => {
    try {
        console.log(post)
        const res = await updatePost( id, post );
        console.log("from post action");
        console.log(res.data)
        console.log("end from post action");
        dispatch({
            type: UPDATE_POST,
            payload: res.data
        })
        history.push(`/blog/post/${id}`);
    } catch (error) {
        
    }
}

export const deletePostAction = (id) => async dispatch =>{
    try {
        const res = await deletePost(id);
        dispatch({
            type: DELETE_POST,
            payload: id
        })
    } catch (error) {
        
    }
}



// export const togglePostLoading = () => {
//     type: TOGGLE_POST_LOADING
// }