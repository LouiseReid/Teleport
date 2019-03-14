<template>
  <div id="view">
    <router-view>
      <v-btn slot="nav" to="/" large icon flat outline color="green">
        <v-icon color="green" large>home</v-icon>
      </v-btn>
    </router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  font-family: "Overpass", sans-serif;
}

#view {
  height: 100vh;
  widows: 100vw;
}
</style>