require('bootstrap-grid');
require('./styles.scss');

// var Vue = require('vue');

require(['Vue'], function(vue){
    var app = new Vue({
        el: '#app',
        data: {
          message: 'Hello Vue!'
        }
      })
});

