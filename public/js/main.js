require.config({
  paths: {
    jQuery: 'libs/jquery',
    Underscore: 'libs/underscore',
    Backbone: 'libs/backbone',
    'Backbone.Validation': 'libs/backbone.validation',
    text: 'libs/text',
    templates: '../templates',
    transition: 'libs/bootstrap/js/transition',
    collapse: 'libs/bootstrap/js/collapse',
    utilities: 'libs/utilities',
    owl: 'libs/owl-carousel/owl.carousel',
    fancybox: 'libs/fancybox/source/jquery.fancybox',
    fancyboxMedia: 'libs/fancybox/source/helpers/jquery.fancybox-media'
  },

  shim: {
    'Backbone': ['Underscore', 'jQuery'],
    'Backbone.Validation': ['Backbone'],
    'owl': ['jQuery'],
    'transition': ['jQuery'],
    'collapse' : ['jQuery', 'transition'],
    'fancybox': ['jQuery'],
    'fancyboxMedia': ['fancybox'],
    'utilities': ['jQuery', 'Backbone', 'Backbone.Validation'],
    'app': ['Backbone', 'Backbone.Validation', 'utilities', 'owl', 'collapse', 'fancyboxMedia']
  }
});

require(['app'], function(app) {
  app.initialize();
});
