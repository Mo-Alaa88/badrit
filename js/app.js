
window.onscroll = function() {
    myFunction()
};
const navbar = document.getElementById('navbar');
const sticky = navbar.offsetTop;
const img =document.getElementById('logo');
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky', 'colored');
        img.src = ('./image/logo-b.png');
    }else{
        navbar.classList.remove('sticky', 'colored');
        img.src = ('./image/logo.png');
    }
}

// // For Top nav
// function myFunction() {
//     const x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// }
// const logo = document.getElementById('logo');
// const img = document.getElementsByClassName('img');
// const header = document.getElementById('navbar');
// const header = document.getElementsByClassName('navbar');
// logo.src ='./image/logo.png';
// header[0].style.backgroundColor = "black";
// window.addEventListener(scroll, ()=>{
//     if (img[0].scrollTop >2){
//         logo.src = './image/logo-b.png';
//     }

// } )
//***************************************////


// $(window).on("scroll", function() {
//     if($(window).scrollTop() > 50) {
//         $(".navbar").addClass("active");
//         $('#logo').src('./image/logo-b.png').show();
//     } else {
//         //remove the background property so it comes transparent again (defined in your css)
//        $(".navbar").removeClass("active");
//     }
//     hideShow($(this).scrollTop());
//     $(document).scroll(function() {
//       hideShow($(this).scrollTop());
//     });
// });

///////////////////////////////////


////////////////////////////
// window.onscroll = function() {myFunction()};

// function myFunction() {
//     if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
//         document.getElementById("myImg").className = "slideUp";
//     }
// }
