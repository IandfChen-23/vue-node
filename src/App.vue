<template>
  <div id="app">
    <router-view/>
    <Nav-bar></Nav-bar>
  </div>
</template>

<script>
import NavBar from './components/public/navbar';
export default {
  name: 'App',
  components:{
    NavBar
  }


}
</script>

<style>
</style>
