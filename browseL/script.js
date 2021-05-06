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


$('#logo').on('click', function(){
    window.location.href = '../light/light.html'
})

let itemNum = 1;
$(`#img${itemNum}`).css({
    'background-image': `url(../images/item${itemNum}.svg)`
})
itemNum++
$(`#img${itemNum}`).css({
    'background-image': `url(../images/item${itemNum}.svg)`
})
itemNum++
$(`#img${itemNum}`).css({
    'background-image': `url(../images/item${itemNum}.svg)`
})
itemNum++



$('#i1').on('click', function(){
    n = 1;
    window.location.href = `../items/item${n}/item${n}.html`;
})
$('#i2').on('click', function(){
    n = 2;
    window.location.href = `../items/item${n}/item${n}.html`;
})
$('#i3').on('click', function(){
    n = 3;
    window.location.href = `../items/item${n}/item${n}.html`;
})