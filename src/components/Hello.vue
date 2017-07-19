<template>
  <div class="hello">
    <h1>{{ msg }}</h1><br>
    <button @click="pop">parent pop methods</button>
    <test ref="test"></test>
  </div>
</template>

<script>
import test from './Test'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    pop () {
      this.msg = this.$refs.test.pop()
    }
  },
  components: {
    test
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
