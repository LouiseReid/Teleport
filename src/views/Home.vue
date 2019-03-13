<template>
  <v-layout align-start justify-start fill-height id="home--container">
    <div id="home--text">
      <h1>
        How's the quality
        <span>of life where</span>
        <span>you live?</span>
      </h1>
      <p>
        Compare the cost and standard
        <span>of living of cities throughout</span>
        <span>the world</span>
      </p>
    </div>
    <v-layout align-end justify-end row fill-height>
      <div id="home--btns">
        <v-btn large round ripple color="#f7e99b" to="/cost">Cost of Living</v-btn>
        <v-btn large round ripple color="#edbd90" to="/standart">Standard of Living</v-btn>
      </div>
    </v-layout>
  </v-layout>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#home {
  &--container {
    background-image: url("../assets/home_background.png");
    background-size: cover;
    background-position-y: 100%;
  }
  &--text {
    padding-left: 10%;
    padding-top: 2%;
  }
  &--btns {
    padding-right: 10%;
    padding-bottom: 25%;
  }
}

h1 {
  font-size: 60px;
  & span {
    display: list-item;
    list-style: none;
  }
}

p {
  margin-top: 5%;
  font-size: 15px;
  & span {
    display: list-item;
    list-style: none;
  }
}
</style>