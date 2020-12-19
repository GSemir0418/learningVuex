<template>
  <div>
    count:{{ $store.state.count }}
    <button @click="addCount">+</button>
    <button @click="decrement">-</button>
    <div>派生属性getters：{{ $store.getters.desc }}</div>
  </div>
</template>
<script>
export default {
  methods: {
    addCount() {
      //console.log(this.$store.state.count)
      this.$store.dispatch("add", 70); //通过触发action来更改state
    },
    // decrement(){
    //   this.$store.commit('decrement')
    // }
    decrement() {
      this.$store.dispatch("decrement");
    },
  },
};
</script>
