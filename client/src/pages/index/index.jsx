import { useState, useEffect } from "react";
import { View, Text, Button, Swiper } from "@tarojs/components";
import { getUserInfo } from "../../services";
import "./index.less";

export default function Index() {
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   getUserInfo(1)
  // }, [])
  return (
    <View className='index'>
      <View>
        <Swiper>

        </Swiper>
      </View>
      <Text>Hello world!{count}</Text>
      <Button onClick={() => {
        getUserInfo(count)
        setCount(count + 1)
      }}>点击</Button>
    </View>
  );
}
