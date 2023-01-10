import axios from 'axios'
import {serve} from "@/config/url";



export function request(config) {
    let headers = {
        // "Content-Type": config.Content_Type || "application/json",
    }
    return new Promise((resolve,reject) => {
        let params = {
            url: serve + config.url,
            method: config.method || 'post',
            dataType: config.dataType || 'json',
            headers: headers,
            timeout: config.timeout || 10000,
            params:config.params || {},
            data:config.data || {}
        }
        axios(params).then(function (response) {
               resolve(response.data)
            })
            .catch(function (error) {
                reject(error)
            });

    })
}


// 请求拦截器 (用来给每个请求的Request Header添加数据，常用来添加token等信息)
axios.interceptors.request.use(
    config => {
        config.headers.token = 'xxxxxxxxxxxxxxxxxxxxx666'
        return config
    },
    error => {
        return Promise.error(error)
    })


// 响应拦截器 (将每个请求返回的数据进行处理，比如根据返回的状态码做一些操作等)
axios.interceptors.response.use(response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
        if (response.data.code === 511) {
            // 未授权调取授权接口
        } else if (response.data.code === 510) {
            // 未登录跳转登录页
        } else {
            return Promise.resolve(response)
        }
    } else {
        return Promise.reject(response)
    }
}, error => {
    // 我们可以在这里对异常状态作统一处理
    if (error.response.status) {
        // 处理请求失败的情况
        // 对不同返回码对相应处理
        return Promise.reject(error.response)
    }
})

