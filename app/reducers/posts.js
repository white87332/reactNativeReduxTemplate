import * as types from '../constants/actionTypes';

const initialItems = {
    list: []
};

export default function posts(state = initialItems, action = {})
{
    switch (action.type)
    {
        case types.POSTS_GET_SUC:
            let data = state.list.concat(action.data);
            state = Object.assign({}, state, data, {
                list: data
            });
            return state;

        default:
            return state;
    }
}
