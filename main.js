$( function() {
  $( '#authors' ).hover( function(e) {
    $( '#hire' ).show();

  }, function(e) {
    $( '#hire' ).hide();
  });
});

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

/**
 * Slideshow
 */
 (function(e) {
     function t(a, n) {
         var r = {
             align: "center",
             valign: "center"
         };
         if (e.extend(r, n), 0 === a.height()) return a.load(function() {
             t(e(this), n)
         }), void 0;
         var i, s, g, d = o(),
             l = d.width,
             u = d.height,
             v = a.width(),
             c = a.height(),
             p = u / l,
             f = c / v;
         p > f ? (i = u / f, s = u) : (i = l, s = l * f), g = {
             width: i + "px",
             height: s + "px",
             top: "auto",
             bottom: "auto",
             left: "auto",
             right: "auto"
         }, isNaN(parseInt(r.valign, 10)) ? "top" == r.valign ? g.top = 0 : "bottom" == r.valign ? g.bottom = 0 : g.top = (u - s) / 2 : g.top = 0 - (s - u) / 100 * parseInt(r.valign, 10) + "px", isNaN(parseInt(r.align, 10)) ? "left" == r.align ? g.left = 0 : "right" == r.align ? g.right = 0 : g.left = (l - i) / 2 : g.left = 0 - (i - l) / 100 * parseInt(r.align, 10) + "px", a.css(g)
     }
     function a() {
         d.prependTo("body").fadeIn()
     }
     function n() {
         d.fadeOut("fast", function() {
             e(this).remove()
         })
     }
     function r() {
         return e("body").css("backgroundImage") ? e("body").css("backgroundImage").replace(/url\("?(.*?)"?\)/i, "$1") : void 0
     }
     function o() {
         var e = window,
             t = "inner";
         return "innerWidth" in window || (e = document.documentElement || document.body, t = "client"), {
             width: e[t + "Width"],
             height: e[t + "Height"]
         }
     }
     var i, s = e("<img />").addClass("sbbe-background"),
         g = e("<div />").addClass("sbbe-overlay"),
         d = e("<div />").addClass("sbbe-loading"),
         l = e(),
         u = null,
         v = [],
         c = 0,
         p = 5e3,
         f = function() {},
         h = {
             init: function(o) {
                 var i = {
                     src: r(),
                     align: "center",
                     valign: "center",
                     fade: 0,
                     loading: !0,
                     load: function() {},
                     complete: function() {}
                 };
                 e.extend(i, e.sbbe.defaults.background, o), i.loading && a();
                 var g = s.clone();
                 return g.css({
                     position: "fixed",
                     left: "0px",
                     top: "0px"
                 }).bind("load", function() {
                     g != l && (e(window).bind("load resize.sbbe", function() {
                         t(g, i)
                     }), l.is("img") ? (l.stop(), g.hide().insertAfter(l).fadeIn(i.fade, function() {
                         e(".sbbe-background").not(this).remove(), e("body").trigger("sbbecomplete", [this, c - 1]), i.complete.apply(g, [c - 1])
                     })) : g.hide().prependTo("body").fadeIn(i.fade, function() {
                         e("body").trigger("sbbecomplete", [this, c - 1]), i.complete.apply(this, [c - 1])
                     }), l = g, t(l, i), i.loading && n(), e("body").trigger("sbbeload", [l.get(0), c - 1]), i.load.apply(l.get(0), [c - 1]), c && (e("body").trigger("sbbewalk", [l.get(0), c - 1]), i.walk.apply(l.get(0), [c - 1])))
                 }).attr("src", i.src), e.sbbe
             },
             destroy: function(t) {
                 return t && "background" != t || (e(".sbbe-background, .sbbe-loading").remove(), e(window).unbind("*.sbbe"), l = e()), t && "overlay" != t || e(".sbbe-overlay").remove(), clearInterval(i), e.sbbe
             },
             overlay: function(t) {
                 var a = {
                     src: null,
                     opacity: null
                 };
                 return e.extend(a, e.sbbe.defaults.overlay, t), g.remove(), g.css({
                     margin: "0",
                     padding: "0",
                     position: "fixed",
                     left: "0px",
                     top: "0px",
                     width: "100%",
                     height: "100%"
                 }), a.src && g.css("backgroundImage", "url(" + a.src + ")"), a.opacity && g.css("opacity", a.opacity), g.prependTo("body"), e.sbbe
             },
             slideshow: function(t, a) {
                 var n = {
                     step: c,
                     delay: p,
                     preload: !1,
                     backgrounds: v,
                     walk: f
                 };
                 if (e.extend(n, e.sbbe.defaults.slideshow, t), n.backgrounds != v && (t.step || (n.step = 0), t.walk || (n.walk = function() {}), n.preload && e.sbbe("preload", n.backgrounds)), v = n.backgrounds, p = n.delay, c = n.step, f = n.walk, clearInterval(i), !v.length) return e.sbbe;
                 var r = function() {
                         0 > c && (c = v.length - 1), (c >= v.length || !v[c - 1]) && (c = 0);
                         var t = v[c++];
                         t.walk = n.walk, t.fade === void 0 && (t.fade = n.fade), t.fade > n.delay && (t.fade = n.delay), e.sbbe(t)
                     };
                 return r(), a || (u = !1, e("body").trigger("sbbestart", [l.get(0), c - 1])), u || (i = setInterval(r, n.delay)), e.sbbe
             },
             next: function() {
                 var t = c;
                 return c && (e.sbbe("slideshow", {
                     step: c
                 }, !0), e("body").trigger("sbbenext", [l.get(0), c - 1, t - 1])), e.sbbe
             },
             previous: function() {
                 var t = c;
                 return c && (e.sbbe("slideshow", {
                     step: c - 2
                 }, !0), e("body").trigger("sbbeprevious", [l.get(0), c - 1, t - 1])), e.sbbe
             },
             jump: function(t) {
                 var a = c;
                 return c && (e.sbbe("slideshow", {
                     step: t
                 }, !0), e("body").trigger("sbbejump", [l.get(0), c - 1, a - 1])), e.sbbe
             },
             stop: function() {
                 var t = c;
                 return c = 0, u = null, clearInterval(i), e("body").trigger("sbbestop", [l.get(0), t - 1]), e.sbbe
             },
             pause: function() {
                 return u = !0, clearInterval(i), e("body").trigger("sbbepause", [l.get(0), c - 1]), e.sbbe
             },
             get: function(e) {
                 return null === e || "background" == e ? l.get(0) : "overlay" == e ? g.get(0) : "step" == e ? c - 1 : "paused" == e ? u : void 0
             },
             preload: function(t) {
                 var a = [];
                 for (var n in t) if (t[n].src) {
                     var r = document.createElement("img");
                     r.src = t[n].src, a.push(r)
                 }
                 return e.sbbe
             }
         };
     e.sbbe = function(t) {
         return h[t] ? h[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? (e.error("Method " + t + " does not exist"), void 0) : h.init.apply(this, arguments)
     }, e.sbbe.defaults = {
         background: {},
         slideshow: {},
         overlay: {}
     }
 })(jQuery);
