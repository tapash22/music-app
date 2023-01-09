<template>
<div class="home">
    <v-container>
        <v-row>
            <v-col cols="12" sm="12" md="4" lg="4" xl="4" class="d-flex justify-center">
                <v-sheet class="d-block pa-2 " width="100%">
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

            <v-col cols="12" sm="12" md="4" lg="4" xl="4" class="d-md-flex d-lg-flex justify-center hidden-sm-and-down pa-2">

                <PlaySongs :music="musicOn" />

            </v-col>

            <v-col cols="12" sm="12" md="4" lg="4" xl="4" class="d-md-flex d-lg-flex justify-center hidden-sm-and-down">
                <v-sheet width="100%" height="100vh" class="d-block">
                    <h2 class="text-uppercase text-h6 my-3 mx-3">top list</h2>
                    <div style="display:flex;">
                        <v-icon size="lg" class="mx-2" color="red">mdi-shuffle-variant</v-icon>
                        <v-icon size="lg" class="mx-2" color="red">mdi-repeat</v-icon>
                    </div>
                    <v-card class="pa-2 my-2 " rounded="lg">
                        <v-card-subtitle>Playing next</v-card-subtitle>
                        <v-card-text v-for="music in musiclist" :key="music.id" class="pa-0">
                            <SinglePlay :music="music" @music-single='getSingleId' />
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
import {
    mapGetters,
    mapState
} from 'vuex';

export default {
    name: 'Home',
    data() {
        return {
            e1: '',
            value: '',
            musicOn: ''
        }
    },
    computed: {
        ...mapState(['musiclist', 'lists']),

    },

    components: {
        SingleMusicCard,
        PlaySongs,
        SinglePlay
    },

    methods: {
        // getMusicId(id){
        //     this.selectedId = id;
        //     this.music = this.getMusicById(id);
        // }
        getSingleId(musics) {
            this.musicOn = musics;
        }
    }
}
</script>

<style scoped>
.select {
    max-width: 30% !important;
}
</style>
