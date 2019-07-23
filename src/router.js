import VueRouter from 'vue-router';
import InputForm from './components/InputForm.vue';
import DisplayTable from './components/DisplayTable.vue';

const router = new VueRouter({
  routes: [
    { path: '/media', component: DisplayTable },
    { path: '/media/add', component: InputForm },
    { path: '/media/:id', component: DisplayTable },
    { path: '/media/:id/edit', component: DisplayTable },

    // no edit because these are aggregations on top of the media collection
    { path: '/author', component: DisplayTable },
    { path: '/author/:id', component: DisplayTable },
    { path: '/agency', component: DisplayTable },
    { path: '/agency/:id', component: DisplayTable }

    // if you want to delete then all of the media items that have a certain
    // author should be erased
  ]
});

export default router;
