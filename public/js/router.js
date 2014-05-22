define(function(require) {

  var ContactView = require('views/contact')
  var Masonry = require('masonry')
  var bridget = require('jquery-bridget/jquery.bridget')
  var imagesLoaded = require('imagesLoaded')
  var skrollr = require('skrollr')
  bridget( 'masonry', Masonry );


  var Router = Backbone.Router.extend({
    currentView: null,

    initialize: function() {
      _.bindAll(this)
      var path = window.location.pathname;
      var page = path.substring(path.lastIndexOf('/') + 1);
      this.activePage(page)
      if (page === 'contact')
        this.contact()
      if (page === 'instructional-videos')
        this.instructionalVideos()
      if (page === '')
        this.index()
    },

    routes: {
      //"": "index",
    },

    index: function() {

      // Setup variables
      $window = $(window);
      $slide = $('.slide');
      $slideTall = $('.slideTall');
      $slideTall2 = $('.slideTall2');
      $body = $('body');

        //FadeIn all sections
      $body.imagesLoaded( function() {
        setTimeout(function() {

              // Resize sections
              adjustWindow();

              // Fade in sections
            $body.removeClass('loading').addClass('loaded');

        }, 800);
      });

      function adjustWindow(){

        // Init Skrollr
        var s = skrollr.init({
            render: function(data) {

                //Debugging - Log the current scroll position.
                //console.log(data.curTop);
            }
        });

        // Get window size
          winH = $window.height();

          // Keep minimum height 550
          if(winH <= 550) {
          winH = 550;
        }

          // Resize our slides
          $slide.height(winH);
          $slideTall.height(winH*2);
          $slideTall2.height(winH*3);

          // Refresh Skrollr after resizing our sections
          s.refresh($('.slide'));

      }


      //window.scrollReveal = new scrollReveal({reset: true});

      //$(window).stellar({ });

      $("#owl-carousel").owlCarousel({
        items: 3,
        //navigation : true
      });

      /*var welcomeMessage = $('#slide2').offset().top
      $( ".scroll-down" ).click(function() {
        $('html, body').animate({
          'scrollTop': welcomeMessage
        }, 1500)
      })
      */

      $(".fancybox")
        .attr('rel', 'gallery')
        .fancybox({
          padding : 0,
      });


      //$('#masonry').masonry();
      var $container = $('#masonry');
      $container.imagesLoaded( function() {
        $container.masonry({
          columnWidth: '.smallest-unit',
          itemSelector: '.item',
          //gutter: 10,
        });
      });



      var $navbar = $("#home .navbar");

      $(window).scroll(function() {

        if($(window).width() >= 768) {

          $("#slide-1").toggleClass('toggle-nav-in-ad', $(window).scrollTop() == 0);

          $navbar.toggleClass('navbar-fixed-top', $(window).scrollTop() > 0);

          $(".navbar-brand span").toggleClass('logo-white', $(window).scrollTop() == 0);
        }
      });
    },

    contact: function() {
      var view = new ContactView({el: $('.contact')} )
      $('#app').html(view.render().el)
    },

    instructionalVideos: function() {
      $('.fancybox')
        .attr('rel', 'gallery')
        .fancybox({
          openEffect  : 'elastic',
          closeEffect : 'none',
          nextEffect  : 'none',
          prevEffect  : 'none',
          width: 853,
          height: 480,
          padding: 0,
          margin: 0,
          autoSize: true,
          aspectRatio: true,
          helpers : { media: true },
          youtube : {
            autoplay    : 1,        // default
            autohide    : 1,        // default
            rel         : 0,        // default
            enablejsapi : 1,        // default
            wmode       : 'opaque'  // default
            // height and width set to 100% by fancybox
          },
          beforeShow: function() {
            // Find the iframe ID
            var id = $.fancybox.inner.find('iframe').attr('id');
            // Create video player object and add event listeners
            var player = new YT.Player(id, {
             events: {
               'onReady': function(event){
                 event.target.setVolume(60);
                 //event.target.playVideo();
               },
               'onStateChange': function(event){
                 if (event.data === 0) {
                   $.fancybox.next();
                 }
               }
              }
           });
          }
      });
      // after fancybox show the videos
      $('#instructionalVideo').css('display', 'block')
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
