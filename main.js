//function to select the elemnt

const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list')
const navBrand = document.querySelector('.nav-brand')
const body = document.querySelector('body')

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('active')
    navList.classList.toggle('active')
    body.classList.toggle('active')
})