<script>
import { ref } from 'vue'

export default {
  data() {
    return {
      msg: "Hello"
    }
  },
  setup() {
    const count = ref(0)
    // expose to template and other options API hooks
    return {
      count
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      const vm = this;
      console.log(import.meta.env.APP_BACKEND_API);
      fetch(import.meta.env.APP_BACKEND_API)
        .then((response) => response.json())
        .then((data) => {
          vm.msg = data.test
        });
    }
  }
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
