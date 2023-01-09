<template>
<div class="play-songs">
           <v-list class="w-100 pa-0">
        <v-list-item class="w-100 pa-0" v-if="music">
            <Music :songs="music" />
        </v-list-item>
        <v-list-item class="w-100 pa-0" v-else>
            <Music :songs="getMusicByFirstId" />
        </v-list-item>
    </v-list>

</div>
</template>

<script>
import {
    mapGetters,
    mapState
} from 'vuex';

import Music from './Music.vue';

export default {
    name: 'play-songs',
    props: ['music'],
    data() {
        return {
            value: '',
            value1: '',
        }
    },

    components: {
        Music,
    },

    computed: {
        ...mapState(['iconlist']),
        ...mapGetters(['getMusicByFirstId']),
    }

}
</script>
