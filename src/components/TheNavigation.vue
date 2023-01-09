<template>
<div class="navigation">
    <v-app-bar app>
        <v-app-bar-title class="title">MusicApp</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-text-field class="shrink hidden-sm-and-down" hide-details append-icon="mdi-magnify" dense hint="search" rounded filled />
        <!-- <v-spacer></v-spacer> -->
    </v-app-bar>
    <v-navigation-drawer app mini-variant permanent>
        <v-avatar size="34" class=" mx-2 my-4" color="red">
            <v-img src="@/assets/logo.png" />
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
            <v-list-item-action>
                <v-dialog v-model="dialog" hide-overlay style="margin-top:200px" >
                    <template v-slot:activator="{on,attrs}">
                        <v-btn icon v-bind="attrs" v-on="on">
                            <v-icon color="red" class="text-h5">
                                mdi-magnify
                            </v-icon>
                        </v-btn>
                    </template>
                    <v-card class="">
                        <v-card-title class="text-h6">Search</v-card-title>
                        <v-card-text class="w-100 h-25">
                            <v-text-field class="shrink" hide-details append-icon="mdi-magnify" dense hint="search" rounded filled />
                        </v-card-text>
                    </v-card>
                </v-dialog>
            </v-list-item-action>
        </v-list>
    </v-navigation-drawer>
</div>
</template>

<script>
export default {
    name: 'The-navigation',
    data() {
        return {
            dialog:false,
            items: [{
                    id: 1,
                    icon: 'music-circle-outline',
                    link: 'music',
                },
                {
                    id: 2,
                    icon: 'heart-plus-outline',
                    link: 'favorite',
                },
            ]
        }
    }
}
</script>
