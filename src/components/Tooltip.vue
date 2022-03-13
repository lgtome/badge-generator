<template>
    <div class="tooltip">
        ?
        <span class="tooltiptext">{{ tip }}</span>
    </div>
</template>
<script>
export default {
    props: ['tip'],
}
</script>
<style>
@import '@/assets/shared/tooltip.css';
</style>
