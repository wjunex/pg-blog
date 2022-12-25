import axios from 'axios'
import {serve} from "@/config/url";


export function request(config) {
    let headers = {
        // "Content-Type": config.Content_Type || "application/json",
    }

    /*处理get请求，将传入的data拼接在url后*/
    if(config.method === 'get') {
        let params = [];
        for(let key in config.data) {
            params.push(`${key}=${config.data[key]}`)
        }
        config.url = `${config.url}${params.length > 0 ? '?' : ''}${params.join('&')}`
    }


    return new Promise((resolve,reject) => {
        axios({
            url: serve + config.url,
            data: config.data || {},
            method: config.method || 'post',
            // dataType: config.dataType || 'json',
            headers: headers,
            // timeout: config.timeout || 10000,
        }).then(function (response) {
               resolve(response.data)
            })
            .catch(function (error) {
                reject(error)
            });

    })
}

