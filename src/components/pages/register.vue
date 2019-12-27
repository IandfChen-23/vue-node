<template>
  <div>
    <van-nav-bar title="用户注册" left-text="返回" left-arrow @click-left="goback"></van-nav-bar>
    <div class="register-panel">
      <van-field v-model="username" label="用户名" icon="clear" placeholder="请输入用户名" required></van-field>
      <van-field type="password" v-model="password" label="用户名" placeholder="请输入用密码" required></van-field>
    </div>
    <div class="register-button">
      <van-button type="primary" size="large" @click="register">马上注册</van-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "register",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    goback() {
      this.$router.push("/");
    },
    register() {
      axios.post({
          url: "http://localhost:3000/user/register",
          methods: "post",
          data: {
            username: this.username,
            password: this.password
          }
        }).then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style  scoped>
.register-panel {
  width: 96%;
  border-radius: 5px;
  margin: 20px auto;
}
</style>