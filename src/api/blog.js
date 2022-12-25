import {request} from "@/api/index";

export function getBlogList(params) {
    return request({
        method:'get',
        url: '/api/blog/getBlogList',
        data:params
    })
}


export function getCategoryList(params) {
    return request({
        method:'get',
        url: '/api/category/getCategoryList',
        data:params
    })
}