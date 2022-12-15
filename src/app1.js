import $ from 'jquery'
import './app1.css'

const $button1 = $('.add')
const $button2 = $('.sub')
const $button3 = $('.mul')
const $button4 = $('.div')
const $number = $('#resultNum')
const n = localStorage.getItem('res')
$number.text(n || 100)

$button1.on('click', () => {
  let n = parseInt($number.text())
  n += 1
  localStorage.setItem('res', n)
  $number.text(n)
})
$button2.on('click', () => {
  let n = parseInt($number.text())
  n -= 1
  localStorage.setItem('res', n)
  $number.text(n)
})
$button3.on('click', () => {
  let n = parseInt($number.text())
  n *= 2
  localStorage.setItem('res', n)
  $number.text(n)
})
$button4.on('click', () => {
  let n = parseInt($number.text())
  n /= 2
  localStorage.setItem('res', n)
  $number.text(n)
})
