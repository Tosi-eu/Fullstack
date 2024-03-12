$(document).ready(function () {
    // Lista de nomes de vídeos
    var videoNames = [
    'VID-20231106-WA0025.mp4',
    'VID-20231103-WA0040.mp4',
    '20231104_002151.mp4',
    'VID-20231104-WA0002.mp4',
    'VID-20231103-WA0045.mp4',
    'VID-20231103-WA0046.mp4',
    'VID-20231103-WA0039.mp4',
    'VID-20231106-WA0027.mp4',
    'VID-20231103-WA0042.mp4',
    '20231106_091349.mp4',
    'VID-20231103-WA0030.mp4',
    'VID-20231104-WA0000.mp4',
    'VID-20231103-WA0050.mp4',
    'VID-20231106-WA0022.mp4',
    'VID-20231103-WA0049.mp4',
    'VID-20231106-WA0028.mp4',
    'VID-20231103-WA0047.mp4',
    'VID-20231103-WA0044.mp4',
    'VID-20231103-WA0032.mp4',
    'VID-20231106-WA0029.mp4',
    'VID-20231104-WA0003.mp4',
    'VID-20231103-WA0037.mp4',
    'VID-20231103-WA0035.mp4',
    'VID-20231103-WA0033.mp4',
    'VID-20231104-WA0001.mp4',
    'VID-20231103-WA0041.mp4',
    'VID-20231106-WA0023.mp4',
    '20231106_091343.mp4',
    'VID-20231106-WA0024.mp4',
    'VID-20231103-WA0038.mp4',
    'VID-20231103-WA0036.mp4',
    'VID-20231103-WA0043.mp4',
    '20231104_184200.mp4',
    'VID-20231106-WA0026.mp4',
    'VID-20231103-WA0048.mp4',
    'VID-20231103-WA0031.mp4',
    'VID-20231103-WA0051.mp4',
    'VID-20231103-WA0034.mp4'
    ];

    var slider = $('#slider');

    // Inicialize o carrossel
    slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: false,
        adaptiveHeight: true,
        arrows: true,
        pauseOnHover:true
    });

    for (var i = 0; i < videoNames.length; i++) {
        var videoURL = 'videos/' + videoNames[i];
        slider.slick('slickAdd', '<div><div class="video-wrapper"><iframe src="' + videoURL + '" allowfullscreen frameborder="0"></iframe></div></div>');
    }

    slider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
        // Pausar o carousel Slick
        slider.slick('slickPause');

        // Encontrar e pausar os vídeos dentro do slide atual
        slick.$slides.eq(currentSlide).find('video').each(function () {
            this.pause();
        });

        // Configurar o volume do vídeo dentro do slide atual
        var iframe = slick.$slides.eq(currentSlide).find('iframe')[0];
        iframe.contentWindow.postMessage({ 'command': 'setVolume', 'volume': 0.3 }, '*');
    })
});
