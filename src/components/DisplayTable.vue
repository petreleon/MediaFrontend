<template>
  <div>
    <b-pagination-nav :link-gen="linkGen" :number-of-pages="pages" use-router></b-pagination-nav>
    <b-table striped hover :items="table.items" :fields="table.fields"></b-table>
    <p>{{$route.query.page||1}}</p>
  </div>
</template>

<script>
import MediaService from "../services/MediaService";
import { MainTableFields } from "../config/tableView";

export default {
  mounted: function() {
    MediaService.countMedia().then(response => {
      this.rows = response.data;
    });
    this.update(this.$route);
  },
  data: function() {
    return {
      //currentPage:1,
      perPage: 10,
      rows: 100,
      table: {
        fields: MainTableFields,
        items: []
      }
    };
  },
  methods: {
    linkGen(pageNum) {
      if (!this.$route.query.page && pageNum == 1) {
        return {
          path: "/",
          query: { ...this.$route.query }
        };
      }
      return {
        path: "/",
        query: {
          ...this.$route.query,
          page: pageNum
        }
      };
    },
    update(to) {
      console.log(to);
      MediaService.getMedias(
        to.query.page,
        to.query.name,
        to.query.order
      ).then(response => {
        this.table.items = response.data;
      });
    }
  },
  computed: {
    pages: function() {
      return Math.floor((this.rows + this.perPage - 1) / this.perPage);
    }
  },
  beforeRouteUpdate: function (to, from, next) {
    this.update(to);
    window.scrollTo(0, 0);
    next();
  }
};
</script>

<style>
</style>
