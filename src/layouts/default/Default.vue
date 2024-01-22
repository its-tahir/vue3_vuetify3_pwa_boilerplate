<template>
    <v-app dark>
        <Navbar />
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
</script>
