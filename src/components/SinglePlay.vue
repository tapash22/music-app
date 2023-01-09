<template>
<div class="single-play">
    <a style="text-decoration:none;" @click="getMusicId(music.id)">
    <v-list class="d-flex pa-0 ">
        <v-icon color="red">mdi-wrap-disabled</v-icon>
        <v-img max-width="50" height="50" :src="music.image" />

        <v-list-item class="d-flex justify-space-between pa-0 mx-2">
            <v-list-item-content class="mx-2">
                <v-list-item-title>{{music.name}}</v-list-item-title>
                <v-list-item-subtitle>{{music.sub}}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-content>
                <v-list-item-title class="text-right">{{music.playing}}</v-list-item-title>
                <v-list-item-subtitle class="text-right">{{music.date}}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-list>
    </a>
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex';

export default {
    name: 'single-play',
    props: ['music'],
    data() {
        return {
            selectedId: 0,
            singlemusic: '',
        }
    },

    computed: {
        ...mapGetters(['getMusicById'])
    },

    methods: {
        getMusicId(id) {
            this.selectedId = id;
            this.singlemusic = this.getMusicById(id);
            this.$emit('music-single',this.singlemusic);
        }
    }
}
</script>
