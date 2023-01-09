<template>
<div class="music">
    <v-container>
  <v-card>
        <v-card-title class="d-flex justify-center my-5">Now Playing</v-card-title>
        <v-img class="mx-5 rounded-lg" :src="songs.image" />
        <v-card-text>
            <v-card-text class="pa-0 text-h6 text-center">{{songs.name}}</v-card-text>
            <v-card-subtitle class="pa-0 text-body-1 text-center">{{songs.sub}}</v-card-subtitle>
            <div style="display:flex;justify-content:space-between;padding:0;margin:0;">
                <v-card-title class="pa-0 text-body-2">2:14</v-card-title>
                <v-card-title class="pa-0 text-body-2">-1:30</v-card-title>
            </div>
            <v-slider v-model="value" step="1" class="pa-0"></v-slider>
        </v-card-text>
        <v-card-text class="d-flex justify-space-between pa-0">
            <v-btn icon>
                <v-icon color="green">mdi-shuffle-variant</v-icon>
            </v-btn>
            <v-btn icon large v-for="icon in iconlist" :key="icon">
                <v-icon class="text-h3 mx-3 pa-0" color="red">
                    mdi-{{icon}}
                </v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon color="green">mdi-repeat</v-icon>
            </v-btn>
        </v-card-text>
        <v-card-text>
            <v-slider v-model="value1" step="10" color="red" append-icon="mdi-volume-high" prepend-icon="mdi-volume-low"></v-slider>
        </v-card-text>
    </v-card>
    </v-container>
  
</div>
</template>

<script>
export default {
    name:'music',
    props:['songs'],
}
</script>
