<template>
  <div>
    <h1> {{ title }} </h1>
    <p> welcome... </p>
    <input type="text" ref="name">
    <!-- <button @click="handleEvent"> click </button> -->
    {{ showModal }}
    <div v-if="showModal">
      <Modal :header="header" :text="text" theme="sale" @close="changeModal"/>      
    </div>
    <button @click="changeModal"> Show Modal </button>
  </div>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {Modal},
  data(){
    return{
      title: 'this is a simple text',
      header: 'Sign up for a Giveaway',
      text: "Grab the course for half price",
      showModal: false,
    }
  },

  methods: {
    // handleEvent() {
    //   console.log("event");
    //   console.log(this.$refs.name);
    //   this.$refs.name.classList.add('ali')
    // }

    changeModal() {
      this.showModal = !this.showModal
    },
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
