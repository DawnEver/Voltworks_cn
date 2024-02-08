<template>
    <v-carousel cycle height="100%" hide-delimiter-background show-arrows="hover">
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <div class="d-flex fill-height justify-center align-center">
                <v-img :src="slide.imgUrl" contain max-height="1000" />
            </div>

        </v-carousel-item>
    </v-carousel>
</template>

<script setup lang="ts">
import hero1 from '@/assets/hero-1.png'
import hero2 from '@/assets/hero-2.png'

const slides = [
    {
        imgUrl: hero1,
    },
    {
        imgUrl: hero2,
    },
]
</script>