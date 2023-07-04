<template>
    <div class="backdrop">
        <div class="modal">
            <h1> Modal </h1>
            <p> modal context </p>
        </div>
    </div>
</template>

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
</style>