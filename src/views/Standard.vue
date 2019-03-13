<template>
    <div>
        Standard of Living
    </div>
</template>

<script>
import EventService from '../services/EventService.js'
    export default {
        data() {
            return {
                cities: []
            }
        },
        mounted(){
            EventService.getScores()
            .then(res => res.map(city => ({categories: city.data.categories, summary: city.data.summary})))
            .then(cities => this.cities = cities)
        }
    }
</script>

<style scoped>

</style>