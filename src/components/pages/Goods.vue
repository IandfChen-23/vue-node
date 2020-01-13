<template>
  <div class="masonry">
    <!-- 第一列 -->
    <div class="column">
      <div class="item" v-for="item in goods1" :key="item._id" @click="goodsDeatil(item.ID)">
        <img v-lazy="item.IMAGE1" alt />
        <div class="title">{{item.NAME}}</div>
      </div>
      <!-- more items-->
    </div>
    <!-- 第二列 -->
    <div class="column">
      <div class="item" v-for="item in goods2" :key="item._id" @click="goodsDeatil(item.ID)">
        <img v-lazy="item.IMAGE1" alt />
        <div class="title">{{item.NAME}}</div>
      </div>
    </div>
    
    <!-- 第三列 -->
  </div>
</template>

<script>
import axios from "../../axios/index";
export default {
  name: "goods",
  data() {
    return {
      goods1: [],
      goods2: [],
      goodsId:null
    };
  },
  methods: {
    goodsDeatil(id){
      console.log(id);
      this.goodsId=id;
      this.$router.push({
         name:'GoodsDetails',
          params: {
              goodsId: this.goodsId,
          },
      });
    },
    async getData() {
      await axios.get("/goods/all").then(res => {
        this.goods1 = res.data.res.filter((item, index) => {
          return index < 250;
        });
        this.goods2 = res.data.res.filter((item, index) => {
          return index > 250 && index < 500;
        });
      });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped>
.masonry {
  display: flex;
  flex-direction: row;
}

.column {
  width: 50%;
  display: flex;
  flex-direction: column;
}

.item {
  border: 1px solid #f4f4f4;
  margin: 5px;
}

img {
  width: 100%;
}
.title {
  text-align: center;
  width: 100%;
  font-size: 10px;
}
</style>