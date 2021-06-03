(function($) {
    "use strict"; // Start of use strict
  
    // Toggle the side navigation
    $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
      $("body").toggleClass("sidebar-toggled");
      $(".sidebar").toggleClass("toggled");
      if ($(".sidebar").hasClass("toggled")) {
        $('.sidebar .collapse').collapse('hide');
      };
    });
  
    // Close any open menu accordions when window is resized below 768px
    $(window).resize(function() {
      if ($(window).width() < 768) {
        $('.sidebar .collapse').collapse('hide');
      };
      
      // Toggle the side navigation when window is resized below 480px
      if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
        $("body").addClass("sidebar-toggled");
        $(".sidebar").addClass("toggled");
        $('.sidebar .collapse').collapse('hide');
      };
    });
  
    // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
    $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
      if ($(window).width() > 768) {
        var e0 = e.originalEvent,
          delta = e0.wheelDelta || -e0.detail;
        this.scrollTop += (delta < 0 ? 1 : -1) * 30;
        e.preventDefault();
      }
    });
  
    // Scroll to top button appear
    $(document).on('scroll', function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Smooth scrolling using jQuery easing
    $(document).on('click', 'a.scroll-to-top', function(e) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top)
      }, 1000, 'easeInOutExpo');
      e.preventDefault();
    });
      
      //Evento del botón que me devuelve el listado de películas de un determinado actor
      $("#btn-search-movies-by-actor").click(function(){
                  
          $.ajax( {
              
              type: "GET",
              url: '/ProyectoDatos/PlatilloFamosoRestaurantes?Lugar=' + $('#txt-actor').val(),
              success: function(data) {
                  //alert("Result" + data.resultado);
                  var htmlMovieList = '<ul>';
                  $.each(data.peliculas, function(i,item){
                        htmlMovieList += '<li>' + item + '</li>';
              console.log(item)
                  });
                  htmlMovieList += '</ul>';
                  $('#div-listado-actores').html("");
                  $('#div-listado-actores').append(htmlMovieList);
              }
          } );
          
          
      });
  
    $("#btn-search-lugares").click(function(){
      
      
      
      
      console.log($('#txt-zona').val())
      console.log($('#txt-tipo').val())
          $.ajax( {
              
              
              type: "GET",
              
              url: '/ProyectoDatos/Restaurantes?zona=' + $("#txt-zona").val() + "&&tipo=" + $("#txt-tipo").val(),
              success: function(data) {
                  //alert("Result" + data.resultado);
                  var htmlMovieList = '<ul>';
                  $.each(data.lugares, function(i,item){
                        htmlMovieList += '<li>' + item + '</li>';
              console.log(item)
                  });
                  htmlMovieList += '</ul>';
                  $('#div-listado-actores').html("");
                  $('#div-listado-actores').append(htmlMovieList);
              }
          } );
              
      });
      
      $("#btn-add-place").click(function(){
      
      
      
      
      console.log($('#txt-new-zona').val())
      console.log($('#txt-new-tipo').val())
      console.log($('#txt-new-res').val())
      console.log($('#txt-new-fav').val())
      var mandar = '/ProyectoDatos/AgregarDatos?zona=' + $("#txt-new-zona").val() + "&tipo=" + $("#txt-new-tipo").val()+ "&famoso=" + $("#txt-new-fav").val() + "&name=" + $("#txt-new-res").val()
      console.log(mandar)

          $.ajax( {
              
              
              type: "GET",
              
              url: mandar,
              success: function(data) {
                  //alert("Result" + data.resultado);
                  var htmlMovieList = '<ul>';
                  $.each(data.nodo, function(i,item){
                        htmlMovieList += '<li>' + item + '</li>';
                        console.log(item)
                  });
                  htmlMovieList += '</ul>';
                  $('#div-listado-res').html("");
                  $('#div-listado-res').append(htmlMovieList);
              }
          } );
              
      });
      
  
  })(jQuery); // End of use strict
  