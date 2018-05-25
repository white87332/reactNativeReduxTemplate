import * as types from '../constants/actionTypes';

export function postsGet()
{
    return {
        type: types.POSTS_GET$
    };
}

export function postsGetSuc()
{
    let data = [
        {
            title: 'title1',
            thumbnail: 'https://s1.yimg.com/rz/d/yahoo_frontpage_zh-Hant-TW_s_f_p_bestfit_frontpage_2x.png'
        },
        {
            title: 'title2',
            thumbnail: 'https://s1.yimg.com/rz/d/yahoo_frontpage_zh-Hant-TW_s_f_p_bestfit_frontpage_2x.png'
        },
        {
            title: 'title3',
            thumbnail: 'https://s1.yimg.com/rz/d/yahoo_frontpage_zh-Hant-TW_s_f_p_bestfit_frontpage_2x.png'
        },
    ];

    return {
        type: types.POSTS_GET_SUC,
        data
    };
}
