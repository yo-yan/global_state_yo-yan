import { GET_DATA, GET_TODO_DATA } from '../actions/index';

const reducer = (state, action) => {
    switch (action.type) {
        case GET_DATA:
            const result = action.data.filter((element) => element.id <= 5);
            return { ...state, user_data: result };
        case GET_TODO_DATA:
            const outcome = action.todo.filter((element) => element.id <= 8);
            return { ...state, comment_todo: outcome };
        default:
            return state
    }
}

export default reducer 