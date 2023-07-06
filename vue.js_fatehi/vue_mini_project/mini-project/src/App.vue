<template>
  <div class="container">
    <h1> OpenCode Reaction Timer </h1>
import Results from './components/Results.vue';
    <button @click="start" :disabled="isPlaying"> Play </button>
    <p v-if="showResult"> Reaction: {{ score }} ms </p>
    <Block v-if="isPlaying" :delay="delay" @end="endGame"/>
    <Results v-if="showResult" :score="score"/>
  </div>
</template>

<script>
import Block from './components/Block.vue';
import Results from './components/Results.vue';

export default {
  name: 'App',
  components: { Block, Results },
  data() {
    return {
      delay: null,
      isPlaying: false,
      showResult: false,
      score: null,
    }
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showResult = false;
      console.log(this.delay);
    },

    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResult = true;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}

button {
  background: #0faf87;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}

button [disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
