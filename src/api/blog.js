import {request} from "@/api/index";

export function getBlogList(params) {
    return request({
        method:'get',
        url: '/api/blog/getBlogList',
        params
    })
}

export function getCategoryList(params) {
    return request({
        method:'get',
        url: '/api/category/getCategoryList',
        params
    })
}


// post请求，
export function xxx(data,params) {
    return request({
        method:'post',
        url: 'xxx',
        data,
        params
    })
}