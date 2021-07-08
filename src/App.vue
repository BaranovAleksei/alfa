<template>
  <div id="app">
    <component :is='layout'>
      <router-view/>
    </component>
  </div>
</template>

<script>
  import MainLayout from '../src/layouts/MainLayout'
  export default {
    computed: {
      layout() {
        return (this.$route.meta.layout || 'main') + '-layout'
      }
    },
    components: { MainLayout }
  }
</script>

<style type="text/css">
  #app {
    width: 100%;
    max-width: 980px;
    margin: 20px auto;
    padding: 20px;
    display: flex;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2)
  }
</style>