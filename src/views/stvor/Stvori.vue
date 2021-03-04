<template>
  <div v-for="stvor in stvorovi" :key="stvor.id"> 
<router-link :to="{name: 'Stvorovi', params: {id: stvor.id}}"> 
<h2> {{stvor.ko}} </h2>
</router-link>
  </div>
</template>

<script>
export default {
data () {
    return {
        stvorovi: []
    }
},
mounted() {
  fetch ('http://localhost:3000/stvorovi')
  .then(res => res.json())
  .then(data => this.stvorovi = data)
}
}
</script>

<style>

</style>
