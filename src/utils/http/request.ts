const request = (config: any) => {
  if (!config.data) {
    config.data = {};
  }
  config.method.toUpperCase();
  let promise = new Promise(function (resolve, reject) {
    uni.request({
      ...config,
      success: res => {
        resolve(res.data);
      },
      fail: err => {
        reject(err);
      }
    });
  });
  return promise;
};

export const get = <T>(url: string, param?: T, header?: object) => {
  const config = {
    url,
    header,
    param,
    method: "GET"
  };
  return request(config);
};

export const post = <T>(url: string, data?: T, header?: object) => {
  const config = {
    url,
    header,
    data,
    method: "POST"
  };
  return request(config);
};

export default request;
