import completedReducer from './competedReducer'
import uncompletedReducer from './uncompetedReducer'


const rootReducer = combineReducers ({
    active: uncompletedReducer,
    complete: completedReducer

})


export default rootReducer