$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow")
    setTimeout(function () {
        $('body').css({
            'position': 'static'
        })
    }, 500)
})

$(function () {

    let toggleMode = true;

    $('#expand_more').on('click', function () {
        if (toggleMode) {
            $('#expand_more').css({
                'transform': 'rotate(180deg)'
            })
            $('.navWrap').css({
                'height': '300px',
                'padding': '30px 10px'
            })
            toggleMode = false
        } else {
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

window.addEventListener("DOMContentLoaded", function () {

    // get the form elements defined in your form HTML above

    let form = document.getElementById("test-form");
    let button = document.getElementById("test-form-submit");
    let status = document.getElementById("status");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        status.classList.add('success');
        status.innerHTML = "Your form has been sent, we will email you soon Thx!";
    }

    function error() {
        status.classList.add('error');
        status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}

function toggleMenu() {
    let navigation = document.querySelector('.menu');
    let toggle = document.querySelector('.toggle');
    let links = document.querySelector('.linklist');
    let html = document.querySelector('html');
    let body = document.querySelector('body');
    let plop = document.querySelector('.plop');
    navigation.classList.toggle('active');
    toggle.classList.toggle('active');
    links.classList.toggle('active');
    html.classList.toggle('active');
    body.classList.toggle('active');
    plop.classList.toggle('active');
}

$('#logo').on('click', function(){
    window.location.href = '../index.html'
})