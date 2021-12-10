// ------------------------crossfit----------------------
$(function(){
    $(window).scroll(function (){
        $(".crossfit-img").each(function(){
            var targetAnime = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetAnime - windowHeight + 200){
                $(this).removeClass("active");
                $(this).addClass("animate__bounceInUp");
            }
        });
    });
});

// -------------------------top----------------------
$(function(){
    $(window).scroll(function (){
        $(".content-ttl").each(function(){
            var targetAnime = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetAnime - windowHeight + 200){
                $(this).removeClass("active");
                $(this).addClass("animate__bounceInUp");
            }
        });
    });
});

// -------------------------クラス画像----------------------
$(function(){
    $(window).scroll(function (){
        $(".slide-items").each(function(){
            var targetAnime = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetAnime - windowHeight + 100){
                $(this).removeClass("active");
                $(this).addClass("animate__fadeInRight");
                
            }
        });
    });
});
// -------------------------クラス画像2----------------------
$(function(){
    $(window).scroll(function (){
        $(".slide-top").each(function(){
            var targetAnime = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetAnime - windowHeight + 200){
                $(this).removeClass("active");
                $(this).addClass("animate__fadeInLeft");
            }
        });
    });
});

// -------------------------flow----------------------
$(function(){
    $(window).scroll(function (){
        $(".flow-trigger").each(function(){
            var targetAnime = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetAnime - windowHeight + 200){
                $(this).removeClass("active");
                $(this).addClass("animate__zoomInDown");
            }
        });
    });
});

// -------------------------コーチ----------------------

$(function(){
    $(window).scroll(function (){
        $(".coach-content").each(function(){
            var targetAnime = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetAnime - windowHeight + 200){
                $(this).removeClass("active");
                $(this).addClass("animate__slideInUp");
            }
        });
    });
});


// ------------------------trial----------------------

$(function(){
    $(window).scroll(function (){
        $(".trial-ttl").each(function(){
            var targetAnime = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetAnime - windowHeight + 200){
                $(this).removeClass("active");
                $(this).addClass("animate__heartBeat");
                $(this).addClass("animate__repeat-3");

            }
        });
    });
});

$(function(){
    $('.side-animated').hover(function(){
        $(this).addClass('animate__heartBeat');
    },
    function(){
        $(this).removeClass('animate__heartBeat');
    });
});
