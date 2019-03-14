<template>
  <div>
    <v-progress-circular v-if="cities.length === 0" indeterminate color="#829fce"/>
    <v-container grid-list-md v-else>
        <div>
            <button @click="sortHighest">Highest Score &uarr;</button>
            <button @click="sortLowest">Lowest Score &darr;</button>
        </div>
      <v-layout row wrap>
        <v-flex xs3 v-for="(city, index) in cities" :key="index">
          <v-card class="ma-2" color="#d0d7ca">
            <v-card-text primary-title class="pa-2">
              <h3 class="text-capitalize text-sm-center">{{city.name}}</h3>
            </v-card-text>
            <v-card-text
              v-for="(category, index) in city.categories"
              :key="index"
              class="pa-0 mb-0"
            >
              <p class="mb-1 text-sm-center" secondary-title>
                <strong>{{category.name}}:</strong>
                {{category['score_out_of_10'].toFixed(2)}}
              </p>
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
  methods: {
      sortHighest(){
          const sorted = this.cities.sort((a, b) => b.score - a.score)          
          return this.cities = sorted        
      },
      sortLowest(){
          const sorted = this.cities.sort((a, b) => a.score - b.score)          
          return this.cities = sorted        
      }
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
strong {
  margin-right: 5px;
}
</style>