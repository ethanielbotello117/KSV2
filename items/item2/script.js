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

let img = document.getElementById("img");
img.src = "../../images/item2.svg";

$('#logo').on('click', function(){
    window.location.href = '../../index.html'
})