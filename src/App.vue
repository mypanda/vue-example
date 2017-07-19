<template>
  <div class="app">
  <p>测试数据：{{testCount}}</p>
  <p>（测试数据 * 2 | {{testCount}} * 2 = {{waCount}}</p>
  <button @click="INCREMENT">INCREMENT</button><br>
  <button @click="getUsers">getUsers</button>
  <ul>
    <li v-show="!users">暂无数据</li>
    <li v-for="item in users">{{item.name}}</li>
  </ul>
  <hr>
    <div style="width: 500px;float: left">
      <router-link to="/">Home</router-link>
      <router-link to="/user">User</router-link>
      <router-link to="/user/foo">user/foo</router-link>
      <router-link to="/user/12">user/12</router-link>
    </div>
    <div style="margin-left:500px;">
      <p :class="{'text-red':isShow}">lorem</p>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {
      isShow: true
    }
  },
  methods: {
    // 以前这么写
    // mutations () {
    //   this.$store.commit('increment')
    // },
    ...mapMutations([
      'INCREMENT' // 映射 this.increment() 为 this.$store.commit('increment')
    ]),
    //
    // actions () {
    //   this.$store.dispatch('getUsers')
    // }
    ...mapActions({
      getUsers: 'getUsers' // 映射 this.add() 为 this.$store.dispatch('increment')
    })
  },
  name: 'app',
  computed: {
    testCount () {
      return this.$store.state.count
    },
    waCount () {
      return this.$store.getters.waCount
    },
    users () {
      return this.$store.state.users
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.text-red{
  color:red;
}
</style>
