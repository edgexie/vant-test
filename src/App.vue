<template>
  <div id="app">
    <van-button @click="handleClick" type="info">点我出现toast</van-button>
    <van-button @click="handleOpenDialog" type="info" style="margin-left: 16px"
      >点我出现dialog</van-button
    >
    <van-dialog v-model="show" title="Title" show-cancel-button>
      <img src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
    </van-dialog>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      show: false,
    };
  },
  methods: {
    handleClick() {
      this.$toast('ssss');
    },
    handleOpenDialog() {
      this.$dialog.alert({
        message: 'Content',
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
