const userReducer = require('../features/users/usersSlice')
const configureStore = require('@reduxjs/toolkit').configureStore

const store = configureStore({
    reducer: {
        user : userReducer,
    }
})

module.exports = store