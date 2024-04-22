$(document).ready(function(){

    $(".insta_body .insta_btn_1").addClass("active");
    // 헤더 스크롤이벤트
    
    
        
        $(window).scroll(function(){
            const height = $(window).scrollTop();
            if(height >= 500){
                $('.header-area').addClass('active')
            }else if(height < 500){
                $('.header-area').removeClass('active')
            }
            if(height >= 500){
                $('.logo').addClass('active')
            }else if(height < 500){
                $('.logo').removeClass('active')
            }
                
            
        });
    
        
    
    
    

 //서브메뉴 이벤트
    // $('.head-l li').mouseenter(function(){
    //     let result = $(this).attr('data-alt'); //***********변수에 저장하여 데이터값 불러오기********
    //     $('.sub-menu-box').addClass('active');
    //     $(`#${result}`).addClass('active');

    $('.head-l li').mouseenter(function(){
        let result = $(this).attr('data-alt'); //변수에 저장하여 데이터값 불러오기
        $('.sub-menu-box').addClass('active');
        $(`#${result}`).addClass('active');
        $(`#${result}`).siblings().removeClass('active')

        
    });
    
    $('.sub-menu-box').mouseleave(function(){
        $(this).removeClass('active');
        $('.sub-menu-detail').removeClass('.active')
        
    });


//섹션2 호버 오퍼시티 이벤트
// 호버 이벤트시 nth로 하나씩 지정하지말고 this선택자를 사용하면 이벤트하고자 하는 아이의 이름이 같더라도 마우스가 호버되는아이만 이벤트가 적용된다
    $('.sec2-photo:nth-child(1)').mouseenter(function(){
        $('.sec2-photo:nth-child(1) img').addClass('active')
    });
    $('.sec2-photo:nth-child(2)').mouseenter(function(){
        $('.sec2-photo:nth-child(2) img').addClass('active')
    });
    
    $('.sec2-photo img').mouseleave(function(){
        $(this).removeClass('active')
    });

// 섹션4 스케일 이벤트
    $('.sec4-photo img').mouseenter(function(){
        $(this).addClass('active')
    });
    $('.sec4-photo img').mouseleave(function(){
        $(this).removeClass('active')
    });

    //스와이퍼


    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        slidesPerGroup:1,
        spaceBetween: 30,
        freeMode: true,
        loop:true,
        speed:2000,
        allowTouchMove : true,
        autoplay:{
            delay:1000,
            disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints:{
            700:{
                slidesPerView:3,
            },
            450:{
              slidesPerView: 2,
              
            },
            300:{
                slidesPerView:1,
            },
          }
        
      });

    


    $('#lgi').click(function(){
        $('.bg').addClass('active')
    });
    $('#lgi').click(function(){
        $('.login-box').addClass('active')
    });
   
    $('.btn').click(function(){
        $('.login-box').removeClass('active')
        $('.bg').removeClass('active')
    });
    
    
    $('.m-sub svg').click(function(){
        $(this).parent().siblings('.m-sub-txt').toggleClass('active')
        $(this).parents('.m').siblings().children('.m-sub-txt').removeClass('active')
    });

    $('.hamburger').click(function(){
        $('.hamburger span').toggleClass('active');
    });
    
    $('.hamburger').click(function(){
        $('.mobile-hamburger-menu').toggleClass('active')
    });
    

    $('.feed_1').mouseenter(function(){
        $('.feed_txt').addClass('active')
        $(this).siblings().children().removeClass('active')
    })

    $('.feed_1').mouseleave(function(){
        $('.feed_txt').removeClass('active')
    });  
    

    $('.reels_1').mouseenter(function(){
        $('.reels_txt').addClass('active')
        $(this).siblings().children().removeClass('active')
        $('.play_btn').addClass('active')
        $(this).siblings().children('.play_btn').removeClass('active')
    })

    $('.reels_1').mouseleave(function(){
        $('.reels_txt').removeClass('active')
        $('.play_btn').removeClass('active')
    });

    

    $(".insta_btn_1").click(function() {
        $(this).addClass('active')
        $(".insta_reels").removeClass("active");
        $(".insta_feed").addClass("active");
        $('.insta_btn_2').removeClass('active')
        $('.insta_btn_1').removeClass('active')
    });
    
    $(".insta_btn_2").click(function() {
        $(this).addClass('active')
        $(".insta_body .insta_reels").addClass("active");
        $(".insta_body .insta_feed").removeClass("active");
        $('.insta_btn_1').addClass('active')
    });
    

     
    
    
});
