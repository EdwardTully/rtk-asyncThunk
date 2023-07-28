const store = require('./app/store')
const fetchUsers = require('./features/users/usersSlice').fetchUsers
const fetchTodos = require('./features/todos/todoSlice').fetchTodos

console.log('Initial State:', store.getState())

const unsubscribe = store.subscribe(()=>{
    console.log('Updated State:', store.getState())
})

store.dispatch(fetchUsers())
store.dispatch(fetchTodos())