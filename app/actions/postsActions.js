import * as types from '../constants/actionTypes';

export function postsList(page = 1, category = 'latestNews')
{
    return (dispatch) =>
    {
        let data = [
            {"title":"title1", "thumbnail":"https://s1.yimg.com/rz/d/yahoo_frontpage_zh-Hant-TW_s_f_p_bestfit_frontpage_2x.png"},
            {"title":"title2", "thumbnail":"https://s1.yimg.com/rz/d/yahoo_frontpage_zh-Hant-TW_s_f_p_bestfit_frontpage_2x.png"},
            {"title":"title3", "thumbnail":"https://s1.yimg.com/rz/d/yahoo_frontpage_zh-Hant-TW_s_f_p_bestfit_frontpage_2x.png"},
            {"title":"title4", "thumbnail":"https://s1.yimg.com/rz/d/yahoo_frontpage_zh-Hant-TW_s_f_p_bestfit_frontpage_2x.png"},
            {"title":"title5", "thumbnail":"https://s1.yimg.com/rz/d/yahoo_frontpage_zh-Hant-TW_s_f_p_bestfit_frontpage_2x.png"},
            {"title":"title6", "thumbnail":"https://s1.yimg.com/rz/d/yahoo_frontpage_zh-Hant-TW_s_f_p_bestfit_frontpage_2x.png"},
            {"title":"title7", "thumbnail":"https://s1.yimg.com/rz/d/yahoo_frontpage_zh-Hant-TW_s_f_p_bestfit_frontpage_2x.png"},
            {"title":"title8", "thumbnail":"https://s1.yimg.com/rz/d/yahoo_frontpage_zh-Hant-TW_s_f_p_bestfit_frontpage_2x.png"},
            {"title":"title9", "thumbnail":"https://s1.yimg.com/rz/d/yahoo_frontpage_zh-Hant-TW_s_f_p_bestfit_frontpage_2x.png"}
        ];

        dispatch(
        {
            type: types.GET_LATEST_LIST,
            data: data
        });
    };
}
