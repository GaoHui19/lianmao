<template>
<van-cell v-for="item in list" :key="item" :title="item" />
<!-- 回到顶部包裹 -->
<van-back-top />  
  <!-- 搜索 -->
  <header>
    <van-search placeholder="请输入搜索关键词" @click="gotosearch" />
    <van-icon name="service-o" />
  </header>

  <!-- 轮播图 -->
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="bannerList1 in banners" :key="bannerList1.id">
      <img :src="bannerList1.imgUrl" alt="轮播图" />
      <div class="dot"></div>
    </van-swipe-item>
  </van-swipe>

  <!-- 卡片导航 -->
  <van-swipe :loop="false" :width="300" show-indicators="false">
    <van-swipe-item v-for="bannerList2 in banners2" :key="bannerList2.id">
      <img :src="bannerList2.imgUrl" alt="卡片">
    </van-swipe-item>
  </van-swipe>

  <!-- nav导航 -->
  <van-grid :column-num="5">
    <van-grid-item v-for="value in 5" :key="value" icon="photo-o" text="文字" />
  </van-grid>



  <!-- tab 切换 -->
  <van-tabs v-model:active="active" animated>
    <van-tab v-for="(item, index) in tabList" :title="item.title" :key="index">
      <div class="product-list">
        <div v-for="(dataItem, dataIndex) in item.list" :key="dataIndex" class="product-item">
          <div class="product-content">
            <img :src="dataItem.img" alt="商品图片" class="product-image" />
            <div class="product-info">
              <p class="product-title">{{ dataItem.title }}</p>
              <div class="product-bottom">
                <p class="product-price">
                  价格：<span class="price-capsule">{{ dataItem.price }}</span>
                </p>
                <button class="add-to-cart"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-tab>
  </van-tabs>



  
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getPageData } from "../api/index";
import { Swipe, SwipeItem, Search, Icon, Tab, Tabs, Grid, GridItem, BackTop } from "vant";

let banners = ref([]);
let banners2 = ref([]);
let tabList = ref([]);


const fetchData = async () => {
  try {
    const response = await getPageData('/home', { message: '123' });
    banners.value = response.banners;
    banners2.value = response.banners2;
    tabList.value = response.tabList;
    console.log(response)
  } catch (error) {
    console.log(error);
  }
};

onMounted(fetchData);
</script>

<style>
/* 定义一下滑动块的图片大小 */
.van-swipe-item img {
  width: 260px;
  height: 100px;
  border-radius: 12px;
}

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


.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 12px;
}

.product-item {
  width: calc(50% - 10px);
  margin-bottom: 20px;
}

.product-content {
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: auto;
}

.product-info {
  padding: 10px;
}

.product-title {
  font-weight: bold;
}

.product-price {
  color: #000;
}

.add-to-cart {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #43a047;
  color: #fff;
  border: none;
  border-radius: 5px;
}
.product-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.price-capsule {
  padding: 2px 6px;
  background-color: #f44336;
  color: #fff;
  border-radius: 10px;
}

.add-to-cart {
  width: 40px;
  height: 40px;
  background-color: #f44336;
  border-radius: 50%;
  border: none;
}
</style>
