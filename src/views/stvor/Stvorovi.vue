<template>
  <div v-if="stvorovi">
       Koji je ovo param? {{ id }} , {{ stvorovi.ko }}, {{ stvorovi.di }} 
       
  </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
          stvorovi: null
        }
    },
    
mounted() {
  fetch ('http://localhost:3000/stvorovi/' + this.id)
  .then(res => res.json())
  .then(data => this.stvorovi = data)
},
}
</script>

<style>

</style>