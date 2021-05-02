$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow")
})

$(function(){

    let toggleMode = true;

        $('#expand_more').on('click', function(){
        if(toggleMode){
            $('#expand_more').css({
                'transform': 'rotate(180deg)'
            })
            $('.navWrap').css({
                'height': '300px',
                'padding': '30px 10px'
            })
            toggleMode = false
        }else{
            $('#expand_more').css({
                'transform': 'rotate(0deg)'
            })
            $('.navWrap').css({
                'height': '0px',
                'padding': '0px 10px'
            })

            toggleMode = true;
        }
    })
})

$('.item7').on('click', function(){
    window.location.href = 'https://www.youtube.com/watch?v=Lrj2Hq7xqQ8'
})

$('.light').on('click', function(){
    window.location.href = 'light/light.html'
})

$('.dark').on('click', function(){
    alert('The mode is already dark boss ;)')
})

$('.browse').on('click', function(){
    window.location.href = 'browse/browse.html'
})

$('.item1').css({
    'background-image': 'url(images/img1.png)'
})
$('.item1').css({
    'background-image': 'url(images/img2.png)'
})
$('.item1').css({
    'background-image': 'url(images/img3.png)'
})

let timer;
let n = 3;

timer = setInterval(function () {
    if(n == 4){
        n = 1;
    }
    $('.item1').css({
        'background-image': `url(images/img${n}.png)`
    })
    n++
}, 5000);