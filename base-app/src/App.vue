<template>
  <div id="app">
    <el-container>
      <el-header class="header">微服务</el-header>
      <el-container class="container">
        <el-aside class="aside">
          <el-menu
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>类目一（qiankun）</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一：VUE</template>
                <el-menu-item index="1-1"><router-link to="/">base</router-link> </el-menu-item>
                <el-menu-item index="1-2" ><router-link to="/micro-vue2-app1">microApp1</router-link></el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组二：REACT">
                <el-menu-item index="1-3"><router-link to="/micro-react-app2">microApp2</router-link></el-menu-item>
                <el-menu-item index="1-4"><router-link to="/micro-react-app3">microApp3(history)</router-link></el-menu-item>

              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title"><router-link to="/iframe">类目二（iframe）</router-link></span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main><router-view/><div id="microApp1"></div><div id="microApp2"></div><div id="microApp3"></div></el-main>
      </el-container>
    </el-container>
    <!-- <router-link to="/">base</router-link> |
    <router-link to="micro-vue2-app1">microApp1</router-link> -->
    <!-- <img src="./assets/logo.png"> -->
    <!-- <div id="microApp1"></div> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; */
  color: #2c3e50;
  height: 100%;
  /* margin-top: 60px; */
}
.header{
  background: #333;
  color: #fff;
  font-size: 18px;
  line-height: 60px;
}
.container{
  height: calc(100vh - 60px);
}
.aside{
  background-color: #545c64;
  width: 300px;
}
</style>
