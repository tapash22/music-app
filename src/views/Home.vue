<template>
<div class="home">
    <v-container>
        <v-row>
            <v-col cols="12" sm="12" md="4" lg="4" xl="4" class="d-flex justify-center">
                <v-sheet class="d-block pa-2 " width="100%" >
                    <h2>Discover new music</h2>
                    <v-container>
                        <v-row class="d-flex justify-space-between my-2">
                            <h3>Top-chart</h3>
                            <v-select v-model="e1" class="select" :items="lists" dense menu-props="auto" label="Select" hide-details single-line></v-select>
                        </v-row>
                        <v-row class="d-flex justify-space-between">
                            <v-col cols="12" sm="12" md="6" lg="6" xl="6" v-for="music in musiclist" :key="music.id">
                                <SingleMusicCard :music="music" />
                            </v-col>
                        </v-row>
                    </v-container>
                </v-sheet>
            </v-col>

            <v-col cols="12" sm="12" md="4" lg="4" xl="4" class="d-flex justify-center">
                <v-container>
                    <PlaySongs />
                </v-container>
                
            </v-col>

            <v-col cols="12" sm="12" md="4" lg="4" xl="4" class="d-flex justify-center">
                <v-sheet width="100%" height="100vh"  class="d-block">
                    <h2 class="text-uppercase text-h6 my-3 mx-3">top list</h2>
                    <div style="display:flex;">
                        <v-icon size="lg" class="mx-2" color="red">mdi-shuffle-variant</v-icon>
                        <v-icon size="lg" class="mx-2" color="red">mdi-repeat</v-icon>
                    </div>
                    <v-card class="pa-2 my-2 " rounded="lg">
                        <v-card-subtitle>Playing next</v-card-subtitle>
                        <v-card-text v-for="music in musiclist" :key="music.id" class="pa-0">
                            <SinglePlay :music="music" />
                        </v-card-text>
                    </v-card>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import SingleMusicCard from '@/components/SingleMusicCard.vue';
import PlaySongs from '@/components/PlaySongs.vue';
import SinglePlay from '@/components/SinglePlay.vue';

export default {
    name: 'Home',
    data() {
        return {
            e1: '',
            value: '',
            musiclist: [{
                    id: 1,
                    image: 'https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/39631/optimized_large_thumb_stage.jpg',
                    name: 'title',
                    date: 2016,
                    sub: 'sub',
                    playing: 3.12
                },
                {
                    id: 2,
                    image: 'https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/39631/optimized_large_thumb_stage.jpg',
                    name: 'title',
                    date: 2015,
                    sub: 'sub',
                    playing: 3.12
                },
                {
                    id: 3,
                    image: 'https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/39631/optimized_large_thumb_stage.jpg',
                    name: 'title',
                    date: 2014,
                    sub: 'sub',
                    playing: 3.12
                },
                {
                    id: 4,
                    image: 'https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/39631/optimized_large_thumb_stage.jpg',
                    name: 'title',
                    date: 2013,
                    sub: 'sub',
                    playing: 3.12
                },
                {
                    id: 5,
                    image: 'https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/39631/optimized_large_thumb_stage.jpg',
                    name: 'title',
                    date: 2012,
                    sub: 'sub',
                    playing: 3.12
                },
                {
                    id: 6,
                    image: 'https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/39631/optimized_large_thumb_stage.jpg',
                    name: 'title',
                    date: 2012,
                    sub: 'sub',
                    playing: 3.12
                },
            ],
            lists: [
                'last 3 days', 'last week', 'last month', 'last 3 monty', 'last 6 month'
            ]
        }
    },
    components: {
        SingleMusicCard,
        PlaySongs,
        SinglePlay
    },
}
</script>

<style scoped>
.select {
    max-width: 30% !important;
}
</style>
