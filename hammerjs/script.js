'use strict'

document.addEventListener('DOMContentLoaded', init)

function init () {
	// find paragraphs
  let first = document.querySelector('.box p:nth-child(1)')
  let second = document.querySelector('.box p:nth-child(2)')
  let third = document.querySelector('.box p:nth-child(3)')
  let fourth = document.querySelector('.box p:nth-child(4)')

	// create the Hammer tap events
  /******************************
  Every instance of a Hammer object has
  tap, doubletap, press, plus
  horizontal swipe and pan built in.
  When you create the Hammer object you can
  add an options object which will define the
  various properties for all the event types
  ******************************/
  let hammer1 = new Hammer(first)
  let hammer2 = new Hammer(second)
  let hammer3 = new Hammer(third, {event: 'press', threshold: 10, time: 400})
  let hammer4 = new Hammer(fourth)

  /*******************************************
  Any of the "on" methods can take one or more event types
  By default, pinch and rotate are disabled
  If you want to enable them then add the following
  *******************************************/
  hammer1.get('pinch').set({ enable: true })
  // hammer1.get('rotate').set({ enable: true });

  // add the listener functions to the hammer objects
  hammer1.on('tap', function (ev) {
    ev.target.innerHTML += ' - tapped - '
  })
  hammer1.on('swipeleft', function (ev) {
    ev.target.innerHTML += ' - swiped left - '
  })

  hammer2.on('doubletap', function (ev) {
    ev.target.innerHTML += ' - doubletapped - '
  })
  hammer3.on('press', function (ev) {
    ev.target.innerHTML += ' - pressed - '
  })
  hammer4.on('swipeleft swiperight', function (ev) {
    ev.target.innerHTML += ' - swiped - '
  })
}
