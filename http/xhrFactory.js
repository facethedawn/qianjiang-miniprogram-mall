// const xhrFactory = ({
//   url,
//   data,
//   method = 'GET',
//   header
// }) => {
// 	// uni.navigateTo({
// 	// 	url: '/pages/index/index'
// 	// })
//   return new Promise(function(resolve, reject) {
//     uni.request({
//       url,
//       header: {
//         ...header,
//         "saas-Agent": "qj-wemini"
//       },
//       method: method,
//       data,
//       success:(res) => {
// 				if(res.data.errorCode === 'nologin') {
// 					uni.navigateTo({
// 						url: '/pages/login/login'
// 					})
// 				}
//         resolve(res.data)
//       },
//       fail: err => {
//         reject(err)
//       }
//     })
//   });
// }

// export default xhrFactory;

// import {app} from "../main.js";

// const xhrFactory = app.$http.create({
//   baseURL: 'https://some-domain.com/api/',
//   timeout: 1000,
//   headers: {'X-Custom-Header': 'foobar'}
// });


// xhrFactory.interceptors.request.use(function (config) {
//     // 在发送请求之前做些什么
// 		console.log('请求拦截', config);
//     return config;
//   }, function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
//   });
	
	
// export default xhrFactory;