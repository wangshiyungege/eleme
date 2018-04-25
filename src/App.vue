<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
        <div class="tab-item">
             <router-link to='/goods'>商品</router-link>
        </div>
        <div class="tab-item">
             <router-link to='/ratings'>评价</router-link>
        </div>
        <div class="tab-item">
             <router-link to='/seller'>商家</router-link>
        </div>
    </div>
    
  
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
    <detail></detail>
    <cartdetails></cartdetails>
    
    

  </div>
</template>

<script>

import header from './components/header/header.vue'; 
import detail from './components/detail/detail.vue';
import cartdetails from './components/cartDetails/cartdetails';

export default {

  components : {
    'v-header' : header,
     detail,
     cartdetails
     
  },
  created(){
    this.$store.dispatch('getSeller');
  }

}
</script>

<style lang="less" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .tab{
      height: 0.8rem;
      line-height: 0.8rem;
      width: 100%;
      font-size:0.28rem;
      color:rgb(77,85,93);
      border-bottom: 1px solid rgba(7,17,27,0.1);
      display: flex;
      .tab-item{
        flex:1;
        text-align: center;
        a{
          display: block;
          &.router-link-active{
            color:red;
            
          }
        }
      }
  }
  
}
</style>
