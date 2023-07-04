<template>
    <div class="backdrop">
        <div class="modal">
            <p> modal context </p>
        </div>
    </div>
</template>

<style>
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
</style>