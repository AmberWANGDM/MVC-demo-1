import './app4.css'
import $ from 'jquery'

const $circle = $('.circle')

$circle.on('click', () => {
  $circle.toggleClass('active')
})
