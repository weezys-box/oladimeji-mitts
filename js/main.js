// let navBar = document.querySelector('.navbar');
// console.log(navBar);

let learn = document.querySelector('.learn');

console.log(learn);

// Smooth Scrolling
$('.learn').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
                scrollTop: $(hash).offset().top
            },
            800
        );
    }
});


$('.bio').on('click', function () {
    $(this.nextElementSibling).slideToggle();

    let icon = this.children[1];

    icon.classList.toggle('toggle');


})


$('.toggler').on('click', function () {

    $('.nav2').slideToggle();

})


//text whatever

// let bio = document.getElementsByClassName('bio');

// for (let x = 0; x < text.length; x++) {
//     bio[x].addEventListener('click', function () {
//         console.log(bio[x].nextElementSibling);
//     })
// }


let toggler = document.querySelector('.checkbox');

let menuBar = document.querySelector('.bar');

console.log(menuBar);

toggler.addEventListener('click', res)

console.log(toggler);


function res() {
    if (toggler.checked === true) {
        console.log('checked');



    } else {
        console.log('unchecked')
    }

    menuBar.classList.toggle('spin');
}