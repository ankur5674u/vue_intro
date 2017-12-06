<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
      
      <ul class="">
        <li class="active"><router-link to="/" exact>Home</router-link></li>
       <li><router-link to="/About">AboutUS</router-link></li>
       <li><router-link to="/ContactUS">ContactUS</router-link></li>
       <li><router-link to="/Friend">Friend</router-link></li>
       <li><router-link to="/UserManagement">User Management</router-link></li>
       <li><router-link to="/Nasa">Nasa Api Call</router-link></li>
      </ul>
    <h1>gfhvfghg</h1>
    <router-view></router-view>
    <footer class="main-footer ng-cloak" style="background-color: black !important;">
        <h1>Welcome Cash Analysis</h1>
    </footer>


  </div>
  
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

