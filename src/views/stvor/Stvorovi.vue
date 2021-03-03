<template>
  <div>
       Koji je ovo param? {{ id }} </div>
</template>

<script>
export default {
    data() {
        return {
            
            id: this.$route.params.id
        }
    }
}
</script>

<style>

</style>