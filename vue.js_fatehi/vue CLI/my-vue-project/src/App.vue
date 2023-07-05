<template>
  <div>
    <h1> {{ title }} </h1>
    <p> welcome... </p>
    <input type="text" ref="name">
    <!-- <button @click="handleEvent"> click </button> -->
    <teleport to=".modals" v-if="showModal">
      <!-- <Modal :header="header" :text="text" theme="sale" @close="changeModal"/>       -->
      <Modal theme="" @close="changeModal">  
        <h1> OpenCode Giveaway </h1>
        <p> Grab the course for half price </p>
        <template v-slot:links>
          <a href="#"> Sign up </a> 
          <a href="#"> more info </a>
        </template>
      </Modal>    
    </teleport>
    
    <teleport to=".modals" v-if="showModalTwo">
    <!-- <Modal :header="header" :text="text" theme="sale" @close="changeModal"/>       -->
    <Modal theme="" @close="changeModalTwo">  
        <h1> Sign up for news </h1>
        <p> don't lose any news </p>
      </Modal>    
    </teleport>

    <button @click.shift="changeModal"> Show Modal (hold shift) </button>
    <button @click="changeModalTwo"> Show Modal </button>

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
      // header: 'Sign up for a Giveaway',
      // text: "Grab the course for half price",
      showModal: false,
      showModalTwo: false,
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

    changeModalTwo() {
      this.showModalTwo = !this.showModalTwo
    },
  }
}
</script>

<style>
#app, .modals {
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
