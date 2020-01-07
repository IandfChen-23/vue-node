<template>
    <div  >
      <ul class="good" >
        <li v-for="item in goods" :key="item._id" >
          <img :src="item.IMAGE1" alt="">
          <div class="title">{{item.NAME}}</div></li>
      </ul>
      
    </div>
</template>

<script>
    import axios from "../../axios/index";
    export default {
      name:'goods',
      data() {
        return {
          goods:[]
        }
      },
        methods: {
        async getData(){
           await axios.get('/goods/all').then(res=>{
              this.goods=res.data.res
            })
         } 
        },
        created() {
          this.getData()
        },
    }
</script>

<style scoped>
	.good li:nth-child(2n+1){clear: both;}
	li{width: 50%;float: left;text-align: center;line-height: 1.7;}
    li img{
        width: 80%
    }
    .title{
        text-align: center;
        width: 60%;
        font-size: 14px;
    }
</style>