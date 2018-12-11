require('bootstrap-grid');
require('./styles.scss');

// var Vue = require('vue');
import Vue from 'vue';

$(document).ready(function() {
    if ($(window).width() > 991) {
        var heightOne = $('.boy-box').height();
        var heightTwo = parseInt(heightOne);
        $('.cont_set_info .red-box').height(heightTwo); 
    }
    else {
        $('.cont_set_info .red-box').height('auto');
    }
});



