/*nav disappear on scroll down*/
var lastScrollTop;
nav = document.getElementById('nav-box');
window.addEventListener('scroll', function(){
    var scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        nav.style.top = '-800px';
    }
    else{
        nav.style.top = '0';
    }
    lastScrollTop = scrollTop;
});

/* mobile menu*/
const menu = document.querySelector('#mobile-menu');
const menucontent = document.querySelector('.navbar__content');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menucontent.classList.toggle('active');
}); 

/*Using 'JQuery load' to include an HTML file in another*/

/*$(function() {
    $("#skin").load("skin-care.html");
 });

 $(function() {
    $("#hair").load("hair-care.html");
 });*/
 