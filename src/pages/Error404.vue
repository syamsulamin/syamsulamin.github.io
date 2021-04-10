<template>
  <div class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 27vh">
        404
      </div>

      <div class="text-h4" style="opacity:.4">
        Oops. Nothing here...
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="primary"
        unelevated
        to="/"
        no-caps
        round
        icon="home"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
