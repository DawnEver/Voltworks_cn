<template>
    <v-sheet elevation="0" color="transparent" class="mx-10 my-10">
        <h1 class="font-weight-black text-h3 pb-2" align="center">
            {{ $t("milestone") }}
        </h1>
        <v-timeline align="start">
            <v-timeline-item v-for="(marker, i) in markers" :key="i" :dot-color="marker.color" size="small">
                <template v-slot:opposite>
                    <div :class="`pt-1 headline font-weight-bold text-${marker.color}`" v-text="marker.marker"></div>
                </template>
                <div>
                    <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${marker.color}`">
                        {{marker.title}}
                    </h2>
                    <div>
                        {{marker.content}}
                    </div>
                </div>
            </v-timeline-item>
        </v-timeline>
    </v-sheet>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n' // 多语言
const { locale } = useI18n() // t方法取出，t('code')使用
const markers = computed(() => {
    const lang = locale.value;
    if (lang === "en") {
        return [
            {
                color: 'cyan',
                marker: '2022',
                title: 'Lorem ipsum',
                content: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod \
            convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an \
            salutandi sententiae.'
            },
            {
                color: 'green',
                marker: '1970',
                title: 'Lorem ipsum',
                content: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod \
            convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an \
            salutandi sententiae.'
            },
            {
                color: 'pink',
                marker: '1980',
                title: 'Lorem ipsum',
                content: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod \
            convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an \
            salutandi sententiae.'
            },
            {
                color: 'amber',
                marker: '1990',
                title: 'Lorem ipsum',
                content: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod \
            convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an \
            salutandi sententiae.'
            },
            {
                color: 'orange',
                marker: '2000',
                title: 'Lorem ipsum',
                content: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod \
            convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an \
            salutandi sententiae.'
            },
        ]
    } else {
        return [
            {
                color: 'cyan',
                marker: '2022年3月18日',
                title: '梦开始的地方',
                content: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod \
            convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an \
            salutandi sententiae.'
            },
            {
                color: 'green',
                marker: '2024年1月4日',
                title: '成立武汉伏特沃克科技有限公司',
                content: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod \
            convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an \
            salutandi sententiae.'
            },
            {
                color: 'pink',
                marker: '1980',
                title: 'Lorem ipsum',
                content: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod \
            convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an \
            salutandi sententiae.'
            },
            {
                color: 'amber',
                marker: '1990',
                title: 'Lorem ipsum',
                content: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod \
            convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an \
            salutandi sententiae.'
            },
            {
                color: 'orange',
                marker: '2000',
                title: 'Lorem ipsum',
                content: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod \
            convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an \
            salutandi sententiae.'
            },
        ]
    }

    });

</script>