<template>
  <div>
    <v-progress-circular v-if="cities.length === 0" indeterminate color="#829fce"/>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs4 v-for="(city, index) in cities" :key="index" >
          <v-card  class="primary">
            <v-card-text primary-title>
              <div>
                <h3 class="mb-0 text-capitalize">{{city.name}}</h3>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import EventService from "../services/EventService.js";
export default {
  data() {
    return {
      cities: []
    };
  },
  mounted() {
    EventService.getScores()
      .then(res =>
        res.map(city => ({
        name: city.config.url.split('/').slice(-3)[0].replace('slug:', '').replace(/-/g, ' '),
          categories: city.data.categories,
          summary: city.data.summary.replace(/<\/?[^>]+(>|$)/g, "")
        }))
      )
      .then(cities => (this.cities = cities))
  }
};
</script>

<style scoped>

h3 {
    text-align: center!important
}
</style>