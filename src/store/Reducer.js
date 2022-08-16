import { ADD_TO_DO, SET_TO_DO } from "./Constants";

const initState = {
    todos: [],
    todo: '',
};

function Reducer(state, action) {
    switch (action.type) {
        case SET_TO_DO:
            return {
                ...state,
                todo: action.payload
            }
        case ADD_TO_DO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        default:
            break;
    }
};

export {initState};
export default Reducer;