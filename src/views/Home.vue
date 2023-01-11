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

            <v-col cols="12" sm="12" md="5" lg="5" xl="5" class="d-md-flex d-lg-flex justify-center hidden-sm-and-down pa-2">
                <PlaySongs :music="musicOn"  />
            </v-col>

            <v-col cols="12" sm="12" md="3" lg="3" xl="3" class="d-md-flex d-lg-flex justify-center hidden-sm-and-down">
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
            musicOn: '',
            hid: 0

        }
    },
    computed: {
        ...mapState(['musiclist', 'lists']),
        ...mapGetters(['getMusicById'])
    },

    components: {
        SingleMusicCard,
        PlaySongs,
        SinglePlay
    },

    methods: {

        getSingleId(musics) {
            this.musicOn = musics;

        }
        // prevMusic($event) {
        //     this.hid = $event;
        //        this.musicOn=this.getPrevId(this.sid);
        // console.log(this.hid);
        // this.getPrevId(hid);
        // if(this.hid != 0){
        //     this.hid -=1 ;
        //     this.getSingleId(this.hid);
        //     console.log(this.musicOn);

        // }else{
        //     this.hid = this.getLength - 1;
        //       this.getSingleId(this.hid);
        //     console.log(this.musicOn);
        //     console.log(this.hid);
        //     this.getMusicById(this.hid);

        // }

        //  if (this.id < this.list.length - 1) {
        //     this.currentSongIndex += 1;
        // } else {
        //     this.currentSongIndex = 0;
        // }
        // this.$emit('prev-music')
        // if(this.id = !1){
        //     this.id -= 1;
        //     this.getMusicById(id);
        // }else{
        //     this.id = 1
        //     this.getMusicById(id)
        // }

        // nextMusic() {
        //     this.$emit('next-music')
        //     console.log('from home 2')
        // },

    }
}
</script>

<style scoped>
.select {
    max-width: 30% !important;
}
</style>
