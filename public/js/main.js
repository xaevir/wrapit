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
  },

  shim: {
    'Backbone': ['Underscore', 'jQuery'],
    'Backbone.Validation': ['Backbone'],
    'owl': ['jQuery'],
    'transition': ['jQuery'],
    'collapse' : ['jQuery', 'transition'],
    //'carousel': ['transition'],
    'utilities': ['jQuery', 'Backbone', 'Backbone.Validation'],
    //'app': ['Backbone', 'carousel', 'Backbone.Validation', 'utilities', 'collapse']
    'app': ['Backbone', 'Backbone.Validation', 'utilities', 'owl', 'collapse']
  }
});

require(['app'], function(app) {
  app.initialize();
});
