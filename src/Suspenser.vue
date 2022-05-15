<template>
  <Suspense>
    <template #default>
      <App />
    </template>
    <template #fallback>
      <div>
        <img alt="Vue logo" src="./assets/logo.png">
        <h1>Loading...</h1>
      </div>
    </template>
  </Suspense>
</template>

<script>
import App from './App.vue'

export default {
  name: 'SuspenserComponent',
  components: {
    App
  }
}
</script>

<style>
</style>
