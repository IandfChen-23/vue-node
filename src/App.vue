<template>
  <div id="app" @mouseover="OperatingWebsite()">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      currentTime: new Date().getTime() 
    }
  },
  methods: {
    OperatingWebsite() {
      let currentTime = this.currentTime;
      console.log(currentTime, "currentTime");
      let lastTime = new Date().getTime();
      console.log(lastTime, "lastTime");
      let timeOut = 10 * 1000; //设置时间 10分钟
      if (lastTime - currentTime > timeOut) {
        // 未操作页面，跳转登录页面
        this.currentTime = new Date().getTime();
        this.$router.push('./login');
      } else {
        this.currentTime = new Date().getTime(); 
      }
 
      // const truthPathQuery = this.$route.query.type;
      // const truthPath = this.$Base64.decode(truthPathQuery); //点击登录的时候跳转这个地址
    }
  }


}
</script>

<style>
</style>
