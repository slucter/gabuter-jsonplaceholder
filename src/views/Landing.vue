<template>
    <div class="container-landing">
        <Aside @closeAside="closeAside"/>
        <Main @btnBurger="btnBurger"/>
    </div>
</template>

<script>
import Aside from '../components/modules/Aside.vue'
import Main from '../components/modules/Main.vue'

export default {
  name: 'Landing',
  components: {
    Aside,
    Main
  },
  methods: {
    btnBurger () {
      document.querySelector('aside').classList.add('showAside')
    },
    closeAside () {
      document.querySelector('aside').classList.remove('showAside')
    }
  }
}
</script>

<style scoped>
.container-landing{
    display: flex;
    width: 100vw;
    justify-content: space-between;
}

</style>
