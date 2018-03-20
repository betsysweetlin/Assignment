import { SIGNUP, SIGNUP_SUCCESS } from "../actionTypes/signup";

export default (prevstate = {
users:[]
}, action) => {
    switch (action.type) {
        case SIGNUP:
            return {
                ...prevstate,
              }
        case SIGNUP_SUCCESS:
        return{
            ...prevstate,
            users:action.users
        }

        default:
            return prevstate
    }
} 