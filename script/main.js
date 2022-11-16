// 공지사항, 갤러리 전환
$(".button-notice").click(function(){
  $(".tab-menu-notice").addClass('active').siblings().removeClass('active');
  $(".button-notice").addClass('active').siblings().removeClass('active');
}); 

$(".button-gallery").click(function(){
  $(".button-gallery").addClass('active').siblings().removeClass('active');
  $(".tab-menu-gallery").addClass('active').siblings().removeClass('active');
}); 

// 팝업창 띄우기
$(".background-pop-up").hide()

$(".tab-menu-li-first").click(function(e){
  e.preventDefault();
  $(".background-pop-up").show()
});

$(".close-button").click(function(e){
  e.preventDefault();
  $(".background-pop-up").hide()
});


// sub menu 띄우기
$('.main-menu-li').mouseover(function(){
  $('.sub-menu').stop().slideDown()
}).mouseout(function(){
  $('.sub-menu').stop().slideUp()
});

// banner animation
$(`.slideImg1`).addClass('active');
$(`.slideImg2`).addClass('next');
let index = 2;
setInterval(function(){
  $(`.slideImg${index}`).addClass('active').siblings().removeClass('active');
  index<3 ? index++ : index = 1;
  $(`.slideImg${index}`).addClass('next').siblings().removeClass('next');
}, 2500)



// 팝업 제이쿼리
// $(".layerPopup").click(function(e){
//   e.preventDefault();
//   $(".layer").show();
// }); 
// $(".layer .close").click(function(e){
//   e.preventDefault();
//   $(".layer").hide();
// });



// let currentIndex = 0;
// setInterval(function(){
//     if(currentIndex < 2){
//         currentIndex++;
//     } else {
//         currentIndex = 0;
//     }
//     let slidePosition = currentIndex * (-360)+"px";
//     $(".slideList").animate({ top: slidePosition},100);
// },3000);


// let index = 0;
// setInterval(function(){
//   if(index<2){
//     index++;
//   }else{
//     index = 0;
//   }
//   let slidePosition = index * (-360) + 'px';
//   $(".slideList").animate({top: slidePosition},100);
// }, 3000)


// var currentIndex = 0;
// setInterval(function(){
//     if(currentIndex < 2){
//         currentIndex++;
//     } else {
//         currentIndex = 0;
//     }
//     var slidePosition = currentIndex * (-360)+"px";
//     $(".slideList").animate({ top: slidePosition},400);
// },3000);


// var currentIndex = 0;
// setInterval(function(){
//     if(currentIndex < 2){
//         currentIndex++;
//     } else {
//         currentIndex = 0;
//     }
//     var slidePosition = currentIndex * (-360)+"px";
//     $(".slideList").animate({ top: slidePosition},400);
// },3000);


// $(".slideList").children("div:gt(0)").hide();
// var current = 0;
// setInterval(function(){
//     var next = (current+1) % 3;
//     $(".slideList").find("div").eq(current).fadeOut();
//     $(".slideList").find("div").eq(next).fadeIn();
//     current = next;
// },3000);

// var slideCount = $(".slideImg").length;
// var currentIndex = 0;
// var slidePosition;
// setInterval(function(){
//     if(currentIndex < slideCount - 1){
//         currentIndex++;
//     } else {
//         currentIndex = 0;
//     }
//     slidePosition = currentIndex * (-1200)+"px";
//     $(".slideList").animate({ left: slidePosition},400);
// },3000);


// const mainMenu = document.querySelector('.main-menu')
// const tabMenuButtons = document.querySelector('.tab-menu-buttons')
// // const  = document.querySelector('.')
// // const  = document.querySelector('.')
// // const  = document.querySelector('.')
// // const  = document.querySelector('.')
// // function openMainMenu(){
// // }

// function openTabMenu(){
//   isNoticeOpen = !isNoticeOpen;
// }
// const tabMenu = [
//   {
//     id : 'tabMenu1',
//     className: 'notice',
//     name : '공지사항',
//     isActive : true,
//   },
//   {
//     id : 'tabMenu2',
//     className: 'gallery',
//     name : '갤러리',
//     isActive : false,
//   },
// ]
// tabMenu.forEach((tab)=>{
//   const temp = document.createElement('div');
//   temp.innerHTML = `<div class="tab-menu-button tab-menu-${tab.className}">${tab.name}</div>`;
//   tabMenuButtons.append(temp);
// })
// mainMenu.addEventListener('mouseover' , )
// tabMenuButton.addEventListener('click', openTabMenu)
