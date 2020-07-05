<template>
  <div class="article-intro-wrap">
    <div class="article-title">{{article.title}}</div>
    <div class="article-info">
      <div class="info-item" v-if="article.tag!=''">
        <el-tag :type="article.tagType">{{article.tag}}</el-tag>
      </div>
      <div class="info-item">
        <i class="el-icon-time"></i>
        {{article.createdTime}}
      </div>
      <div class="info-item">
        <i class="el-icon-reading"></i>
        {{article.category}}
      </div>
      <div class="info-item">
        <i class="el-icon-coffee-cup"></i>
        {{article.hotCount}}
      </div>
    </div>
    <div class="article-intro">{{article.intro}}</div>
    <div class="article-btn-wrap">
      <div class="more">
        查看更多
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleIntro",
  props: {
    article: {
      type: Object,
      default: () => {
        return {
          tag: "置顶",
          tagType: "danger",
          title: "你今天学习了吗",
          createdTime: "2020-07-05",
          category: "前端学习",
          hotCount: 666,
          intro: "我要好好学习。"
        };
      }
    }
  },
  data: () => {
    return {};
  },
  methods: {}
};
</script>

<style >
/* 覆盖样式 */
.el-tag {
  height: 26px;
  line-height: 26px;
}
.article-intro-wrap {
  box-sizing: border-box;
  padding: 0 10px;
  background-color: #fff;
  border-bottom: 1px solid #d1cccc;
  margin: 10px 0;
  box-shadow: 0 0 5px #000;
  border-radius: 5px;
}
.article-title {
  min-height: 60px;
  font: 24px bold;
  line-height: 60px;
  width: 100%;
  color: #1890ff;
}
.article-info {
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  font-size: 14px;
  color: #d1cccc;
}
.article-intro {
  min-height: 150px;
  padding-bottom: 10px;
  font-size: 16px;
}
.article-btn-wrap {
  height: 30px;
  font-size: 16px;
  line-height: 30px;
  box-sizing: border-box;
  color: #1890ff;
}
.more {
  float: right;
  cursor: pointer;
}
</style>