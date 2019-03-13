<template>
  <div>
    <v-progress-circular v-if="cities.length === 0" indeterminate color="#829fce"/>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs3 v-for="(city, index) in cities" :key="index">
          <v-card class="ma-2">
            <v-card-text primary-title class="pa-2">
              <h3 class="text-capitalize text-sm-center">{{city.name}}</h3>
            </v-card-text>
            <v-card-text
              v-for="(category, index) in city.categories"
              :key="index"
              class="pa-0 mb-0"
            >
              <p
                class="mb-1 text-sm-center"
                secondary-title
              >{{category.name}}: {{category['score_out_of_10'].toFixed(2)}}</p>
            </v-card-text>
            <v-card-text class="font-weight-bold">
              <p class="text-md-center">Teleport City Score: {{city.score.toFixed(2)}}</p>
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
          name: city.config.url
            .split("/")
            .slice(-3)[0]
            .replace("slug:", "")
            .replace(/-/g, " "),
          categories: city.data.categories,
          score: city.data["teleport_city_score"]
        }))
      )
      .then(cities => (this.cities = cities));
  }
};
</script>

<style scoped>

</style>