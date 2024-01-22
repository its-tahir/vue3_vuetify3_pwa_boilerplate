<template>
    <div class="landing" :class="theme.global.current.value.dark ? 'bg-dark' : 'bg-light'">
        <VContainer fluid class="text-center"></VContainer>
    </div>
</template>

<script setup>
import { useTheme } from 'vuetify';
const theme = useTheme();
</script>

<style lang="scss" scoped>
.landing {
    height: calc(100vh - 64px);
    display: flex;
    align-items: center;
    justify-content: center;
}
.bg-light {
    background: url(../assets/light_bg.jpg);
    background-size: cover;
}
.bg-dark {
    background: url(../assets/dark_bg.jpg);
    background-size: cover;
}
</style>
