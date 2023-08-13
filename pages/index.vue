<script setup>
definePageMeta({
  layout: false,
})
</script>

<template>
  <div class="h-screen flex items-center justify-center">
    <div id="title" class="leading-normal my-2 uppercase font-bold text-gray-500">
        <span>I'm </span> Front End Engineer 
    </div>
  </div>
</template>

<style scoped>
#title {
    font: bold 150% Consolas, Monaco, monospace;
    border-right: 0.1em solid;
    width: 25ch;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 3s steps(27, end) infinite, cursor-blink 0.2s step-end infinite alternate;
}

@keyframes typing {
    from {
        width: 0;
    }
}

@keyframes cursor-blink {
    50% {
        border-color: transparent;
    }
}
</style>