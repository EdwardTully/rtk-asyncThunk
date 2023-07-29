const createSlice = require('@reduxjs/toolkit').createSlice
const axios = require('axios')
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk

const initialState = {
    loading: false,
    posts: [],
    error: ''

}

const fetchPosts = createAsyncThunk('posts/fetchPosts', ()=>{
    return axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response)=> response.data.map((ea)=>
    //bracket don't work in these types of arrow functions
        `Post number ${ea.id}, user responded with ${ea.body}`
    ))
})

const postsSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    extraReducers: 
        (builder)=>{
            builder.addCase(fetchPosts.pending, (state)=>{
                state.loading = true
            })
            builder.addCase(fetchPosts.fulfilled, (state, action)=>{
                state.loading =false
                state.posts = action.payload
                state.error = ''
            })
            builder. addCase(fetchPosts.rejected, (state, action)=>{
                state.loading = false
                state.posts = []
                state.error = action.error.message
            })
        }
        
        
    }

)

module.exports = postsSlice.reducer
module.exports.fetchPosts = fetchPosts