const xhrFactory = ({
  url,
  data,
  method = 'GET',
  header
}) => {
	// uni.navigateTo({
	// 	url: '/pages/index/index'
	// })
  return new Promise(function(resolve, reject) {
    uni.request({
      url,
      header: {
        ...header,
        "saas-Agent": "qj-wemini"
      },
      method: method,
      data,
      success:(res) => {
				if(res.data.errorCode === 'nologin') {
					uni.navigateTo({
						url: '/pages/login/login'
					})
				}
        resolve(res.data)
      },
      fail: err => {
        reject(err)
      }
    })
  });
}

export default xhrFactory;
