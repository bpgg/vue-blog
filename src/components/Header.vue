<template>
  <div class="header-wrap">
    <el-row>
      <el-col :xs="4" :sm="2" :md="2" :lg="2" :xl="2">
        <div class="logo">
          <img src="../assets/logo.png" alt />
        </div>
      </el-col>
      <el-col :xs="0" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="nav">
          <div
            v-for="(navItem,index) in nav"
            :class="[{active:index==currentNavIndex},'nav-item']"
            :key="navItem.id"
            @click="swapNavItem(index)"
          >{{navItem.name}}</div>
        </div>
      </el-col>
      <el-col :xs="14" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="search-bar">
          <el-input placeholder="请输入内容" v-model="searchWord">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
      </el-col>
      <!-- 移动端菜单 -->
      <el-col :xs="2" :sm="0" :md="0" :lg="0" :xl="0" :offset="1">
        <div class="mini-menu">
          <i class="el-icon-s-fold"></i>
        </div>
      </el-col>
      <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
        <div class="user-info">
          <el-avatar :size="30" :src="circleUrl"></el-avatar>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => {
    return {
      currentNavIndex: 0,
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      nav: [
        {
          id: 1,
          name: "博客"
        },
        {
          id: 2,
          name: "视频"
        }
      ],
      searchWord: ""
    };
  },
  methods: {
    swapNavItem(index) {
      this.currentNavIndex = index;
    }
  }
};
</script>

<style lang="scss">
.header-wrap {
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  height: 60px;
  padding: 10px;
  .logo {
    height: 40px;
  }
  .logo img {
    height: 40px;
    width: auto;
  }
  .nav {
    display: flex;
    height: 40px;
    align-items: center;
  }
  .nav-item {
    width: 80px;
    margin: 10px;
  }
  .active {
    border-bottom: 2px solid green;
  }
  .mini-menu {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    font-size: 30px;
    color: #41b883;
    cursor: pointer;
  }

  .search-bar {
    height: 40px;
  }
  .user-info {
    height: 40px;
    box-sizing: border-box;
    padding: 5px 0;
    float: right;
  }
}
</style>