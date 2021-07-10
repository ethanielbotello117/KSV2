$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow")
    setTimeout(function(){
        $('body').css({
            'position': 'static'
        })
    }, 500)
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
    window.location.href = 'https://youtu.be/kKXzFv2ICrA'
})

$('.light').on('click', function(){
    alert('Mode is already light ^w^')
})

$('.dark').on('click', function(){
    window.location.href = '../index.html'
})

$('.browse').on('click', function(){
    window.location.href = '../browseL/browse.html'
})

$('.form').on('click', function(){
    window.location.href = '../FormL/form.html'
})






$('.item1').on('click', function(){
    window.location.href = '../itemsL/item1/item1.html'
})

$('.item1').css({
    'background-image': 'url(../images/item2.svg)'
})
$('.item1').css({
    'background-image': 'url(../images/item3.svg)'
})
$('.item1').css({
    'background-image': 'url(../images/item1.svg)'
})

let timer;
let n = 1;

timer = setInterval(function () {
    n++
    if(n == 4){
        n = 1;
    }
    $('.item1').css({
        'background-image': `url(../images/item${n}.svg)`
    })

    $('.item1').on('click', function(){
        window.location.href = `../itemsL/item${n}/item${n}.html`
    })
}, 5000);

let randy = ''

$('.item6').on('click', function(){
    randy = Math.ceil(Math.random() * 3)
    window.location.href = `../itemsL/item${randy}/item${randy}.html`
})