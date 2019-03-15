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
    <v-layout>
      <div id="home--btns">
        <v-btn large round ripple color="#f7e99b" to="/cost">Cost of Living</v-btn>
        <v-btn large round ripple color="#edbd90" to="/standard">Standard of Living</v-btn>
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
    color: #382d20;
    padding-left: 10%;
    padding-top: 2%;
  }
  &--btns {
    position: absolute;
    bottom: 25%;
    right: 10%;
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

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: portrait) {
  #home {
    &--text {
      display: flex;
      height: 75vh;
      width: 100vw;
    }
    &--btns {
      bottom: 20%;
      left: 40%;
    }
  }

  h1 {
    font-size: 50px;
  }

  p {
    align-self: center;
    margin-top: -5%;
  }
}
</style>