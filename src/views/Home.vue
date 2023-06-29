<template>
    <header>
        <van-search placeholder="请输入搜索关键词" @click='gotosearch' />
        <van-icon name="service-o" />
    </header>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="banner in banners" :key="banner.id">
            <img :src="banner.imgUrl" alt="轮播图" />
            <div class="dot"></div>
        </van-swipe-item>
    </van-swipe>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { getHomeData } from '../api/index';
import { Swipe, SwipeItem } from 'vant';

let banners = ref([]);

let params = { message: 123 };
getHomeData(params)
    .then(response => {
        banners.value = response.banners;
        console.log(response.banners);
    })
    .catch(error => {
        console.log(error);
    });

const gotosearch = () => {
    // 处理点击搜索事件的逻辑
}

</script>
 
  
<style>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    text-align: center;
    position: relative;
}

.my-swipe .van-swipe-item img {
    width: 100%;
    height: 100%;
}

.dot {
    position: absolute;
    left: 50%;
    bottom: 10px;
    transform: translateX(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
}

header {
    width: 100vw;
    height: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    z-index: 22;
    margin-top: 20px;
}

.van-search {
    width: 80vw;
    height: 40px;
}

i {
    font-size: 30px;
}
</style>
  