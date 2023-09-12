<template>
    <img alt="Vue logo" src="../assets/logo.png"> 
    <h1>About Page !!</h1>
    <p>Something new is comming here</p>
    <p>Go back to <a href="/home">Home Page</a></p>
  </template>
  
  <script> 
  export default {
    name: 'AboutView',
    components: {
    },
    beforeMount(){
        document.title = "EvergreenFarm | About Page"
    }
  }
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
  