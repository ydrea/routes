<template>
  <div v-for="stvor in stvorovi" :key="stvor.id"> 
<h2> {{stvor.ko}} </h2>
  </div>
</template>

<script>
export default {
data () {
    return {
        stvorovi: [
            {ko: 'medo', di: 'usumu', id: 1},
            {ko: 'zeko', di: 'uvrtu', id: 2},
            {ko: 'jede', di: 'mukve', id: 3},
        ]
    }
}
}
</script>

<style>

</style>