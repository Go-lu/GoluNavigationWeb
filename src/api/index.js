// import axios from 'axios'
import requests from "./request";

//对外暴露一个函数，只要外部调用这个函数，就想服务器发起ajax请求
// 获取展示数据
export const getWebData = (linkType) => requests({url: `/getAllWebData/${linkType}`,method: "GET"});
// 根据id查询站点信息
export const getWebDataById = (id) => requests({url: `/getWebById/${id}`,method: "GET"});
// 修改站点信息
export const updateWebData = (navDatabaseDTO) => requests({url: `/update`,method: "PUT",data:navDatabaseDTO});
// 添加站点信息
export const addWebData = (navDatabaseDTO) => requests({url: `/add`,method: "POST",data:navDatabaseDTO});
// 删除站点信息
export const deleteWebData = (id) => requests({url: `/delete/${id}`,method: "DELETE"});

// 解析url url={}
export const parseUrl = (url) => requests({url: `/parseUrl`,method: "POST", data: url});

//获取一言
export const getHitokoto = () => requests({url:"/hitokoto",method:"GET"})

// 身份验证
export const getAuth = (auth) => requests({url:"/auth",method:"POST", data: auth});

// 获取ip地址
export const getIp = () => requests({url:"https://api.ipify.org?format=json",method:"GET"});

// 根据ip地址获取经纬度
export const getLocationByBaDu = (ip) => requests({url:`/location?ip=${ip}`,method:"GET"});

// 获取天气数据
export const getWeather = (locationInfo) => requests({url:'/weather',method:"POST", data: locationInfo});
// export const getHitokoto = () =>axios({url:"https://v1.hitokoto.cn/",method:"GET"})

// 添加展示数据

// 删除展示数据

// 修改展示数据


