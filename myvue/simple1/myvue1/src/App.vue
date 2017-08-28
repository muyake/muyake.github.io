
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>   
   <firstcomponent></firstcomponent>
   <ul>
     <li>
       <router-link to='/first'>点我跳转到第一页</router-link>
       <router-link to='/second'>点我跳转到第二页</router-link>
     </li>
   </ul>
   <router-view class='view'></router-view>
  </div>
</template>

<script>
import firstcomponent from './components/firstcomponent.vue'
export default {
  name:'App',
  data(){
    return{
      msg:'hello App!'
    }
  },
  components:{firstcomponent}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
