import $ from 'jquery'
import './css/index.css'
import './css/index.less'

$(function(){
    $('li:odd').css('background-color','pink')
    $('li:even').css('background-color','blue')
})