import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase';

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: 'AIzaSyAU6MwSTI3cOYkwa1vgrR56nv59UPKIMEo',
  authDomain: 'vue-ts-firebase.firebaseapp.com',
  databaseURL: 'https://vue-ts-firebase.firebaseio.com',
  projectId: 'vue-ts-firebase',
  storageBucket: '',
  messagingSenderId: '701815931776',
  appId: '1:701815931776:web:08acc2ba91c33d94',
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
