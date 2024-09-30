<template>
  <div id="app">
    <AppHeader /> 
    <div class="container content">
      <router-view></router-view>
    </div>
    <AppFooter /> 
  </div>
</template>

<script>
import AppHeader from './components/Header.vue';
import AppFooter from './components/Footer.vue'; 

export default {
  name: 'App',
  components: {
    AppHeader, 
    AppFooter  
  }
}
</script>