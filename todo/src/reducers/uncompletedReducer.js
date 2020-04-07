

const uncompletedReducer = (state = [], action) => {
    switch (action.type) {
        case ACTIVE:
            return [...state, action.payload]
    
        default:
            break;
    }
}

export default  uncompletedReducer