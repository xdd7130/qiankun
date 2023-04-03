<template>
  <div id="app">
    <el-container>
      <el-header style="background-color: #eee;">Header</el-header>
      <el-container  style=" height: calc(100vh - 100px);">
        <el-aside  style="background-color: #545c64;" width="300px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1"><router-link to="/">base</router-link> </el-menu-item>
                <el-menu-item index="1-2" ><router-link to="micro-vue2-app1">microApp1</router-link></el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
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
        <el-main><router-view/><div id="microApp1"></div></el-main>
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
</style>
