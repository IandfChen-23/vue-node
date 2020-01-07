<template>
    <div  >
      <ul class="category" >
        <li v-for="item in categoryList" :key="item.id" >
          <img :src="item.IMAGE" alt="">
          <div class="title">{{item.MALL_CATEGORY_NAME}}</div></li>
      </ul>
      
    </div>
</template>

<script>
    import axios from "../../axios/index";
    export default {
      name:'categorylist',
      data() {
        return {
          categoryList:[]
        }
      },
        methods: {
        async getData(){
           await axios.get('/category/all').then(res=>{
              this.categoryList=res.data.res;
            })
         } 
        },
        created() {
          this.getData()
        },
    }
</script>

<style  scoped>
 .category{
   display: flex;
   justify-content: space-between;
   
 }
 .category li{
   padding: 5px;
   text-align: center;
 }
 img{
    width:3rem;
     height:80px;
   }
   .title{
     font-size: 12px;
   }
</style>