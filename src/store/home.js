// 引入请求接口文件
import {getWebData, getHitokoto, parseUrl} from '@/api'

const state = {
	// 仓库首页网页数据
	webData: {},
	// 解析链接
	urlInfo: {},
	// 仓库一言数据
	Hitokoto: ""
};
const mutations = {
	// 设置仓库首页网页数据
	GETDATA(state, data){
		state.webData = data;
		document.title = state.webData.webTitle;
		// console.log(data)
	},

	// 解析链接
	PARSEURL(state, data){
		state.urlInfo = data; // {title, icon}
	},

	// 设置仓库一言数据
	GETHITOKOTODATA(state, data){
		state.Hitokoto = data;
	}
};
const actions = {
	// 获取首页网站数据
	async getData({commit}, linkType){
		let result = await getWebData(linkType);
		// console.log("=====")
		// console.log(result)
		if (result['code'] === 1){
			// console.log(result.data)
			commit("GETDATA", result.msg);
			return Promise.resolve('ok');
		}else {
			return Promise.reject(new Error("获取主页数据失败~"));
		}
	},

	// 解析链接
	async parseUrl({commit}, url){
		let result = await parseUrl(url);
		if (result['code'] === 1){
			commit("PARSEURL", result.msg);
			return Promise.resolve('ok');
		}else {
			return Promise.reject(new Error("解析链接失败~"));
		}
	},

	// 获取一言
	async getHitokotoData({commit}){
		let result = await getHitokoto();
		if (result['code'] === 1){
			commit("GETHITOKOTODATA", result.msg.hitokoto);
			return Promise.resolve('ok');
		}else {
			return Promise.reject(new Error("获取一言失败~"));
		}
	},

	// 获取天气
};
const getters = {
	navList(){
		return state.webData['navList'];
	},
	hitokoto(){
		return state.Hitokoto;
	},
	urlInfo(){
		return state.urlInfo;
	}
};

export default {
	state,
	mutations,
	actions,
	getters
}
