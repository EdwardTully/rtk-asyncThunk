const userReducer = require('../features/users/usersSlice')
const todosReducer = require('../features/todos/todoSlice')
const configureStore = require('@reduxjs/toolkit').configureStore

const store = configureStore({
    reducer: {
        user : userReducer,
        todos : todosReducer
    }
})

module.exports = store