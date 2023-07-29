const userReducer = require('../features/users/usersSlice')
const todosReducer = require('../features/todos/todoSlice')
const companyReducer = require('../features/companies/companySlice')
const postsReducer = require('../features/posts/postsSlice')
const albumsReducer = require('../features/albums/albumsSlice')
const configureStore = require('@reduxjs/toolkit').configureStore

const store = configureStore({
    reducer: {
        user : userReducer,
        todos : todosReducer,
        company: companyReducer,
        posts: postsReducer,
        albums: albumsReducer,
    }
})

module.exports = store