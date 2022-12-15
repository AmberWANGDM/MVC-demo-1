import './app2.css'
import $ from 'jquery'

const $tabBar = $('.tab-bar')
const $tabContent = $('.tab-content')

$tabBar.on('click', 'li', (e) => {
  const $tab = $(e.target)
  // tab栏切换
  $tab.addClass('active').siblings().removeClass('active')
  const $index = $tab.index()
  // 内容切换
  $tabContent
    .children()
    .eq($index)
    .addClass('active')
    .siblings()
    .removeClass('active')
})
