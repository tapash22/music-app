<template>
<div class="play-songs">
    <v-card >
        <v-card-title class="d-flex justify-center my-5">Now Playing</v-card-title>
        <v-img class="mx-5 rounded-lg" src="https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/39631/optimized_large_thumb_stage.jpg" />
        <v-card-text>
            <v-card-text class="pa-0 text-h6 text-center">name</v-card-text>
            <v-card-subtitle class="pa-0 text-body-1 text-center">subtitle</v-card-subtitle>
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
</div>
</template>

<script>
export default {
    name: 'play-songs',
    props: [],
    data() {
        return {
            value1: '',
            iconlist: [
                'skip-previous-outline',
                'play-circle-outline',
                'skip-next-outline'
            ],
        }
    }
}
</script>
