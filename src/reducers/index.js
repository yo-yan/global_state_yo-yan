import { GET_DATA } from '../actions/index'

const reducer = (state, action) => {
    switch (action.type) {
        case GET_DATA:
            const result = action.data.filter((element) => element.id <= 5);
            return { ...state, user_data: result };
        default:
            return state
    }
}

export default reducer 