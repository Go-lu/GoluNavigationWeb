// 引入请求接口文件
import { getWeather } from '@/api'

const state = {
    // 天气数据
    weatherInfo: {isEmpty: true},
};
const mutations = {
    // 设置天气数据
    GETWEATHER(state, data){
        state.weatherInfo = data;
        state.weatherInfo.isEmpty = false;
        // console.log(data)
    },
};
const actions = {
    // 获取天气数据
    async getWeather({commit}, weatherLocation){
        let result = await getWeather(weatherLocation);
        if (result['code'] === 1){
            // console.log(result.data)
            commit("GETWEATHER", result.msg);
            return Promise.resolve('ok');
        }else {
            return Promise.reject(new Error("获取天气数据失败~"));
        }
    },
};

export default {
    state,
    mutations,
    actions,
}
