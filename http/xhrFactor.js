const xhrFactory = ({
  url,
  data,
  method = 'GET'
}) => {
	// uni.navigateTo({
	// 	url: '/pages/index/index'
	// })
  return new Promise(function(resolve, reject) {
    uni.request({
      url,
      header: {
          "saas-Agent": "qj-wemini"
      },
      method: method,
      data,
      success:(res) => {
         resolve(res.data)
      },
      fail: err => {
        reject(err)
      }
    })
  });
}

export default xhrFactory;
