import { createStore } from 'redux'
import rootReducer from '../reducers/rootReducer'

const store = createStore(rootReducer, {todo:[],
    complete:  { 
        1: { id: 1, task: 'Lab', status: true },
        2: { id: 2, task: 'Wash the dishes', status: true }
    }                                   
})