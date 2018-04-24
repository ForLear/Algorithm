import jsonp from '@/common/js/jsonp'
import { commonParams, options } from './config'

export function getMaps () {
    // const url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDISIySawILeW2QUGjU4BfN9t3GLzhsL9s&callback=initMap'
    const url = 'https://maps.googleapis.com/maps/api/js'
    const data = Object.assign({},commonParams,{
        // callback: 'initMap'
    })

    return jsonp(url,data,options)
}