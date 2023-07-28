const userReducer = require('../features/users/usersSlice')
const todosReducer = require('../features/todos/todoSlice')
const companyReducer = require('../features/companies/companySlice')
const configureStore = require('@reduxjs/toolkit').configureStore

const store = configureStore({
    reducer: {
        user : userReducer,
        todos : todosReducer,
        company: companyReducer
    }
})

module.exports = store