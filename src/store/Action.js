import { ADD_TO_DO, SET_TO_DO } from "./Constants";

export const setToDo = payload => {
    return(
        {
            type: SET_TO_DO,
            payload: payload,
        }
    )
};

export const addToDo = payload => {
    return(
        {
            type: ADD_TO_DO,
            payload: payload,
        }
    )
};
