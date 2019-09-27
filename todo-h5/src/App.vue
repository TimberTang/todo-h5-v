<template>
  <div id="app">
    <transition>
      <router-view/>
    </transition>
  </div>
</template>

<style lang='less'>
  #app {
      -webkit-font-smoothing: antialiased; // 抗锯齿渲染
      -moz-osx-font-smoothing: grayscale;
      max-width: 720px;
      margin: 0 auto;
      background-color: white;
      height: 100%;
      color: #333;
      position: relative;
    }
    html, body {
        height: 100%;
        -webkit-overflow-scrolling: touch;
    }
    /** {*/
    /*    font-family: 'PingFangSC-Light', 'Avenir', Helvetica, 'Microsoft Yahei', Arial, sans-serif;*/
    /*}*/
    button {
        border: none;
        background-color: transparent;
    }
</style>
