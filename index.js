const store = require('./app/store')
const fetchUsers = require('./features/users/usersSlice').fetchUsers

console.log('Initial State:', store.getState())

const unsubscribe = store.subscribe(()=>{
    console.log('Updated State:', store.getState())
})

store.dispatch(fetchUsers())