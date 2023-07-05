<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{sale: theme === 'sale'}">
            <!-- <h1> {{ header }} </h1> -->
            <!-- <p> {{ text }} </p> -->
            <slot></slot>
            <div class="action">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // props: ['header', 'text', 'theme'],
    props: ['theme'],
    methods: {
        closeModal() {
            this.$emit('close');
        }
    }
}
</script>

<style scoped>
    .modal {
        width: 400px;
        margin: 100px auto;
        padding: 20px;
        background: white;
        border-radius: 10px;
    }

    .backdrop {
        top: 0;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }

    .modal h1 {
        color: aquamarine;
        border: none;
        padding: 0;
    }

    .modal p {
        font-style: normal;
    }

    .modal .action {
        text-align: center;
        margin: 30px 0 10px 0;
    }

    .modal .action a {
        color: #333;
        padding: 8px;
        border: 1px solid #eee;
        border-radius: 4px;
        text-decoration: none;
        margin: 10px;
    }

    .sale {
        background: crimson;
        color: white;
    }

    .sale h1 {
        color: white;
    }

    .sale .action {
        color: white;   
    }

    .sale .action a {
        color: white;   
    }
</style>