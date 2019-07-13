$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        margin:0,
        dots: true,
        nav: false,
        items:1
    })
    
    function showMenu(){
        var top = $(window).scrollTop();
        console.log(top);
        if(top >= $('.main-menu').height()){
            $('.main-menu').addClass('scroll');
            setTimeout(function (){
                $('.main-menu').addClass('position-fixed')
            },300)
        } else{
            $('.main-menu').removeClass('position-fixed');
            $('.main-menu').removeClass('scroll');
        }
        if(top > $('.main-banner').height()){
            $('.main-menu').addClass('in');
        } else{
            $('.main-menu').removeClass('in');
        }
    }
    
    showMenu();
    
    $(window).scroll(function(){
        showMenu();
    })
})
