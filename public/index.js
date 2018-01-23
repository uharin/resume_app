/* global Vue, VueRouter, axios */




// =======================
// INDEX COMPONENT
// =======================

var IndexPage = {
  template: "#index-page",
  data: function() {
    return {
      students: [],


    };
  },
  created: function() {
    axios.get('/students').then(function(response) {
      this.students = response.data;
    }.bind(this));
  },
  methods: {},
  computed: {}
};

// =======================
// ROUTER 
// =======================


var router = new VueRouter({
  routes: [{ path: "/students", component: IndexPage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

// =======================
// MAIN VUE INSTANCE 
// =======================


var app = new Vue({
  el: "#vue-app",
  router: router
});