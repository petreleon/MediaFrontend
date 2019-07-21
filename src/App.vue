<template>
  <div id="app">
    <my-header/>
    
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader';
export default {
  name: "app",
  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? "?" : `?page=${pageNum}`;
    }
  },
  data: function() {
    return {
      pages: 10
    };
  },
  components: {
    MyHeader
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
