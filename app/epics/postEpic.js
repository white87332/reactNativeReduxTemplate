import { switchMap, map } from 'rxjs/operators';
import { postsGetSuc } from '../actions/posts';
import * as types from '../constants/actionTypes';

const postAddEpic = (action$) =>
{
    return (
        action$.ofType(types.POSTS_GET$).pipe(
            switchMap((action) => {
                // return observable, promise, or array
                return Promise.resolve(action);
            }),
            map(() => {
                return postsGetSuc();
            })
        )
    );
};

export default [
    postAddEpic
];
