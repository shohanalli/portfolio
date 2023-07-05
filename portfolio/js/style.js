var cursor_one = document.querySelector(".cursor_one");
var cursor_two = document.querySelector(".cursor_two");
document.addEventListener("mousemove", function(e) {
  cursor_one.style.cssText = cursor_two.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});


//filter section start
//button active system variable
var allFilter = document.querySelectorAll('.imageButns li.imgBtn');
//gallery filtering system variable
var portfolioCards = document.querySelectorAll('.portfolio_filter_image .portfolio_image_card');

for (var i = 0; i < allFilter.length; i++) {
  allFilter[i].addEventListener('click', myFunction);
}
function myFunction() {
  //button active system js
  var currentTab = document.querySelector('.imageButns .active');
  currentTab.classList.remove('active');
  this.classList.add('active');
//gallery filtering system 
  var filter = this.getAttribute('data-filter');
  if(filter != 'all'){
     for(let i = 0; i < portfolioCards.length; i++){
       portfolioCards[i].classList.add('hide');
       portfolioCards[i].classList.remove('activ')
       var currentItem = portfolioCards[i].getAttribute('data-item');
       if(currentItem == filter){
         portfolioCards[i].classList.add('activ');
         portfolioCards[i].classList.remove('hide');
       }
     }
  }
 //gallery filtering system else
 else{
  for(let i = 0; i < portfolioCards.length; i++){
    portfolioCards[i].classList.add('activ');
    portfolioCards[i].classList.remove('hide');
  }
 }
}









