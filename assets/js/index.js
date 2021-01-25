console.log('rodou');





/* vanilla scroll
-- Verifica se o header está na posição 0 caso não esteja adiciona background;
*/

let scrollpos = window.scrollY
const header = document.querySelector("header.navbar")
const header_height = header.offsetHeight

const add_class_on_scroll = () => header.classList.add("bg-dark")
const remove_class_on_scroll = () => header.classList.remove("bg-dark")

window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;

    if (scrollpos >= header_height) { add_class_on_scroll() }
    else { remove_class_on_scroll() }

    // console.log(scrollpos);
});

// end vanilla scrol



/*
 Modal with video
*/

//https://www.youtube.com/embed/EFVcKWFajHI?autoplay=1
//https://player.vimeo.com/video/462832179?autoplay=1&title=0&byline=0&portrait=0
var testimonialModal = document.getElementById('testimonialModal')
testimonialModal.addEventListener('show.bs.modal', function (event) {
    var button = event.relatedTarget
    var videoURL = button.getAttribute('data-bs-videoURL')
    var modalIframeInput = testimonialModal.querySelector('.modal-body iframe')
    modalIframeInput.setAttribute('src', videoURL)
})

testimonialModal.addEventListener('hidden.bs.modal', function (event) {
    var modalIframeInput = testimonialModal.querySelector('.modal-body iframe')
    modalIframeInput.setAttribute('src', '')
})

/* end Modal with video*/