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
    fancyboxMedia: 'libs/fancybox/source/helpers/jquery.fancybox-media',
    masonry: 'libs/masonry',
    'jquery-bridget/jquery.bridget': 'libs/masonry',
    imagesLoaded: 'libs/imagesLoaded',
    stellar: 'libs/stellar.jquery',
    waypoints: 'libs/waypoints.jquery',
    easing: 'libs/easing.jquery',
    scrollReveal: 'libs/scrollReveal',
    skrollr: 'libs/skrollr',
  },

  shim: {
    'Backbone': ['Underscore', 'jQuery'],
    'Backbone.Validation': ['Backbone'],
    'owl': ['jQuery'],
    'transition': ['jQuery'],
    'collapse' : ['jQuery', 'transition'],
    'fancybox': ['jQuery'],
    'fancyboxMedia': ['fancybox'],
    'masonry': ['jQuery'],
    'stellar': ['jQuery'],
    'waypoints': ['jQuery'],
    'easing': ['jQuery'],
    'utilities': ['jQuery', 'Backbone', 'Backbone.Validation'],
    'app': ['Backbone',
            'Backbone.Validation',
            'utilities',
            'owl',
            'collapse',
            'fancyboxMedia',
            'masonry',
            'stellar',
            'waypoints',
            'easing',
            'scrollReveal',
            'skrollr'
            ]
  }
});

require(['app', 'require'], function(app, require ) {

  require(['require', 'http://192.168.1.6:3000/socket.io/socket.io.js'], function(require){
    window.___socket___ = io.connect('http://192.168.1.6:3000')
    require(['http://192.168.1.6:3001/client/browser-sync-client.0.7.0.js'])
  })
  app.initialize();
});
