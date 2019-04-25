<template>
  <div id="app">
    <nav class="navbar bg-light navbar-light mb-5">
      <router-link :to="{name: 'home'}" class="navbar-brand">Home</router-link>
      <ul class="navbar-nav">
    <li class="nav-item">
      <router-link :to="{name: 'addcoolwords'}">Add cool words</router-link>
    </li>
  </ul>
    </nav>
    <main class="container">
      <transition name="custom-classes-transition" enter-active-class="animated tada"
        leave-active-class="animated bounceOutRight" mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>


<style>
  body {
    background-image: radial-gradient( circle 229px at 11.1% 19.3%,  rgba(187,240,228,1) 0%, rgba(156,216,223,1) 90% );
    margin: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
    font-family: 'Noto Sans', sans-serif;
    min-height: 100vh;
  }

  h1 {
    font-family: 'Fjalla One', sans-serif;
    font-size: 4em;
    font-weight: 500;
    background-image: radial-gradient( circle 858.6px at 10% 20%, rgba(118,5,54,1) 0%, rgba(238,129,167,1) 90% );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .ingress {
    font-size: 1.5em;
  }

  
</style>