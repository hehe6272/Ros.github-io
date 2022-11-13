<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
// 載入所有 scss 包含 bootstrap...等等
@import './assets/all.scss';

body {
  // background-image: linear-gradient(0deg,rgba(19,21,25,.5),rgba(19,21,25,.5)),url(assets/images/bg.webp);
  // color: #fff;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 50%;
  background-size: cover;
  color: black;
}
p {
  text-align: justify;
}
</style>
