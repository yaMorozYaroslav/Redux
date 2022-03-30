import {createSlice} from '@reduxjs/toolkit'
import {nanoid} from '@reduxjs/toolkit'

const initialState = []
 const postsSlice = createSlice({
 	name: 'posts',
 	initialState,
 	reducers:{
        postAdded:{
            reducer(state, action){
                state.push(action.payload)
            },
            prepare(title, content){
                return{
                    payload:{
                        id: nanoid(),
                        title,
                        content
                    }
                }
            }
        },
        postUpdated(state, action){
            const {id, title, content} = action.payload
            const existingPost = state.find(post=>post.id===id)
            if(existingPost){
                existingPost.title = title
                existingPost.content = content
            }
        }
    }
 })
 export const {postAdded, postUpdated} = postsSlice.actions

 export default postsSlice.reducer