<template>
  <div id="app">
    <tab></tab>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import tab from "./base/tab.vue";
export default {
    name: "App",
    components: {
        tab
    }
};
</script>
<style>
* {
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
}

ul {
    list-style: none;
}

.content {
    position: fixed;
    top: 40px;
    bottom: 50px;
    width: 100%;
    overflow: auto;
}
</style>
