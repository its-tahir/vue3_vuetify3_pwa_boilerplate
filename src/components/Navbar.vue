<template>
    <v-app-bar fixed app>
        <v-toolbar-title>
            <router-link to="/" class="text-decoration-none text-primary">
                {{ title }}
            </router-link>
        </v-toolbar-title>

        <v-spacer />

        <div class="d-none d-md-block">
            <v-btn variant="text" color="primary">Home</v-btn>
            <v-btn variant="text" color="primary">About</v-btn>
        </div>
        <!-- mobile nav -->
        <v-menu v-model="menu" :close-on-content-click="false" location="bottom" class="d-block d-md-none">
            <template v-slot:activator="{ props }">
                <v-btn icon rounded circle v-bind="props" class="d-block d-md-none">
                    <v-avatar>
                        <v-icon>mdi-format-list-bulleted</v-icon>
                    </v-avatar>
                </v-btn>
            </template>

            <v-card min-width="300">
                <v-list>
                    <v-list-item>
                        <v-btn variant="text" color="primary">Home</v-btn>
                    </v-list-item>
                    <v-divider />
                    <v-list-item>
                        <v-btn variant="text" color="primary">About</v-btn>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-menu>

        <!--  -->
        <v-btn icon rounded @click="toggleTheme">
            <v-icon>mdi-theme-light-dark</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';

const theme = useTheme();
const menu = ref(false);
const title = ref('Starter');

const toggleTheme = () => {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
};
</script>
