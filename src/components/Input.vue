<template>
    <input
        class="input"
        type="text"
        v-model="innerValue.value"
        @input="updateValue"
        :placeholder="innerValue.placeholder"
    />
</template>
<script>
export default {
    props: ['innerValue', 'placeholder'],
    data() {
        return {}
    },
    methods: {
        updateValue() {
            console.log(this.innerValue.value)
            this.$emit('update', this.innerValue.value)
        },
    },
}
</script>
<style>
@import '@/assets/shared/input.css';
</style>
