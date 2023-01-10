<template>
<div class="about">
    <audio controls :src="file" class="audio" />
    

</div>
</template>

<script>
// import AvCircle from 'vue-audio-visual'
export default {
    name: 'about',
    data() {
        return {
            file: require('@/assets/audio/audio.mp3'),
            // playtime:true

        }
    },
    components:{
        // AvCircle
    },
    methods:{
        audioFinish(){
            console.log('finish');
        }
    }
}
</script>

<style scoped>
.audio{
    width: 500px;
    display: block;
}
</style>
