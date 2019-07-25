<template>
  <b-table striped hover :items="table.items" :fields="table.fields"></b-table>
</template>

<script>
import MediaService from "../services/MediaService";
import {
  PublisherTableFields,
  PublishersTableFields
} from "../config/tableView";
export default {
  mounted: function() {
    this.update(this.$route.params.name);
  },
  data: function() {
    return {
      publisher: "",
      table: {
        fields: PublisherTableFields,
        items: []
      }
    };
  },
  methods: {
    update(name) {
      if (name) {
        MediaService.getPublisher(name).then(response => {
          //console.log(response);
          this.table.fields = PublisherTableFields;
          this.table.items = response.data[0].publications;
          this.publisher = response.data[0].Publisher;
        });
      }
      else{
        MediaService.getPublishers().then(response => {
          //console.log(response);
          this.table.fields = PublishersTableFields;
          this.table.items = response.data;
        });
      }
    }
  },
  beforeRouteUpdate(to, from, next) {
    // react to route changes...
    this.update(to.params.name);
    next();
  }
};
</script>

<style>
</style>
