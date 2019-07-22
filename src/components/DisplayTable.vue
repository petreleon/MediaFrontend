<template>
  <div>
     <b-pagination-nav :link-gen="linkGen" :number-of-pages="pages" use-router></b-pagination-nav>
     <b-table striped hover :items="table.items" :fields="table.fields"></b-table>
    <p>{{$route.query.page||1}}</p>
  </div>
</template>

<script>
import MediaService from '../services/MediaService'
import {tableFields} from '../config/tableView';

export default {
  mounted:function(){
  

    MediaService.countMedia().then(response => {
      this.rows = response.data;
    });
    this.update();
  },
  data:function(){
    return{
      //currentPage:1,
      perPage:10,
      rows:100,
      table:{
        fields:tableFields,
        items: [
        ]
      }
    }
  },
  methods: {
    linkGen(pageNum) {
      return {
        path: '/',
        query: { ...this.$route.query,
            page: pageNum }
      }
    },
    update(){
      MediaService.getMedias(this.$route.query.page,this.$route.query.name,this.$route.query.order).then(response => {
        this.table.items = response.data;
      });
    }
  },
  computed:{
    pages:function(){
      return Math.floor(((this.rows+this.perPage-1)/this.perPage));
    }
  },
  watch:{
    '$route.query':function() {
      this.update();
    }
  }
}
</script>

<style>

</style>
