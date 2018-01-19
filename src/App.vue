<template>
    <div id="app">
        <h1>****</h1>
        <router-view></router-view>
    </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
    html {
        line-height: 1.15; /* 1 */
        -ms-text-size-adjust: 100%; /* 2 */
        -webkit-text-size-adjust: 100%; /* 2 */
    }

    body {
        margin: 0;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }

    body {
        -webkit-overflow-scrolling: touch;
        overflow-scrolling: touch;
    }
</style>