---
browserify: true
---

var $ = require('jquery/dist/jquery.min.js')
window.jQuery = window.jQuery || $
var jQuery = $
var vegas = require('vegas')

$(function() {

	$('#authors').hover(function() {
		$('#hire').show()
	}, function() {
		$('#hire').hide()
	})

	$('body').vegas({
		delay: 7500,
		overlay: true,
		slides: [
			{ src: 'images/background4.jpg', transition­Duration: 4000 },
			{ src: 'images/background3.jpg', transition­Duration: 4000 },
			{ src: 'images/background2.jpg', transition­Duration: 4000 },
			{ src: 'images/background1.jpg', transition­Duration: 4000 }
		]
	})

	$('.documentation').click(function() {
		$('ul ul').slideToggle()
		return false
	})

	$('.credits, .contact').click(function() {
		$('#overlay, #credits').fadeIn()
		return false
	})

	$('#overlay a, #credits a').click( function(e) {
		e.stopPropagation()
	})

	$('#overlay, #credits, #download').click( function() {
		$('#overlay, #credits, #download').fadeOut()
		return false
	})

	$('.mailto').click( function() {
		var a = $( this ).attr( 'href' )
		e = a.replace( '#', '' ).replace( '|', '@' ) + '.com'
		document.location = 'ma' + 'il' + 'to:' + e + "?subject=SBBE Website Contact!"
		e.preventDefault
		return false
	})

	$('#superheader h6').click(function(e) {
		var $$ = $(this),
			$menu = $('#superheader ul')

		e.stopPropagation()

		if ($menu.is(':visible')) {
			$menu.hide()
			$$.removeClass( 'open' )
		}
		else {
			$menu.show()
			$$.addClass( 'open' )
			$('body').one('click', function() {
				$('#superheader ul').hide()
			});
		}
	})
	$('#superheader li').click(function() {
		document.location = $( this ).find( 'a' ).attr( 'href' )
	})

	$('.download').click(function() {
		$('#overlay, #download').show()
	})
})
