<template>
  <div>
    <h1> {{ title }} </h1>
    <input type="text" ref="name">
    <button @click="handleEvent"> click </button>
    <Modal />
  </div>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {Modal},
  data(){
    return{
      title: 'this is a simple text'
    }
  },

  methods: {
    handleEvent() {
      console.log("event");
      console.log(this.$refs.name);
      this.$refs.name.classList.add('ali')
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
  color: #2c3e50;
  margin-top: 60px;
}

/* this is global for all components */
h1{
  background: #2c3e50 fixed;
  color: aliceblue;
}
</style>
