<template>
  <div id="app">
    <button @click="handleClick">点我出现toast</button>
    <button @click="handleOpenDialog">点我出现dialog</button>
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
