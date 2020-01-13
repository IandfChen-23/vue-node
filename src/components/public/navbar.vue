<template>
    <ul class="nav-content">
        <li>
            <router-link to="/home" exact>
                <img src="../../assets/home.png" >
                <p>首页</p>
            </router-link>
        </li>
        <li>
            <router-link to="/sort" exact>
                <img src="../../assets/sort.png" >
                <p>分类</p>
            </router-link>
        </li>
        <li>
            <router-link to="/cart" exact>
                <img src="../../assets/cart.png" >
                <p>购物车</p>
            </router-link>
        </li>
        <li>
            <router-link to="/my" exact>
                <img src="../../assets/me.png" >
                <p>我的</p>
            </router-link>
        </li>

    </ul>
</template>
<script>
export default {
    name:'navbar',
    data() {
        return {
            
        }
    },
}
</script>
<style  scoped >

.nav-content {
  width: 100%;
    position: fixed;
    bottom: 0;
    border-top: 0.025rem solid #eee;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.nav-content li {
  text-align: center;
  height: 60px;
}
.nav-content li img {
  width: 50%;
  height: 50%;
  margin-top: 10px;
}
.nav-content li p {
    margin-top: -8px;
  font-size: 10px;
  color: #666;
}
.router-link-active{
text-decoration: none;
}
a{
text-decoration: none;
}

</style>
