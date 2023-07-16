<template>
    <div v-if="modelValue" class="modal">
        <div class="modal-bg" @click="bgClick"></div>
        <div class="modal-container">
            <div class="modal-title">
                title
                <slot name="title"></slot>
            </div>
            <div class="modal-content">
                context
                <slot name="content"></slot>
            </div>
            <div class="modal-footer">
                <button @click="confirm" class="modal-confirm-button">Confirm</button>
                <button @click="reject" class="modal-reject-button">Reject</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">


withDefaults(defineProps<{isVisible: boolean, modelValue: boolean}>(), {
  isVisible: false,
  modelValue: false
})
const emit = defineEmits<{
    (e: "update:isVisible", value: boolean): void,
    (e: "update:modelValue", value: boolean): void
}>();

const bgClick = () => {
    console.log("[Modal] bg click")
    emit('update:isVisible', false);
    emit('update:modelValue', false);
}
</script>

<style>
.modal{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.modal-bg{
    background-color: rgba(0,0,0,.4);
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
    z-index: 1;
}
.modal-container{
    z-index: 10;
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 960px;
}
.modal-title{
    background-color: lightgray;
}
.modal-confirm-button{
    background-color: green;
    color: white;
}
.modal-reject-button{
    background-color: red;
    color: white
}
</style>