$( function() {
  $( '#authors' ).hover( function(e) {
    $( '#hire' ).show();

  }, function(e) {
    $( '#hire' ).hide();
  });
});

/*
$( function() {
  $.sbbe( 'slideshow', {
    delay: 7500,
    backgrounds: [
      { src: 'images/background4.jpg', fade: 4000 },
      { src: 'images/background3.jpg', fade: 4000 },
      { src: 'images/background2.jpg', fade: 4000 },
      { src: 'images/background1.jpg', fade: 4000 }
    ]
  } )( 'overlay' );

  $( '.documentation' ).click( function() {
    $( 'ul ul' ).slideToggle();
    return false;
  });

  $( '.credits, .contact' ).click( function() {
    $( '#overlay, #credits' ).fadeIn();
    return false;
  });

  $( '#overlay a, #credits a' ).click( function(e) {
    e.stopPropagation();
  });

  $( '#overlay, #credits, #download' ).click( function() {
    $( '#overlay, #credits, #download' ).fadeOut();
    return false;
  });

  $( '.mailto' ).click( function() {
    var a = $( this ).attr( 'href' );
    e = a.replace( '#', '' ).replace( '|', '@' ) + '.com';
    document.location = 'ma' + 'il' + 'to:' + e + "?subject=SBBE Website Contact!";
    e.preventDefault;
    return false;
  });

  $("#superheader h6").click(function(e) {
    var $$ = $( this ),
      $menu = $('#superheader ul');

    e.stopPropagation();

    if ( $menu.is(':visible') ) {
      $menu.hide();
      $$.removeClass( 'open' );
    } else {
      $menu.show();
      $$.addClass( 'open' );
      $('body').one('click', function() {
        $('#superheader ul').hide();
      });
    }
  });
  $( "#superheader li" ).click( function( e ) {
    document.location = $( this ).find( 'a' ).attr( 'href' );
  });

  $( '.download' ).click( function() {
    $( '#overlay, #download' ).show();
  });
} );
*/
