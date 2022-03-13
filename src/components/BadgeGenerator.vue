<template>
    <div class="screen">
        <div class="block">
            <code ref="link">
                https://img.shields.io/badge/<Highlighted
                    :value="title.value"
                />-<Highlighted
                    :value="color.value"
                />.svg?&style=for-the-badge&logo=<Highlighted
                    :value="logo.value"
                />&logoColor=<Highlighted :value="logoColor.value" />
            </code>
        </div>
        <div class="block">
            <div v-html="template" class="drag" @click="openLink"></div>
        </div>
        <div class="row">
            <CustomInput
                v-model="title.value"
                :innerValue="title"
                @update="getValue"
            />
        </div>
        <div class="row">
            <CustomInput
                v-model="logo.value"
                :innerValue="logo"
                @update="getValue"
            />
        </div>
        <div class="row">
            <CustomInput
                v-model="color.value"
                :innerValue="color"
                @update="getValue"
            />
            <Tip :tip="color.tip" />
        </div>
        <div class="row">
            <CustomInput
                v-model="logoColor.value"
                :innerValue="logoColor"
                @update="getValue"
            />
            <Tip :tip="logoColor.tip" />
        </div>
        <button class="btn" @click="fetchLogo">generate badge</button>
    </div>
</template>
<script>
import CustomInput from './Input.vue'
import Highlighted from './Highlighted.vue'
import Tip from './Tooltip.vue'
import { generateHash } from '@/helpers/generateHash'
import axios from 'axios'
export default {
    data() {
        return {
            counter: 0,
            title: {
                value: '',
                type: 'title',
                placeholder: 'Enter badge name',
            },
            logo: {
                value: '',
                type: 'logo',
                placeholder: 'Enter logo name',
            },
            color: {
                value: 'green',
                type: 'color',
                tip: 'Enter the color in any accessible format.',
                placeholder: 'Enter badge color',
            },
            logoColor: {
                value: '',
                type: 'logoColor',
                tip: 'Enter color in default format, like: white, yellow, etc.',
                placeholder: 'Enter logo color',
            },
            template: `<div></div>`,
            url: '',
        }
    },
    methods: {
        increment() {
            this.counter++
            console.log(this.title.value, 'title')
            console.log(this.color.value, 'color')
        },
        getValue(value) {
            console.log(value, '💩')
        },
        generateHash,
        fetchLogo() {
            this.url = `https://img.shields.io/badge/${this.title.value}-${
                this.color.value || 'green'
            }.svg?&style=for-the-badge&logo=${this.logo.value}&logoColor=${
                this.logoColor.value || 'white'
            }`
            axios.get(this.url).then(({ data }) => (this.template = data))
        },
        openLink() {
            window.open(this.url)
        },
    },
    components: {
        CustomInput,
        Highlighted,
        Tip,
    },
}
</script>

<style>
@import '../assets/shared/badgeGenerator.css';
</style>
