
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる



    //帯でのトップスクロールする
    document.addEventListener('DOMContentLoaded', function() {
        var scrollToTopBtn = document.getElementById('scroll-to-top');
        
        scrollToTopBtn.addEventListener('click', function(event) {
            event.preventDefault(); // デフォルトのリンク動作を防ぐ
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // スムーズにスクロール
            });
        });
    });

});
