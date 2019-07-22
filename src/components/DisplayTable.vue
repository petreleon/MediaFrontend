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
    MediaService.getMedias().then(response => {
      this.table.items = response.data;
    });
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
    }
  },
  computed:{
    pages:function(){
      return Math.floor(((this.rows+this.perPage-1)/this.perPage));
    }
  },
  watch:{
    '$route.query.page':function() {
      MediaService.getMediasbyPage(this.$route.query.page).then(response => {
        this.table.items = response.data;
      });
    }
  }
}
</script>

<style>

</style>
