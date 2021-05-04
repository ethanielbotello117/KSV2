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
    window.location.href = 'https://www.youtube.com/watch?v=Lrj2Hq7xqQ8'
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