<template>
<div class="music">

    <v-card rounded="xl" class="my-5" color="#265E69">
        <audio controls :src="songs.music" class="audio" ref="audioPlayer" />
        <!-- <audio :src="songs.music" preload="auto" autoplay ref="audioPlayer" /> -->
        <v-card-title class="d-flex justify-center my-5 white--text">Now Playing</v-card-title>
        <v-img class="mx-5 rounded-lg" :src="songs.image" height="250" />
        <v-card-text>
            <v-card-text class="pa-0 text-h6 text-center white--text">{{songs.name}}</v-card-text>
            <v-card-subtitle class="pa-0 text-body-1 text-center white--text">{{songs.sub}}</v-card-subtitle>
            <div style="display:flex;justify-content:space-between;padding:0;margin:0;">
                <v-card-title class="pa-0 text-body-2 white-text">{{max}}</v-card-title>
                <v-card-title class="pa-0 text-body-2 white-text">-{{min}}</v-card-title>
            </div>
            <v-slider v-model="musicLength" step="0.1" @input="updateLength" class="pa-0"></v-slider>
        </v-card-text>
        <v-card-text class="d-flex justify-space-around pa-0">
            <v-btn icon >
                <v-icon color="white">mdi-shuffle-variant</v-icon>
            </v-btn>

            <!-- button -->

            <div style="display:flex;justify-content:space-evenly">
                <v-btn icon @click="onClick" class=" " color="white">
                    <v-icon class="text-h4" color="white">mdi-skip-previous-outline</v-icon>
                </v-btn>
                <v-btn icon @click="onClick" class=" mx-3" color="white">
                    <v-list color="transparent">
                        <v-list-item v-if="playMusic">
                             <v-icon class="text-h3" color="red">mdi-pause-circle-outline</v-icon>
                        </v-list-item>
                        <v-list-item v-else>
                            <v-icon class="text-h3" color="red">mdi-play-circle-outline</v-icon>
                        </v-list-item>
                    </v-list>
                   
                </v-btn>
                <v-btn icon @click="onClick" class="pa-0" color="white">
                    <v-icon class="text-h4" color="white">mdi-skip-next-outline</v-icon>
                </v-btn>
            </div>

            <v-btn icon>
                <v-icon color="white">mdi-repeat</v-icon>
            </v-btn>
        </v-card-text>
        <v-card-text>
            <v-slider v-model="volume" step="1" max="100" @input="updateVolume" color="white" :label="volume" inverse-label prepend-icon="mdi-volume-high"></v-slider>
        </v-card-text>
    </v-card>

</div>
</template>

<script>
import {
    mapState
} from 'vuex';

export default {
    name: 'music',
    props: ['songs'],
    data() {
        return {
            value1: '',
            value: '',
            volume: 50,
            musicLength: 0,
            max: 0,
            min: 0,
            total: 100,

            playMusic: true,
            icon:'',
            icon1:''
        }
    },
    computed: {
        ...mapState(['iconlist']),

        convertedValue: {
            get: function () {
                return this.exObj.value / this.conversionFactor
            },
            set: function (newValue) {
                this.exObj.value = newValue * this.conversionFactor
            }
        }
    },

    methods: {
        onClick() {

            if (this.playMusic) {

                this.$refs.audioPlayer.pause();
                // this.icon = 'mdi-play-circle-outline'
            } else {
                this.$refs.audioPlayer.play();
                //  this.icon1 = 'mdi-skip-next-outline'
            }
            this.playMusic = !this.playMusic;

        },

        updateVolume(value) {
            this.volume = +value;
        },
        updateLength(value) {
            this.musicLength = +value;
            this.max = this.musicLength
            this.min = this.total - this.max
        }
    }
}
</script>

<style scoped>
.audio {
    opacity: 0;
  
}
</style>
