<template lang="">
    <span class="highlighted">{{ value }}</span>
</template>
<script>
export default {
    props: ['value'],
}
</script>
<style scope>
@import '@/assets/shared/highlighted.css';
</style>
