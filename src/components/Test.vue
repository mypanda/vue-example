<template>
  <div>
    <hr>
    <div>test <span>{{message}}</span></div>
    <hr>
    <p>下面是rxjs</p>
    <input type="text" ref="input">
    <hr>
    <button @click="tigger">触发事件</button>
    <hr>
    <button @click="showThis">this</button>
  </div>
</template>
<script>
import Rx from 'rxjs/Rx'
export default {
  name: 'text',
  data () {
    return {
      message: 'test is here!',
      str: 'child component pop methods!',
      subscriber: ''
    }
  },
  methods: {
    showThis () {
      console.log(this)
    },
    pop () {
      return this.str
    },
    tigger () {
      this.subscriber.subscribe({
        next: x => console.log(x)
      })
    },
    subscriptions () {
      let myObservable
      myObservable = Rx.Observable.create(function (observer) {
        observer.next(1)
        observer.next(2)
        observer.next(3)
        setTimeout(() => {
          observer.next(4)
          observer.complete()
        }, 1000)
      })
      return myObservable
    }
  },
  mounted () {
    // 输入验证
    let input = this.$refs.input
    let myInput = Rx.Observable.fromEvent(input, 'input')
    myInput.filter(event => event.target.value.length > 2)
    .map(event => event.target.value)
    .subscribe(value => console.log(value))
    // formArray
    this.subscriber = this.subscriptions()
  }
}
</script>
<style>
span{
    color:'orange';
}
</style>
