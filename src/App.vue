<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>/*左右居中*/
.leftCenter{
  position: absolute;
  left: 50%;
  transform: translate(-50%,0);
  -webkit-transform: translate(-50%,0);
  -moz-transform: translate(-50%,0);
  -ms-transform: translate(-50%,0);
  -o-transform: translate(-50%,0);
}
</style>
