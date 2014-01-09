define(function(require) {

  var ContactView = require('views/contact')

  var Router = Backbone.Router.extend({
    currentView: null,

    initialize: function() {
      _.bindAll(this) 
      var path = window.location.pathname;
      var page = path.substring(path.lastIndexOf('/') + 1);
      this.activePage(page)
      if (page === 'contact')
        this.contact()
      if (page === '')
        this.index()

    },

    routes: {
      //"": "index",
    },

    changeView: function(view) {
      if ( null != this.currentView ) {
        this.currentView.undelegateEvents();
      }
      this.currentView = view;
      this.currentView.render();
    },

    index: function() {

      $("#owl-carousel").owlCarousel({
        items: 3,
        navigation : true

      });

      var $navbar = $("#home-hd .navbar");

      $(window).scroll(function() {

        $("#home-hd").toggleClass('toggle-nav-in-ad', $(window).scrollTop() == 0);

        $navbar.toggleClass('navbar-fixed-top', $(window).scrollTop() > 0);

            if($(window).width() >= 768) {
              if($(window).scrollTop() > 0) {
                $('#logo', $navbar).attr('src', '/img/logo-black-letters-100w.png');
              } else {
                $('#logo', $navbar).attr('src', '/img/logo-white-letters-156w.png');
              }
            }
      });
    },

    contact: function() {
      var view = new ContactView({el: $('.contact')} )
      $('#app').html(view.render().el)
    },

    activePage: function(page) {
      if (page === '') 
        var hrefString = "a[href='/']"
      else
        var hrefString = "a[href='/" + page + "']"
      var el = $(hrefString, '.navbar');
      if (el.parent().hasClass('active')) return
      else {
        $('.navbar li.active').removeClass('active')
        var parent = el.parent() 
        parent.addClass('active')
      }
    }
  });

  return new Router();
});
