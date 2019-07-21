<template>
  <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
    <p>{{currentPage}}</p>
  </div>
</template>

<script>
export default {
  data:function(){
    return{
      currentPage:1,
      perPage:10,
      rows:100
    }
  }
}
</script>

<style>

</style>
