<template>
<div class="play-songs">
    <v-list class="d-flex pa-0">
        <v-list-item class="w-100 pa-0" v-if="music">
            <Music :songs="music"  />
        </v-list-item>
        <v-list-item class="w-100 pa-0" v-else>
            <Music :songs="getMusicByFirstId"  />
        </v-list-item>
    </v-list>

</div>
</template>

<script>
import {
    mapGetters
} from 'vuex';

import Music from './Music.vue';

export default {
    name: 'play-songs',
    props: ['music'],
    data() {
        return {
            value: '',
            value1: '',
            playMusic: true,
            // sid:0
            
        }
    },

    components: {
        Music,
    },

    computed: {
        ...mapGetters(['getMusicByFirstId']),
    },

    methods: {
        // prevMusic($event) {
        //     this.sid = $event;
         
        //     console.log(this.sid+'from paly');
        //     this.$emit('prev-music',this.sid)
        // },

        // nextMusic() {
        //     this.$emit('next-music')
        // }

            // playSongs() {
            //     if (this.playMusic) {
            //         this.$refs.audioPlayer.pause();
            //     } else {
            //         this.$refs.audioPlayer.play();
            //     }
            // }

    }

}
</script>
