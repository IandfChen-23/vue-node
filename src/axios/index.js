const service = axios.create({
    baseURL: '/',
    // baseURL: '/',
    timeout: 10000
  })
  service.interceptors.request.use(config => {
    const token = localStorage.getItem('UserToken');
    if (token) {
      /*Bearer是JWT的认证头部信息*/
      config.headers.common['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },error => {
    return Promise.reject(error);
  });
  service.interceptors.response.use(
    response => {
      let data = response.data;
      if (!data.data) {
        //   登陆成功的回调地址
        return data;
      } else {
        return data;
      }
    },
    error => {
      if(error.response) {
        switch (error.response.status){
          case 401:
            /*返回401，清空token信息，关闭socketio，并跳转到登陆页*/
            let userInfo = JSON.parse(localStorage.getItem("HappyChatUserInfo"));
            socketWeb.emit('logout', userInfo.user_id)
            localStorage.removeItem("HappyChatUserToken");
            localStorage.removeItem("HappyChatUserInfo");
            setTimeout(function() {
              router.push({
                path: "/login",
                query: {redirect: router.currentRoute.fullPath}
              });
            }, 500);
        }
      }
      return Promise.reject(error.response)   // 返回接口返回的错误信息
    }
  );