<template>
    <section class="works scrollable">
        <div class="someContent"></div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'WorksPage',
});
</script>

<style lang="scss">
.works {
    background-color: green;

    .someContent {
        width: 100%;
        height: 150dvh;
    }
}
</style>
