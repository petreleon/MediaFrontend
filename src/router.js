import VueRouter from 'vue-router';
import InputForm from './components/InputForm.vue';
import DisplayTable from './components/DisplayTable.vue'
const router = new VueRouter({
  routes: [
    { path: '/', component: DisplayTable },
    { path: '/InputForm', component: InputForm }
  ]
});
export default router;
