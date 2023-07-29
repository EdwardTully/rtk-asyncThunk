const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
const axios = require('axios')

const initialState = {
    loading: false,
    albums: [],
    error: '',
}

const fetchAlbums = createAsyncThunk("albums/fetchAlbums", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/albums")
    .then((response) =>
      response.data.map((ea) => {
        if (ea.userId === 3 || ea.userId ===5) {
          return `Provided by ${ea.userId}, id = ${ea.id}, entitled ${ea.title}`;
        } else {
            return 'Data Disregarded'
        }
      })
    );
});
const albumsSlice = createSlice({
    name: 'albums',
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchAlbums.pending,(state)=>{
            state.loading = true

        })
        builder.addCase(fetchAlbums.fulfilled,(state, action)=>{
            state.loading = false
            state.albums = action.payload
            state.error = ''
        })
        builder.addCase(fetchAlbums.rejected, (state, action)=>{
            state.loading = false
            state.albums = []
            state.error = action.error.message
        })
    }
})

module.exports = albumsSlice.reducer
module.exports.fetchAlbums = fetchAlbums