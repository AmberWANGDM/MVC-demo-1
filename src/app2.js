import './app2.css'
import $ from 'jquery'

const $tabBar = $('.tab-bar')
const $tabContent = $('.tab-content')
const localKey = 'app2-index'
const index = localStorage.getItem(localKey) || 0

$tabBar.on('click', 'li', (e) => {
  const $tab = $(e.target)
  // tab栏切换
  $tab.addClass('active').siblings().removeClass('active')
  const index = $tab.index()
  localStorage.setItem(localKey, index)
  // 内容切换
  $tabContent
    .children()
    .eq(index)
    .addClass('active')
    .siblings()
    .removeClass('active')
})

$tabBar.children().eq(index).trigger('click') // 注意这句话
