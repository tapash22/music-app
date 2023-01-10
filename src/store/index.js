import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    musiclist: [{
      id: 1,
      image: 'https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/39631/optimized_large_thumb_stage.jpg',
      name: 'title1',
      date: 2016,
      sub: 'sub',
      playing: 3.12,
      music:require('@/assets/audio/audio.mp3')
    },
    {
      id: 2,
      image: 'https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/39631/optimized_large_thumb_stage.jpg',
      name: 'title2',
      date: 2015,
      sub: 'sub',
      playing: 3.12,
      music:'https://filesamples.com/formats/mp3/sample2.mp3'
    },
    {
      id: 3,
      image: 'https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/39631/optimized_large_thumb_stage.jpg',
      name: 'title3',
      date: 2014,
      sub: 'sub',
      playing: 3.12,
      music:'https://filesamples.com/formats/mp3/sample4.mp3'
    },
    {
      id: 4,
      image: 'https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/39631/optimized_large_thumb_stage.jpg',
      name: 'title4',
      date: 2013,
      sub: 'sub',
      playing: 3.12,
      music:'https://filesamples.com/formats/mp3/sample3.mp3'
    },
    {
      id: 5,
      image: 'https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/39631/optimized_large_thumb_stage.jpg',
      name: 'title5',
      date: 2012,
      sub: 'sub',
      playing: 3.12,
      music:'https://filesamples.com/formats/mp3/sample2.mp3'
    },
    {
      id: 6,
      image: 'https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/39631/optimized_large_thumb_stage.jpg',
      name: 'title6',
      date: 2012,
      sub: 'sub',
      playing: 3.12,
      music:'https://filesamples.com/formats/mp3/sample1.mp3'
    },
    ],
    lists: [
      'last 3 days', 'last week', 'last month', 'last 3 monty', 'last 6 month'
    ],
    iconlist: [
      'skip-previous-outline',
      'play-circle-outline',
      'skip-next-outline'
    ],
  },
  getters: {

    getMusicById:(state)=>(id)=>{
      return state.musiclist.find(music => music.id === id);
    },
    getMusicByFirstId:(state)=>{
      return state.musiclist.find(music => music.id === 1);
    }
  },

  mutations: {
  },

  actions: {
  },
  
  modules: {
  }

})
