<template>
<div class="single-play">
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
</div>
</template>

<script>
export default {
    name: 'single-play',
    props: ['music'],
}
</script>
