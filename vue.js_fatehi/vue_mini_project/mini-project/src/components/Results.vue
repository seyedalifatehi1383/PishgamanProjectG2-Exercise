<template>
    <div class="resultContainer">
        <p v-if="showResult"> Reaction: {{ score }} ms </p>
        <p class="rank"> {{ rank }} </p>
    </div>
</template>

<script>
export default {
    props: ['score'],
    data() {
        return {
            rank: null,
        }
    },

    mounted() {
        if(this.score < 250) {
            this.rank = 'عالی بود عالی'
        }

        else if(this.score < 400) {
            this.rank = 'هی بدک نبود'
        }

        else {
            this.rank = 'حلزون کی بودی تو'
        }
    }
}
</script>

<style>
.rank {
    font-size: 1.4em;
    color: #0faf78;
    font-weight: bold;
}
</style>