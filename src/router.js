import VueRouter from 'vue-router';
import InputForm from './components/InputForm.vue';
import DisplayMedia from './components/DisplayMedia.vue';
import DisplayPublisher from './components/DisplayPublisher';

const router = new VueRouter({
  routes: [
    { path: '/media', component: DisplayMedia },
    { path: '/media/add', component: InputForm },
    { path: '/media/:id', component: DisplayMedia },
    { path: '/media/:id/edit', component: DisplayMedia },

    // no edit because these are aggregations on top of the media collection
    { path: '/creator', component: DisplayMedia },
    { path: '/creator/:name', component: DisplayMedia },
    { path: '/publisher', component: DisplayPublisher },
    { path: '/publisher/:name', component: DisplayPublisher }

    // if you want to delete then all of the media items that have a certain
    // author should be erased
  ]
});

export default router;
