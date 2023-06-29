<template>
  <div>
    <van-tabbar v-model="active1" route v-show="$route.meta.showfooter">
      <van-tabbar-item icon="gem-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="notes-o" to="/cute">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/cart" :badge="badge">购物车</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/my">我</van-tabbar-item>
    </van-tabbar>
    <router-view />
  </div>
</template>
<script setup>
import bus from './utils/bus'
import { ref, onMounted } from 'vue'

let active1 = ref(0)
let badge = ref(0)

onMounted(() => {
  bus.on("lowerRight", value => {
    badge.value = value
  });
})
</script>
<style lang="less" scoped>
.van-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 44;
}
</style>
