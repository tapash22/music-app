<template>
<div class="single-music-card">
    <v-card class="w-100" rounded="lg">
        <v-img :src="music.image" height="120" max-width="200" />
        <v-card-text class="pa-0 mx-2">
            <v-card-title class="pa-0 my-2 text-body-1">{{music.name}}</v-card-title>
            <v-card-subtitle class="pa-0 text-body-2 d-flex justify-space-between"><span>{{music.sub}}</span><span class="mx-3">{{music.date}}</span></v-card-subtitle>
        </v-card-text>
    </v-card>
</div>
</template>

<script>
export default {
    name:'single-music-card',
    props:['music']
}
</script>
