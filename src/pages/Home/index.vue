<template>
  <div>
    <Header></Header>

    <el-row :gutter="20">
      <!-- 占位 -->
      <!-- <el-col :xs="0" :sm="2" :md="2" :lg="2" :xl="2">
        <div class="category-list"></div>
      </el-col>-->
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <ArticleIntro />
        <ArticleIntro />
        <ArticleIntro />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Header from "../../components/Header";
import ArticleIntro from "../../components/ArticleIntro";
export default {
  name: "Home",
  data: () => {
    return {};
  },
  components: {
    Header,
    ArticleIntro
  }
};
</script>

<style >
.el-row {
  margin: 0 !important;
}
.category-list {
  background: red;
  height: 80px;
}
</style>