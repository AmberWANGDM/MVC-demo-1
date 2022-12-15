import $ from 'jquery'
import './app3.css'

const $box = $('.box')

$box.on('mouseenter', () => {
  $box.toggleClass('new')
})
