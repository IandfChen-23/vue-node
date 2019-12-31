<template>
  <div>
    <van-nav-bar title="用户注册" left-text="返回" left-arrow @click-left="goback"></van-nav-bar>
    <div class="register-panel">
      <van-field v-model="username" label="用户名" icon="clear" placeholder="请输入用户名" required></van-field>
      <van-field type="password" v-model="password" label="用户名" placeholder="请输入用密码" required></van-field>
    </div>
    <div class="register-button">
      <van-button type="primary" size="large" @click="register" :loading='loading'>马上注册</van-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);
export default {
  name: "register",
  data() {
    return {
      username: "",
      password: "",
      loading:false,
    };
  },
  methods: {
    goback() {
      this.$router.push("/login");
    },
    register() {
        if(this.username == ''){
          this.$toast("用户名不能为空");
          return false;
        }
        if(this.password == ''){
          this.$toast("密码不能为空");
          return false;
        }
      this.loading=true;
      const that=this;
      axios.post("http://localhost:3000/user/register",{
            userName: this.username,
            password: this.password
          }
        ).then(res => {
          console.log(res);
          if(res.data.code===200){
              Toast.success(res.data.message)
              setTimeout(function(){
                that.$router.push('/login')
              },500)
              
          }else{
              this.loading=false;
              Toast.fail('注册失败')
          }
        }).catch(err => {
          this.loading=false;
          Toast.fail('注册失败')
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