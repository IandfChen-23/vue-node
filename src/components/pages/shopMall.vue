<template>
    <div>
        <div class="search-bar">
            <van-row>
             <van-col span='3' class="locate"><van-icon name="location"/></van-col>
             <van-col span='16'><input type="text" class="search-input"></van-col>
             <van-col span='5' style="text-align:center"><van-button size="small" >搜索</van-button> </van-col>
            </van-row>
        </div>
        <div class="swiper-area">
            <van-swipe :autoplay="3000" indicator-color="white" >
                <van-swipe-item v-for="(image, index) in swiperPic" :key="index">
                    <img :src='image' style="width:100%;height:12rem" />
                </van-swipe-item>
            </van-swipe>
        </div>
 

    </div>
</template>

<script>
    export default {
        data() {
            return {
                swiperPic:[
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                    'https://img.yzcdn.cn/vant/apple-3.jpg'],
                
            }
        },
    }
</script>

<style  scoped>
   .locate{
    text-align: center;
    font-size: 20px;
   }
   .search-bar{
       height: 2.2rem;
       background-color: #e5017d;
       line-height: 2.2rem;

   }
   .search-input{
        width:100%;
        height: 1.3rem;
        border-top:0px;
        border-left:0px;
        border-right:0px;
        border-bottom:1px solid #fff !important;
        background-color:#fff;
        color:#fff;
    }
</style>

