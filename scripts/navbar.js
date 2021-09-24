// $(document).ready(function() {
//     $(".nav-toggler").each(function(_, navToggler) {
//         var target = $(navToggler).data("target");
//         $(navToggler).on("click", function() {
//             $(target).animate({
//                 height: "toggler",
//             })
//         });
//     })
// })

const btn = document.querySelector('.nav-toggler');
const menu = document.querySelector('.top-nav');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
})