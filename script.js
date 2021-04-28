$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow")
})

$(function(){

    let toggleMode = true;

    $('#menu')

        $('#menu').on('click', function(){
        if(toggleMode){
            $('#home').css({
                'top': '200px'
            })
            $('#shoppingBag').css({
                'top': '290px'
            })
            $('#description').css({
                'top': '380px'
            })
            toggleMode = false
        }else{
            $('#home').css({
                'top': '15px'
            })
            $('#shoppingBag').css({
                'top': '15px'
            })
            $('#description').css({
                'top': '15px'
            })
            toggleMode = true;
        }
    })

    $('#menu').on('mouseover', function(){
        $('#menu').css({
            'transform': 'scale(1.1)'
        })
    })
    $('#home').on('mouseover', function(){
        $('#home').css({
            'transform': 'scale(1.1)'
        })
    })
    $('#shoppingBag').on('mouseover', function(){
        $('#shoppingBag').css({
            'transform': 'scale(1.1)'
        })
    })
    $('#description').on('mouseover', function(){
        $('#description').css({
            'transform': 'scale(1.1)'
        })
    })

    $('#menu').on('mouseleave', function(){
        $('#menu').css({
            'transform': 'scale(1)'
        })
    })
    $('#home').on('mouseleave', function(){
        $('#home').css({
            'transform': 'scale(1)'
        })
    })
    $('#shoppingBag').on('mouseleave', function(){
        $('#shoppingBag').css({
            'transform': 'scale(1)'
        })
    })
    $('#description').on('mouseleave', function(){
        $('#description').css({
            'transform': 'scale(1)'
        })
    })
})