<template>
  <div id="standard-container">
    <div v-if="cities.length === 0" id="loading">
      <v-progress-circular  indeterminate color="#829fce" />
    </div>
    <v-container grid-list-md v-else id="standard-container--inner">
      <v-layout align-center justify-center row>
        <v-btn class="mr-5" color="#e7e9ea" @click="sortHighest" depressed small>Highest Score &uarr;</v-btn>
        <v-btn class="mr-5" color="#e7e9ea" @click="sortLowest" depressed small>Lowest Score &darr;</v-btn>
        <input
          type="text"
          v-model="search"
          @keyup="searchForCity"
          placeholder="search for city..."
          id="city-search"
        >
      </v-layout>
      <v-layout row wrap v-if="!search">
        <v-flex xs3 v-for="(city, index) in cities" :key="index">
          <v-card class="ma-2" color="#e7e9ea">
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
      <v-layout v-else>
        <v-card class="ma-2 pa-4" color="#e7e9ea">
          <v-card-text primary-title class="pa-2">
            <h3 class="text-capitalize text-sm-center">{{searchedCity.name}}</h3>
          </v-card-text>
          <v-card-text
            v-for="(category, index) in searchedCity.categories"
            :key="index"
            class="pa-0 mb-0"
          >
            <p class="mb-1 text-sm-center" secondary-title>
              <strong>{{category.name}}:</strong>
              {{category['score_out_of_10'].toFixed(2)}}
            </p>
          </v-card-text>
          <v-card-text class="font-weight-bold">
            <p class="text-md-center">Teleport City Score: {{searchedCity.score.toFixed(2)}}</p>
          </v-card-text>
        </v-card>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import EventService from "../services/EventService.js";
export default {
  data() {
    return {
      cities: [],
      search: "",
      searchedCity: null
    };
  },
  methods: {
    sortHighest() {
      const sorted = this.cities.sort((a, b) => b.score - a.score);
      return (this.cities = sorted);
    },
    sortLowest() {
      const sorted = this.cities.sort((a, b) => a.score - b.score);
      return (this.cities = sorted);
    },
    searchForCity() {
      let foundCity = this.cities.find(city => {
        return city.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
      });
      this.searchedCity = foundCity;
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

<style lang="scss" scoped>
#standard-container {
  background-image: url("../assets/standard_background.jpg");
  background-size: cover;
  position: sticky;
  &--inner {
    height: 100vh;
    width: 100vw;
    overflow-y: scroll;
  }
}

#loading {
  background: white;
  width: 100vw;
}

strong {
  margin-right: 5px;
}

#city-search {
  border: 1px solid #797878;
  padding: 5px;
  background-color: #e7e9eace;
}
</style>