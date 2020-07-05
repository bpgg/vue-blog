<template>
  <div class="login-wrap">
    <el-row type="flex" justify="center" align="middle">
      <el-col :xs="18" :sm="18" :md="16" :lg="16" :xl="14">
        <el-input placeholder="账号" prefix-icon="el-icon-s-custom" v-model="username"></el-input>
        <el-input placeholder="密码" prefix-icon="el-icon-lock
" v-model="password"></el-input>
        <div class="state-box">
          <el-checkbox v-model="isRemeberPwd">记住密码</el-checkbox>
          <el-button @click="login">登录</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: () => {
    return {
      username: "",
      password: "",
      isRemeberPwd: true
    };
  },
  methods: {
    login() {
      this.$router.push("/Home");
    }
  }
};
</script>

<style  scoped>
.login-wrap {
  height: 100vh;
  padding: 0;
  margin: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-row,
.el-col {
  padding: 0;
  margin: 0;
}
.el-input {
  margin-bottom: 20px;
}
.state-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>