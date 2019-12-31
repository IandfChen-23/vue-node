<template>
  <div>
    <van-nav-bar title="用户登陆" ></van-nav-bar>
    <div class="register-panel">
      <van-field v-model="username" label="用户名" icon="clear" placeholder="请输入用户名" required></van-field>
      <van-field type="password" v-model="password" label="用户名" placeholder="请输入用密码" required></van-field>
    </div>
    <div class="register-button">
      <van-button type="primary" size="large" @click="login" :loading='loading'>登陆</van-button>
      <div style="padding:20px 0">
        <van-button  size="large" @click="register" >注册</van-button>
      </div>
      
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      loading:false,
    };
  },
  created() {
    // if(sessionStorage.userInfo){
    //   Toast.success('你已经登录')
    //   this.$router.push('/home')
    // }
  },
  methods: {
    register(){
      this.$router.push('/register')
    },
    login() {
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
      axios.post("http://localhost:3000/user/login",{
            userName: this.username,
            password: this.password
          }
        ).then(res => {
          console.log(res);
          if(res.data.code===200&&res.data.message==='success'){
              sessionStorage.userInfo={userName:this.username}
              Toast.success(res.data.message)
              setTimeout(function(){
                that.$router.push('/home')
              },500)
              
          }else{
              this.loading=false;
              Toast.fail(res.data.message)
          }
        }).catch(err => {
          this.loading=false;
          Toast.fail(res.data.message)
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