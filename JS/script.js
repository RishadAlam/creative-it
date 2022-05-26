$(function () {
    // Fixed MenuBar

    let nav = $('#main_menu');
    let navTop = nav.offset().top;
    // alert(navTop);

    $(window).scroll(function () {
        let scrTop = $(window).scrollTop();
        // console.log(scrTop);

        if (navTop < scrTop) {
            nav.addClass('fixed-menu');
        } else {
            nav.removeClass('fixed-menu');
        }

        // Back To Top

        if (scrTop > 200) {
            $('.b-t-top').fadeIn(500);
        } else {
            $('.b-t-top').fadeOut(500);
        }
    });

    // Back To Top

    $('.b-t-top').click(function () {
        $('html,body').animate({
            scrollTop: 0,
        }, 1000);
    });


    // Slick Sider Banner Slide

    $('#banner').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        infinite: true,
        arrows: false,
    });

    // Whats app ChatBox



    $('#myButton').venomButton({
        phone: '01876637965',
        chatMessage: 'Hello!',
        message: 'Hi!',
        showPopup: true,
        position: "right",
        autoOpenTimeout: 2000,
        linkButton: true,
        size: '42px',
        backgroundColor: '#25D366',
        headerColor: '#128C7E',
        headerTitle: 'WhatsApp Chat',
    });

    // AOS Initialize
    AOS.init();

    // Venobox Initialize
    $('.venobox').venobox({
        framewidth: '1300px',
        border: '10px',
        bgcolor: '#ddd',
        arrowsColor: '#fff',
        autoplay: true,
        spinner: 'three-bounce',
        share: ['facebook', 'twitter', 'linkedin', 'pinterest',]
    });
});