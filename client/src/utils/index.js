import Taro from "@tarojs/taro";

const prefix = 'http://127.0.0.1:7001'

export function request(url, data) {
  return Taro.request({ url: `${prefix}${url}`, data });
}
