

const completedReducer = (state = [], action) => {
    switch (action.type) {
        case COMPLETE:
            return [...state, action.payload]
    
        default:
            break;
    }
}

export default  completedReducer