<template>
    <div class="navigation">
        <v-app-bar app>
            <v-app-bar-nav-icon />
            <v-app-bar-title class="title">MusicApp</v-app-bar-title>
            <v-spacer></v-spacer>
            <v-text-field class="shrink" hide-details append-icon="mdi-magnify" dense hint="search" rounded filled/>
       <!-- <v-spacer></v-spacer> -->
        </v-app-bar>
        <v-navigation-drawer app mini-variant permanent>
            <v-avatar size="34" class=" mx-2 my-4" color="red">
                <v-img src="@/assets/logo.png"/>
            </v-avatar>
            <v-divider></v-divider>
            <v-list class="d-block pa-0">
                <v-list-item v-for="list in items" :key="list.id">
                    <router-link :to="list.link" class="text-decoration-none text-red pa-0">
                        <v-icon class="text-h5" color="red">
                            mdi-{{list.icon}}
                        </v-icon>
                    </router-link>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name:'The-navigation',
    data(){
        return{
            items:[
                {
                    id:1,
                    icon:'music-circle-outline',
                    link:'music',
                },
                 {
                    id:2,
                    icon:'heart-plus-outline',
                    link:'favorite',
                },
            ]
        }
    }
}
</script>