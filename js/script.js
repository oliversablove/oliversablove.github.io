'use strict'

$(() => {
  // project ovrlay
  $('.card').mouseenter(function() {

    $(this).find('.card-overlay').css({'top': '-100%'})
    $(this).find('.card-hover').css({'top': '0'})

  }).mouseleave(function() {

    $(this).find('.card-overlay').css({'top': '0'})
    $(this).find('.card-hover').css({'top': '100%'})

  })

  // nav shrink

  $(window).scroll(() => {
    if ($(window).scrollTop() >= 500) {
      $('nav').addClass('scrolled')
      $('.navbar-brand').addClass('scrolled-logo')
    } else {
      $('nav').removeClass('scrolled')
      $('.navbar-brand').removeClass('scrolled-logo')
    }
  })
})
